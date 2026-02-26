import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import SectionHeader from '@/components/SectionHeader';
import { photos } from '@/data/photos';

export const metadata: Metadata = {
  title: 'Photography',
  description: 'A curated gallery of landscape and travel photography.'
};

export default function PhotographyPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Photography</h1>
        <p className="max-w-3xl text-slate-600">Visual notes from mountains, coastlines, and life on the move.</p>
      </header>
      <section>
        <SectionHeader title="Recent Captures" subtitle="A responsive gallery showcasing sample image placeholders." />
        <GalleryGrid images={photos} />
      </section>
    </div>
  );
}
