export interface BlogPostMeta {
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    title: 'Designing Better Learning Spaces',
    excerpt: 'What I learned from analyzing campus collaboration patterns and study behavior.',
    publishedAt: '2026-01-12',
    category: 'Design'
  },
  {
    title: 'Photography Workflow in the Field',
    excerpt: 'A lightweight setup for capturing travel stories without overpacking gear.',
    publishedAt: '2025-11-03',
    category: 'Photography'
  }
];
