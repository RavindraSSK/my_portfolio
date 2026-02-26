export const projectFilters = ['All', 'ML', 'CV', 'Full-Stack', 'Data'] as const;

export type ProjectFilter = (typeof projectFilters)[number];
export type ProjectCategory = Exclude<ProjectFilter, 'All'>;

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  tags: string[];
  tech: string[];
  metrics?: ProjectMetric[];
  links: ProjectLinks;
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: 'urban-mobility-analytics',
    title: 'Urban Mobility Analytics Platform',
    summary: 'Full-stack dashboard to monitor congestion, ridership, and route efficiency.',
    category: 'Full-Stack',
    tags: ['Data Visualization', 'Transit', 'Geospatial'],
    tech: ['Next.js', 'PostgreSQL', 'Python', 'Mapbox'],
    metrics: [
      { label: 'Datasets', value: '14M+ records' },
      { label: 'Latency', value: '< 240ms' }
    ],
    links: {
      github: 'https://github.com/example/urban-mobility-analytics',
      demo: 'https://demo.example.com/urban-mobility-analytics'
    },
    images: ['https://images.unsplash.com/photo-1469474968028-56623f02e42e']
  },
  {
    slug: 'renewable-energy-forecasting',
    title: 'Renewable Energy Forecasting Model',
    summary: 'ML pipeline for hourly solar and wind generation predictions with weather features.',
    category: 'ML',
    tags: ['Time Series', 'Forecasting', 'Energy'],
    tech: ['PyTorch', 'scikit-learn', 'Pandas', 'FastAPI'],
    metrics: [
      { label: 'MAE', value: '8.9%' },
      { label: 'Horizon', value: '72h' }
    ],
    links: {
      github: 'https://github.com/example/renewable-forecasting'
    },
    images: ['https://images.unsplash.com/photo-1501785888041-af3ef285b470']
  },
  {
    slug: 'campus-space-vision',
    title: 'Campus Space Vision System',
    summary: 'CV prototype estimating room occupancy to optimize scheduling and utilization.',
    category: 'CV',
    tags: ['Object Detection', 'Smart Campus', 'Analytics'],
    tech: ['OpenCV', 'YOLOv8', 'Python', 'Streamlit'],
    metrics: [
      { label: 'Detection mAP', value: '0.87' },
      { label: 'Pilot Rooms', value: '32' }
    ],
    links: {
      github: 'https://github.com/example/campus-space-vision',
      demo: 'https://demo.example.com/campus-space-vision'
    },
    images: ['https://images.unsplash.com/photo-1493244040629-496f6d136cc3']
  },
  {
    slug: 'research-collab-hub',
    title: 'Research Collaboration Hub',
    summary: 'Portal for experiment logs, finding annotations, and publication milestone tracking.',
    category: 'Full-Stack',
    tags: ['Collaboration', 'Knowledge Base', 'Productivity'],
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Supabase'],
    links: {
      github: 'https://github.com/example/research-collab-hub'
    }
  },
  {
    slug: 'remote-sensing-insights',
    title: 'Remote Sensing Insights',
    summary: 'Data workflow for satellite imagery to detect vegetation and heat anomalies.',
    category: 'Data',
    tags: ['Satellite', 'Climate', 'Spatial Analysis'],
    tech: ['Rasterio', 'NumPy', 'QGIS', 'D3.js'],
    metrics: [{ label: 'Tiles Processed', value: '2,400+' }],
    links: {
      demo: 'https://demo.example.com/remote-sensing-insights'
    },
    images: ['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee']
  }
];
