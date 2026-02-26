export const projectFilters = ['All', 'ML', 'CV', 'Full-Stack', 'Data'] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: Exclude<ProjectFilter, 'All'>[];
  tech: string[];
  metrics?: ProjectMetric[];
  githubUrl?: string;
  liveDemoUrl?: string;
  detailsHref?: string;
}

export const projects: Project[] = [
  {
    slug: 'urban-mobility-analytics',
    title: 'Urban Mobility Analytics Platform',
    summary: 'A full-stack analytics dashboard for city transit planners to monitor congestion, demand, and route efficiency.',
    tags: ['Data', 'Full-Stack'],
    tech: ['Next.js', 'PostgreSQL', 'Python', 'Mapbox'],
    metrics: [
      { label: 'Datasets', value: '14M+ records' },
      { label: 'Latency', value: '< 240ms' }
    ],
    githubUrl: 'https://github.com/example/urban-mobility-analytics',
    liveDemoUrl: 'https://demo.example.com/urban-mobility-analytics',
    detailsHref: '/academic-projects/urban-mobility-analytics'
  },
  {
    slug: 'renewable-energy-forecasting',
    title: 'Renewable Energy Forecasting Model',
    summary: 'Machine learning pipeline for hourly solar and wind generation forecasts with weather-informed feature engineering.',
    tags: ['ML', 'Data'],
    tech: ['PyTorch', 'scikit-learn', 'Pandas', 'FastAPI'],
    metrics: [
      { label: 'MAE', value: '8.9%' },
      { label: 'Forecast Horizon', value: '72h' }
    ],
    githubUrl: 'https://github.com/example/renewable-forecasting',
    detailsHref: '/academic-projects/renewable-energy-forecasting'
  },
  {
    slug: 'campus-space-vision',
    title: 'Campus Space Vision System',
    summary: 'Computer vision prototype to estimate room occupancy and identify underutilized campus spaces for scheduling optimization.',
    tags: ['CV', 'ML'],
    tech: ['OpenCV', 'YOLOv8', 'Python', 'Streamlit'],
    metrics: [
      { label: 'Detection mAP', value: '0.87' },
      { label: 'Pilot Rooms', value: '32' }
    ],
    githubUrl: 'https://github.com/example/campus-space-vision',
    liveDemoUrl: 'https://demo.example.com/campus-space-vision',
    detailsHref: '/academic-projects/campus-space-vision'
  },
  {
    slug: 'research-collab-hub',
    title: 'Research Collaboration Hub',
    summary: 'A multi-tenant portal for lab members to share experiment logs, annotate findings, and track publication milestones.',
    tags: ['Full-Stack'],
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Supabase'],
    githubUrl: 'https://github.com/example/research-collab-hub',
    detailsHref: '/academic-projects/research-collab-hub'
  },
  {
    slug: 'remote-sensing-insights',
    title: 'Remote Sensing Insights',
    summary: 'Data analysis workflow for satellite imagery to detect vegetation trends and surface-temperature anomalies.',
    tags: ['Data', 'CV'],
    tech: ['Rasterio', 'NumPy', 'QGIS', 'D3.js'],
    metrics: [{ label: 'Tiles Processed', value: '2,400+' }],
    liveDemoUrl: 'https://demo.example.com/remote-sensing-insights',
    detailsHref: '/academic-projects/remote-sensing-insights'
  }
];
