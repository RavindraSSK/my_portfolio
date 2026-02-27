import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Ravindra Medicharla portfolio: AI research, full-stack ML engineering, projects, and experience.'
};

const featuredProjects = projects.slice(0, 3);

const skillGroups = [
  {
    title: 'ML & Deep Learning',
    items: ['Model training and evaluation', 'Time-series and forecasting', 'MLOps-aware experimentation']
  },
  {
    title: 'Computer Vision & GeoAI',
    items: ['Detection and segmentation pipelines', 'Geospatial raster analysis', 'Applied remote sensing workflows']
  },
  {
    title: 'Full-Stack & APIs',
    items: ['React/Next.js interfaces', 'Type-safe backend APIs', 'Data-driven dashboard development']
  },
  {
    title: 'Cloud & DevOps',
    items: ['Containerized deployment basics', 'CI/CD and quality checks', 'Monitoring-ready service design']
  }
];

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="rounded-2xl bg-gradient-to-r from-brand-50 to-white p-8 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Portfolio</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">Ravindra Medicharla</h1>
        <p className="mt-3 text-xl font-medium text-slate-700 md:text-2xl">AI Researcher & Full-Stack ML Engineer</p>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">
          I design and build intelligent systems that connect research rigor with practical product delivery. My work spans
          machine learning, geospatial analytics, and full-stack engineering for impactful applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/academic-projects"
            className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Academic Projects
          </Link>
          <Link
            href="/experience"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Experience
          </Link>
          <Link
            href="/education"
            className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Education
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Contact
          </Link>
        </div>
      </section>

      <section>
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of project work combining AI, software engineering, and applied research."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card
              key={project.slug}
              title={project.title}
              description={project.summary}
              footer={
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((techItem) => (
                      <Badge key={techItem} label={techItem} />
                    ))}
                  </div>
                  <Link
                    href={`/academic-projects/${project.slug}`}
                    className="inline-flex rounded-md bg-brand-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-700"
                  >
                    View Details
                  </Link>
                </div>
              }
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Skills Snapshot" subtitle="Core capability clusters across research and product engineering." />
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title} title={group.title} description="">
              <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Interested in collaborating?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          I&apos;m open to research collaborations, applied AI initiatives, and product engineering opportunities.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
