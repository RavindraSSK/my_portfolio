import Link from 'next/link';
import type { Metadata } from 'next';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import { projectFilters, projects, type ProjectFilter } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Academic Projects',
  description: 'A showcase of academic projects and research initiatives.'
};

interface AcademicProjectsPageProps {
  searchParams?: {
    filter?: string;
  };
}

const validFilters = new Set<ProjectFilter>(projectFilters);

export default function AcademicProjectsPage({ searchParams }: AcademicProjectsPageProps) {
  const selectedFilter =
    searchParams?.filter && validFilters.has(searchParams.filter as ProjectFilter)
      ? (searchParams.filter as ProjectFilter)
      : 'All';

  const visibleProjects =
    selectedFilter === 'All' ? projects : projects.filter((project) => project.tags.includes(selectedFilter));

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Academic Projects</h1>
        <p className="max-w-3xl text-slate-600">
          Selected work from coursework, research labs, and independent university initiatives.
        </p>
      </header>

      <section className="space-y-4">
        <SectionHeader title="Project Highlights" subtitle="Filter by focus area and explore implementation details." />
        <div className="flex flex-wrap gap-2">
          {projectFilters.map((filter) => {
            const isActive = selectedFilter === filter;
            const href = filter === 'All' ? '/academic-projects' : `/academic-projects?filter=${encodeURIComponent(filter)}`;

            return (
              <Link
                key={filter}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'border-brand-200 bg-brand-100 text-brand-700'
                    : 'border-slate-300 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900'
                }`}
              >
                {filter}
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <Card
              key={project.slug}
              title={project.title}
              description={project.summary}
              footer={
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} label={tag} />
                    ))}
                    {project.tech.map((item) => (
                      <Badge key={item} label={item} />
                    ))}
                  </div>

                  {project.metrics?.length ? (
                    <dl className="grid grid-cols-2 gap-2 rounded-lg bg-slate-100 p-3">
                      {project.metrics.map((metric) => (
                        <div key={metric.label}>
                          <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">{metric.label}</dt>
                          <dd className="text-sm font-semibold text-slate-800">{metric.value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  <div className="flex flex-wrap gap-2">
                    {project.githubUrl ? (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                      >
                        GitHub
                      </Link>
                    ) : null}

                    {project.liveDemoUrl ? (
                      <Link
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                      >
                        Live Demo
                      </Link>
                    ) : null}

                    {project.detailsHref ? (
                      <Link
                        href={project.detailsHref}
                        className="rounded-md bg-brand-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-700"
                      >
                        Details
                      </Link>
                    ) : null}
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}
