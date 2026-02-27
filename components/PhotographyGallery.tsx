'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import GalleryGrid from '@/components/GalleryGrid';
import type { Photo } from '@/data/photos';

type CategoryFilter = 'All' | Photo['category'];

interface PhotographyGalleryProps {
  photos: Photo[];
}

export default function PhotographyGallery({ photos }: PhotographyGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const categories = useMemo<CategoryFilter[]>(() => {
    const fromData = Array.from(new Set(photos.map((photo) => photo.category)));
    const preferredOrder: CategoryFilter[] = ['Campus', 'Sports', 'Travel', 'Portraits'];

    return ['All', ...preferredOrder.filter((category) => fromData.includes(category as Photo['category']))];
  }, [photos]);

  const filteredPhotos = useMemo(
    () => (activeCategory === 'All' ? photos : photos.filter((photo) => photo.category === activeCategory)),
    [activeCategory, photos]
  );

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + filteredPhotos.length) % filteredPhotos.length;
    });
  }, [filteredPhotos.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + 1) % filteredPhotos.length;
    });
  }, [filteredPhotos.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
        return;
      }

      if (event.key === 'ArrowLeft') {
        showPrevious();
        return;
      }

      if (event.key === 'ArrowRight') {
        showNext();
        return;
      }

      if (event.key === 'Tab') {
        const focusables = [closeButtonRef.current, prevButtonRef.current, nextButtonRef.current].filter(Boolean) as HTMLButtonElement[];
        if (focusables.length === 0) return;

        const currentIndex = focusables.findIndex((element) => element === document.activeElement);

        if (currentIndex === -1) {
          event.preventDefault();
          if (event.shiftKey) {
            focusables[focusables.length - 1].focus();
          } else {
            focusables[0].focus();
          }
          return;
        }

        const direction = event.shiftKey ? -1 : 1;
        const nextIndex = (currentIndex + direction + focusables.length) % focusables.length;

        event.preventDefault();
        focusables[nextIndex].focus();
      }
    };

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  useEffect(() => {
    setActiveIndex(null);
  }, [activeCategory]);

  const activePhoto = activeIndex !== null ? filteredPhotos[activeIndex] : null;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2" aria-label="Photo category filters">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                isActive
                  ? 'border-brand-200 bg-brand-100 text-brand-700'
                  : 'border-slate-300 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900'
              }`}
              aria-pressed={isActive}
            >
              {category}
            </button>
          );
        })}
      </div>

      <GalleryGrid images={filteredPhotos} columnsClassName="grid-cols-2 md:grid-cols-3 lg:grid-cols-4" onImageClick={openLightbox} />

      {activePhoto ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <div className="relative w-full max-w-5xl rounded-xl bg-slate-900 p-4 shadow-2xl">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="absolute right-3 top-3 rounded-md bg-white/10 px-2.5 py-1.5 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              ✕
            </button>

            <div className="relative">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                width={1400}
                height={900}
                className="max-h-[72vh] w-full rounded-lg object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                ref={prevButtonRef}
                type="button"
                onClick={showPrevious}
                aria-label="View previous image"
                className="rounded-md border border-white/25 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                ← Previous
              </button>
              <p className="text-center text-sm text-slate-200">{activePhoto.caption}</p>
              <button
                ref={nextButtonRef}
                type="button"
                onClick={showNext}
                aria-label="View next image"
                className="rounded-md border border-white/25 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
