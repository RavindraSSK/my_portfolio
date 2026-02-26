import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import PhotographyGallery from '@/components/PhotographyGallery';
import { photos } from '@/data/photos';

export const metadata: Metadata = {
  title: 'Photography',
  description: 'A curated gallery of campus, sports, travel, and portrait photography.'
};

export default function PhotographyPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Photography</h1>
        <p className="max-w-3xl text-slate-600">Visual notes from campus life, sports moments, travel scenes, and portraits.</p>
      </header>

      <section className="space-y-4">
        <SectionHeader title="Recent Captures" subtitle="Filter by category and open any image in an interactive lightbox." />
        <p className="text-sm text-slate-500">Add images to /public/photos and update data/photos.ts.</p>
        <PhotographyGallery photos={photos} />
      </section>
    </div>
  );
}
