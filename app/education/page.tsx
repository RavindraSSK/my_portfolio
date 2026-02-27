import type { Metadata } from 'next';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Education',
  description: 'Academic background, degrees, and relevant coursework.'
};

const coursework = [
  'Machine Learning Systems',
  'Deep Learning',
  'Natural Language Processing',
  'Advanced Data Mining',
  'Computer Vision'
];

export default function EducationPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Education</h1>
        <p className="max-w-3xl text-slate-600">A concise overview of my graduate and undergraduate academic journey.</p>
      </header>

      <section className="space-y-5">
        <SectionHeader title="Academic Background" subtitle="Degrees, timeline, and key focus areas." />

        <div className="grid gap-5 lg:grid-cols-2">
          <Card
            title="M.S. in Artificial Intelligence"
            description="Saint Louis University · Jan 2025 – Dec 2026 · GPA: TBD"
          >
            <div className="space-y-3">
              <p className="text-sm text-slate-600">Focused on applied machine learning, responsible AI, and production model deployment.</p>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-900">Relevant Coursework</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600">
                  {coursework.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <Card
            title="B.Tech in Civil Engineering"
            description="Vel Tech · Jul 2016 – Aug 2020 · GPA: TBD"
          >
            <p className="text-sm text-slate-600">
              Built a strong foundation in analytical problem-solving, systems thinking, and project execution.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
