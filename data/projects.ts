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