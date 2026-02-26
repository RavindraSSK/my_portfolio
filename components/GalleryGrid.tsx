import Image from 'next/image';

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryGridProps {
  images: GalleryItem[];
  columnsClassName?: string;
  onImageClick?: (index: number) => void;
}

export default function GalleryGrid({
  images,
  columnsClassName = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  onImageClick
}: GalleryGridProps) {
  return (
    <div className={`grid gap-4 ${columnsClassName}`}>
      {images.map((image, index) => (
        <figure key={`${image.src}-${index}`} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {onImageClick ? (
            <button
              type="button"
              onClick={() => onImageClick(index)}
              aria-label={`Open image: ${image.alt}`}
              className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="h-52 w-full object-cover transition duration-300 hover:scale-105"
              />
            </button>
          ) : (
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="h-52 w-full object-cover transition duration-300 hover:scale-105"
            />
          )}
          {image.caption ? <figcaption className="px-4 py-3 text-sm text-slate-600">{image.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
