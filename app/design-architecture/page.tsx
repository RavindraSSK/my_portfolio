import type { Metadata } from 'next';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import { designProjects } from '@/data/design';

export const metadata: Metadata = {
  title: 'Design & Architecture',
  description: 'Design and architectural concepts focused on people and systems.'
};

export default function DesignArchitecturePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Design & Architecture</h1>
        <p className="max-w-3xl text-slate-600">Concept-driven projects connecting form, function, and sustainability.</p>
      </header>
      <section>
        <SectionHeader title="Featured Concepts" subtitle="Selected pieces from design explorations." />
        <div className="grid gap-5 md:grid-cols-2">
          {designProjects.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.summary}
              footer={
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} label={tag} />
                  ))}
                </div>
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}
