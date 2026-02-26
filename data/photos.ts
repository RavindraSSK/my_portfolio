export interface Photo {
  src: string;
  alt: string;
  caption: string;
}

export const photos: Photo[] = [
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    alt: 'Mountain landscape at sunrise',
    caption: 'Sunrise ridge line in the Alps.'
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    alt: 'River flowing through forest',
    caption: 'A quiet river trail through old-growth forest.'
  },
  {
    src: 'https://images.unsplash.com/photo-1493244040629-496f6d136cc3',
    alt: 'Aerial coastline',
    caption: 'Coastal textures and changing tides.'
  }
];
