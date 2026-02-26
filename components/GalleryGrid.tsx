import Image from 'next/image';

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryGridProps {
  images: GalleryItem[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <figure key={image.src} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            className="h-52 w-full object-cover transition duration-300 hover:scale-105"
          />
          {image.caption ? <figcaption className="px-4 py-3 text-sm text-slate-600">{image.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
