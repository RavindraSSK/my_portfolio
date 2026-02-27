import type { Metadata } from 'next';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Professional snapshot, skills, and downloadable resume placeholder.'
};

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
        <p className="max-w-3xl text-slate-600">A concise summary of experience, education, and core skills.</p>
      </header>
      <section>
        <SectionHeader title="Overview" subtitle="Replace placeholders with your official resume details and links." />
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Education" description="B.S. in Architecture & Computing · University Name · 2022-2026" />
          <Card title="Key Skills" description="Product Design, Front-end Engineering, Data Visualization, Research Communication" />
        </div>
      </section>
    </div>
  );
}
