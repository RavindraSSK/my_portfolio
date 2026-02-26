import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Badge from '@/components/Badge';
import SectionHeader from '@/components/SectionHeader';
import { projects } from '@/data/projects';

interface ProjectDetailsPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: ProjectDetailsPageProps): Metadata {
  const project = projects.find((entry) => entry.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'Requested project details could not be found.'
    };
  }

  return {
    title: `${project.title} Details`,
    description: project.summary
  };
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const project = projects.find((entry) => entry.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Academic Projects</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">{project.title}</h1>
        <p className="max-w-3xl text-slate-600">{project.summary}</p>
      </header>

      <section className="space-y-4">
        <SectionHeader title="Focus Areas" subtitle="Category, tags, and technical stack." />
        <div className="flex flex-wrap gap-2">
          <Badge label={project.category} />
          {project.tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
          {project.tech.map((item) => (
            <Badge key={item} label={item} />
          ))}
        </div>
      </section>

      {project.metrics?.length ? (
        <section className="space-y-4">
          <SectionHeader title="Project Metrics" subtitle="Selected performance and impact measurements." />
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <dt className="text-xs uppercase tracking-wide text-slate-500">{metric.label}</dt>
                <dd className="mt-1 text-xl font-semibold text-slate-900">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <div className="flex flex-wrap gap-2">
        {project.links.github ? (
          <Link
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            GitHub
          </Link>
        ) : null}
        {project.links.demo ? (
          <Link
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Live Demo
          </Link>
        ) : null}
        <Link
          href="/academic-projects"
          className="rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
