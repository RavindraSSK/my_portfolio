export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Product Design Intern',
    organization: 'CivicTech Studio',
    period: 'Summer 2025',
    highlights: ['Designed wireframes for a citizen-services app.', 'Collaborated with engineers to ship accessibility improvements.']
  },
  {
    role: 'Research Assistant',
    organization: 'University Smart Systems Lab',
    period: '2024 - 2025',
    highlights: ['Co-authored a paper on adaptive building controls.', 'Built data pipelines to process sensor streams.']
  }
];
