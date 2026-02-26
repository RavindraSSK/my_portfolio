import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Alex portfolio: projects, experience, photography, and more.'
};

const quickLinks = [
  { href: '/academic-projects', title: 'Academic Projects', description: 'Research, prototypes, and technical explorations.' },
  { href: '/experience', title: 'Experience', description: 'Professional and academic collaborations.' },
  { href: '/photography', title: 'Photography', description: 'Travel and landscape collections.' }
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="rounded-2xl bg-gradient-to-r from-brand-50 to-white p-8 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Portfolio</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Hi, I&apos;m Alex.</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          I blend engineering, design, and storytelling to build meaningful experiences across digital and physical spaces.
        </p>
      </section>

      <section>
        <SectionHeader title="Explore" subtitle="Start with these featured sections and discover more across the site." />
        <div className="grid gap-4 md:grid-cols-3">
          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card title={item.title} description={item.description} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
