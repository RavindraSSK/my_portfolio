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

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  problem: string;
  approach: string;
  results: string;
  category: ProjectCategory;
  tags: string[];
  tech: string[];
  metrics?: ProjectMetric[];
  links: ProjectLinks;
  images?: ProjectImage[];
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
    summary: 'Full-stack dashboard to monitor congestion, ridership, and route efficiency.',
    overview:
      'This project combines geospatial data pipelines and interactive dashboards to help city planners identify mobility bottlenecks and make evidence-based infrastructure decisions.',
    problem:
      'Transit agencies lacked a unified view of ridership, congestion heatmaps, and service reliability across routes, causing delayed interventions.',
    approach:
      'Built ETL jobs to normalize mobility datasets, stored aggregates in PostgreSQL, and implemented a Next.js interface with map overlays and KPI drill-downs.',
    results:
      'Enabled weekly planning reviews with reliable operational indicators and reduced manual analysis effort through centralized reporting workflows.',
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
    images: [
      {
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
        alt: 'Transit network data visualization interface',
        caption: 'Route-level mobility overview dashboard.'
      }
    ]
  },
  {
    slug: 'renewable-energy-forecasting',
    title: 'Renewable Energy Forecasting Model',
    summary: 'ML pipeline for hourly solar and wind generation predictions with weather features.',
    overview:
      'A machine-learning forecasting stack designed to improve short-horizon renewable output predictions for grid simulation and planning.',
    problem:
      'Forecast errors in variable energy supply complicated dispatch decisions and reduced confidence in simulation outcomes.',
    approach:
      'Engineered weather and historical generation features, trained ensemble and neural models, and exposed inference endpoints via a lightweight API.',
    results:
      'Improved forecast stability and reduced error variance, supporting more dependable scenario analysis in planning exercises.',
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
    images: [
      {
        src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
        alt: 'Renewable forecasting model performance chart',
        caption: 'Prediction intervals across solar and wind signals.'
      }
    ]
  },
  {
    slug: 'campus-space-vision',
    title: 'Campus Space Vision System',
    summary: 'CV prototype estimating room occupancy to optimize scheduling and utilization.',
    overview:
      'A computer-vision experiment that estimates space occupancy from camera feeds and translates observations into scheduling insights.',
    problem:
      'Room booking systems overestimated usage because they relied on reservations, not observed occupancy patterns.',
    approach:
      'Trained a lightweight detection model for indoor counting, added confidence filtering, and surfaced occupancy trends in a monitoring dashboard.',
    results:
      'Identified underutilized time slots and helped inform pilot adjustments to classroom allocation strategies.',
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
    images: [
      {
        src: 'https://images.unsplash.com/photo-1493244040629-496f6d136cc3',
        alt: 'Computer vision occupancy detection dashboard',
        caption: 'Occupancy detection output and utilization trends.'
      }
    ]
  },
  {
    slug: 'research-collab-hub',
    title: 'Research Collaboration Hub',
    summary: 'Portal for experiment logs, finding annotations, and publication milestone tracking.',
    overview:
      'A collaboration workspace for distributed research teams to document experiments, annotate outcomes, and align on publication timelines.',
    problem:
      'Lab notes and project updates were fragmented across documents, creating versioning and coordination challenges.',
    approach:
      'Implemented role-based workspaces, structured note templates, and milestone boards with searchable records.',
    results:
      'Improved visibility into experiment progress and reduced overhead in weekly sync preparation.',
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
    overview:
      'An end-to-end geospatial workflow that processes raster tiles and extracts environmental indicators for exploratory analysis.',
    problem:
      'Raw satellite datasets were difficult to analyze quickly for local trend detection without preprocessed indicators.',
    approach:
      'Automated tile ingestion, computed vegetation and surface-temperature indices, and presented trends through an interactive chart layer.',
    results:
      'Reduced analysis turnaround time and surfaced seasonal change patterns useful for environmental reporting.',
    category: 'Data',
    tags: ['Satellite', 'Climate', 'Spatial Analysis'],
    tech: ['Rasterio', 'NumPy', 'QGIS', 'D3.js'],
    metrics: [{ label: 'Tiles Processed', value: '2,400+' }],
    links: {
      demo: 'https://demo.example.com/remote-sensing-insights'
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        alt: 'Remote sensing imagery visualization',
        caption: 'Satellite-derived vegetation and heat anomaly map.'
      }
    ]
  }
];
    slug: 'meditrust-xai-healthcare-risk',
    title: 'MediTrust – Explainable AI Healthcare Risk Prediction Platform',
    summary:
      'Cloud-ready full-stack ML platform for cardiovascular risk prediction with SHAP explainability, fairness evaluation, CI/CD automation, and AWS deployment.',
    tags: ['Full-Stack', 'ML', 'Data'],
    tech: [
      'FastAPI',
      'React',
      'PostgreSQL',
      'XGBoost',
      'SHAP',
      'Docker',
      'GitHub Actions',
      'AWS'
    ],
    metrics: [
      { label: 'ROC-AUC', value: '0.87 (XGBoost)' },
      { label: 'F1 Improvement', value: '+12% vs baseline' }
    ],
    githubUrl: 'https://github.com/RavindraSSK',
    detailsHref: '/academic-projects/meditrust-xai-healthcare-risk'
  },
  {
    slug: 'campus-objects-lw-detr',
    title: 'Campus-Objects – Multi-Class Object Detection with LW-DETR',
    summary:
      'End-to-end object detection pipeline using LW-DETR with a custom COCO-format campus dataset and evaluation utilities.',
    tags: ['CV', 'ML', 'Data'],
    tech: ['PyTorch', 'LW-DETR', 'COCO Format', 'Python','DL'],
    metrics: [
      { label: 'mAP@0.5', value: '0.71 (validation)' },
      { label: 'Dataset Size', value: '3,000+ images' }
    ],
    githubUrl: 'https://github.com/RavindraSSK',
    detailsHref: '/academic-projects/campus-objects-lw-detr'
  },
  {
    slug: 'snaptune-multimodal-music',
    title: 'Snap Tune – AI-Powered Multi-Modal Music Recommender',
    summary:
      'Multi-modal AI application that converts user-uploaded images into contextual Spotify music recommendations using BLIP captioning and mood inference.',
    tags: ['ML', 'Full-Stack'],
    tech: [
      'Streamlit',
      'BLIP',
      'DistilGPT2',
      'Spotify API',
      'Hugging Face Transformers'
    ],
    metrics: [
      { label: 'Inference Latency', value: '< 2 seconds' }
    ],
    githubUrl: 'https://github.com/RavindraSSK',
    detailsHref: '/academic-projects/snaptune-multimodal-music'
  },
  {
    slug: 'tls-asbuilt-mapping-iitb',
    title: 'As-Built Mapping Using Terrestrial Laser Scanner (TLS)',
    summary:
      'Geospatial research workflow involving TLS scan planning, point-cloud capture, 3D modeling, and quality control documentation at IIT Bombay.',
    tags: ['Data'],
    tech: ['Cyclone', 'AutoCAD', 'TLS Hardware'],
    metrics: [
      { label: 'Impact', value: 'Adopted as lab reference workflow' }
    ],
    githubUrl: 'https://github.com/RavindraSSK',
    detailsHref: '/academic-projects/tls-asbuilt-mapping-iitb'
  }
];
