import type { Metadata } from 'next';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import { sports } from '@/data/sports';

export const metadata: Metadata = {
  title: 'Sports & Fitness',
  description: 'Training philosophies, routines, and athletic interests.'
};

export default function SportsFitnessPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Sports & Fitness</h1>
        <p className="max-w-3xl text-slate-600">How I stay disciplined, energized, and mentally sharp outside of work.</p>
      </header>
      <section>
        <SectionHeader title="Current Focus" subtitle="Core activities and progression areas." />
        <div className="grid gap-4 md:grid-cols-2">
          {sports.map((sport) => (
            <Card key={sport.title} title={sport.title} description={sport.description} footer={<Badge label={sport.level} />} />
          ))}
        </div>
      </section>
    </div>
  );
}
