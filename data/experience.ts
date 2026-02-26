export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
  tech?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Product Design Intern',
    organization: 'CivicTech Studio',
    location: 'New York, NY',
    period: 'Summer 2025',
    highlights: [
      'Designed wireframes for a citizen-services app used in municipal usability pilots.',
      'Collaborated with engineers to ship accessibility improvements across core flows.'
    ],
    tech: ['Figma', 'Design Systems', 'WCAG']
  },
  {
    role: 'Research Assistant',
    organization: 'University Smart Systems Lab',
    location: 'Boston, MA',
    period: '2024 - 2025',
    highlights: [
      'Co-authored a paper on adaptive building controls and experimental validation.',
      'Built data pipelines to process sensor streams for thermal comfort analysis.'
    ],
    tech: ['Python', 'Pandas', 'Data Visualization']
  }
];
