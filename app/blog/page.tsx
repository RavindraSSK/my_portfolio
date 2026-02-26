import type { Metadata } from 'next';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing and reflections on design, systems, and creativity.'
};

export default function BlogPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="max-w-3xl text-slate-600">Article metadata is listed below. Full post pages can be added later.</p>
      </header>
      <section>
        <SectionHeader title="Latest Posts" subtitle="A placeholder stream for future long-form writing." />
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Card key={post.title} title={post.title} description={post.excerpt} footer={<Badge label={`${post.category} · ${post.publishedAt}`} />} />
          ))}
        </div>
      </section>
    </div>
  );
}
