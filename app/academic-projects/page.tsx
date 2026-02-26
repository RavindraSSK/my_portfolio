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
    q?: string;
  };
}

const validFilters = new Set<ProjectFilter>(projectFilters);

export default function AcademicProjectsPage({ searchParams }: AcademicProjectsPageProps) {
  const selectedFilter =
    searchParams?.filter && validFilters.has(searchParams.filter as ProjectFilter)
      ? (searchParams.filter as ProjectFilter)
      : 'All';
  const query = searchParams?.q?.trim().toLowerCase() ?? '';

  const visibleProjects = projects.filter((project) => {
    const matchesFilter = selectedFilter === 'All' ? true : project.category === selectedFilter;
    const searchText = `${project.title} ${project.tags.join(' ')} ${project.tech.join(' ')}`.toLowerCase();
    const matchesSearch = query ? searchText.includes(query) : true;

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Academic Projects</h1>
        <p className="max-w-3xl text-slate-600">
          Selected work from coursework, research labs, and independent university initiatives.
        </p>
      </header>

      <section className="space-y-4">
        <SectionHeader title="Project Highlights" subtitle="Filter by category and search across titles, tags, and technologies." />

        <form action="/academic-projects" method="get" className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {selectedFilter !== 'All' ? <input type="hidden" name="filter" value={selectedFilter} /> : null}
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <input
            id="project-search"
            name="q"
            defaultValue={searchParams?.q ?? ''}
            placeholder="Search by title, tags, or tech"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          />
          <button
            type="submit"
            className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Search
          </button>
        </form>

        <div className="flex flex-wrap gap-2">
          {projectFilters.map((filter) => {
            const isActive = selectedFilter === filter;
            const href =
              filter === 'All'
                ? query
                  ? `/academic-projects?q=${encodeURIComponent(query)}`
                  : '/academic-projects'
                : `/academic-projects?filter=${encodeURIComponent(filter)}${
                    query ? `&q=${encodeURIComponent(query)}` : ''
                  }`;

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
                    <Badge label={project.category} />
                    {project.tech.map((item) => (
                      <Badge key={item} label={item} />
                    ))}
                  </div>

                  {project.metrics?.length ? (
                    <p className="text-sm text-slate-600">
                      {project.metrics.map((metric) => `${metric.label}: ${metric.value}`).join(' · ')}
                    </p>
                  ) : null}

                  <div className="flex flex-wrap gap-2">
                    {project.links.github ? (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                      >
                        GitHub
                      </Link>
                    ) : null}

                    {project.links.demo ? (
                      <Link
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                      >
                        Live Demo
                      </Link>
                    ) : null}

                    <Link
                      href={`/academic-projects/${project.slug}`}
                      className="rounded-md bg-brand-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              }
            />
          ))}
        </div>

        {visibleProjects.length === 0 ? (
          <p className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600">
            No projects match your current filter and search query.
          </p>
        ) : null}
      </section>
    </div>
  );
}
