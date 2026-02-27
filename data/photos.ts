export type PhotoCategory = 'Campus' | 'Sports' | 'Travel' | 'Portraits';

export interface Photo {
  src: string;
  alt: string;
  caption: string;
  category: PhotoCategory;
}

export const photos: Photo[] = [
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    alt: 'Mountain landscape at sunrise',
    caption: 'Sunrise ridge line in the Alps.',
    category: 'Travel'
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    alt: 'Runner in motion on a morning track',
    caption: 'Sprint session before sunrise.',
    category: 'Sports'
  },
  {
    src: 'https://images.unsplash.com/photo-1493244040629-496f6d136cc3',
    alt: 'Aerial coastline',
    caption: 'Coastal textures and changing tides.',
    category: 'Travel'
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    alt: 'University campus walkway',
    caption: 'Quiet evening crossing on campus.',
    category: 'Campus'
  },
  {
    src: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
    alt: 'Close portrait of a person in natural light',
    caption: 'Portrait study with soft side lighting.',
    category: 'Portraits'
  },
  {
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
    alt: 'Soccer players in action',
    caption: 'Weekend match highlights.',
    category: 'Sports'
  }
];
