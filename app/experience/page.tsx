import Link from 'next/link';
import type { Metadata } from 'next';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import { experiences } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional and research experience across design and engineering.'
};

// Source order is treated as newest-first to preserve editorial intent from data/experience.ts.
const orderedExperiences = experiences;

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Experience</h1>
        <p className="max-w-3xl text-slate-600">Roles that shaped how I collaborate, ship, and learn quickly.</p>
      </header>

      <section className="space-y-6">
        <SectionHeader
          title="Timeline"
          subtitle="A professional journey across design, research, and product execution."
        />

        <ol className="space-y-6 md:space-y-8">
          {orderedExperiences.map((item, index) => (
            <li key={`${item.role}-${item.organization}`} className="relative md:grid md:grid-cols-[3rem_1fr] md:gap-6">
              <div className="hidden md:flex md:justify-center" aria-hidden="true">
                <div className="relative flex w-12 justify-center">
                  {index < orderedExperiences.length - 1 ? (
                    <span className="absolute top-6 h-[calc(100%+1.5rem)] w-px bg-slate-200" />
                  ) : null}
                  <span className="mt-2 h-3.5 w-3.5 rounded-full border-2 border-brand-200 bg-brand-600" />
                </div>
              </div>

              <Card title={item.role} description={`${item.organization} · ${item.location}`}>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
                    <p className="text-sm font-semibold text-slate-700 sm:text-right">{item.period}</p>
                  </div>

                  <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-slate-600">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  {item.tech?.length ? (
                    <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                      {item.tech.map((tool) => (
                        <Badge key={tool} label={tool} />
                      ))}
                    </div>
                  ) : null}
                </div>
              </Card>
            </li>
          ))}
        </ol>

        <div>
          <Link
            href="/resume"
            className="inline-flex items-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            Download Resume
          </Link>
        </div>
      </section>
    </div>
  );
}
