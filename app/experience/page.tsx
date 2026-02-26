import type { Metadata } from 'next';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import { experiences } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional and research experience across design and engineering.'
};

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Experience</h1>
        <p className="max-w-3xl text-slate-600">Roles that shaped how I collaborate, ship, and learn quickly.</p>
      </header>
      <section>
        <SectionHeader title="Timeline" subtitle="Key responsibilities and outcomes from recent roles." />
        <div className="space-y-4">
          {experiences.map((item) => (
            <Card
              key={`${item.role}-${item.organization}`}
              title={`${item.role} · ${item.organization}`}
              description={item.period}
            >
              <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
