export interface DesignItem {
  title: string;
  summary: string;
  tags: string[];
}

export const designProjects: DesignItem[] = [
  {
    title: 'Community Library Pavilion Concept',
    summary: 'A climate-responsive pavilion concept emphasizing daylight, passive cooling, and local materials.',
    tags: ['Architecture', 'Sustainability']
  },
  {
    title: 'Minimal Workspace Interior Kit',
    summary: 'A modular workspace system balancing ergonomics, acoustics, and visual calm.',
    tags: ['Interior Design', 'Product Thinking']
  }
];
