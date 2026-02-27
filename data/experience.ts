export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
  tech?: string[];
  featured?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Graduate Researcher – GeoAI, Computer Vision & Deep Learning',
    organization: 'AI-CHESS Lab, Saint Louis University',
    location: 'St. Louis, MO',
    period: 'Oct 2025 – Present',
    featured: true,
    tech: ['PyTorch', 'TensorFlow', 'OpenCV', 'rasterio', 'GeoPandas', 'Python'],
    highlights: [
      'Designing and evaluating CNN and GAN-based deep learning models for image-based pattern analysis across multi-modal spatial datasets including high-resolution satellite imagery and vector data.',
      'Implementing attention-based shadow removal techniques on aerial imagery to reduce interference artifacts and improve downstream geospatial classification accuracy.',
      'Building end-to-end reproducible AI pipelines covering data ingestion, augmentation, model training, hyperparameter tuning, and evaluation.',
      'Collaborating across disciplines at the intersection of GeoAI, environmental modeling, and deep learning; contributing to publications and experimental documentation.'
    ]
  },
  {
    role: 'Athletics Event Operations Assistant',
    organization: 'Department of Athletics, Saint Louis University',
    location: 'St. Louis, MO',
    period: 'Aug 2025 – Jan 2026',
    highlights: [
      'Supported game-day operations, event setup, and logistics for university athletic events, ensuring smooth coordination across teams and staff.',
      'Maintained operational efficiency and safety standards during large-scale campus events.'
    ]
  },
  {
    role: 'Data Visualization Associate – Project Lead (Internship)',
    organization: 'Excelerate',
    location: 'Remote',
    period: 'Feb 2025 – Mar 2025',
    featured: true,
    tech: ['Google Data Studio', 'EDA', 'Dashboarding'],
    highlights: [
      'Managed end-to-end data pipeline for 5,000+ student engagement records with a global team of 6; reduced data inconsistencies by 40%.',
      'Designed and delivered 3 interactive dashboards tracking signup trends and engagement KPIs adopted across 4 countries.',
      'Translated complex data patterns into actionable insights for technical and non-technical stakeholders.'
    ]
  },
  {
    role: 'Salesforce Administrator & Developer (Internship)',
    organization: 'Salesforce',
    location: 'Remote',
    period: 'Aug 2023 – Oct 2023',
    tech: ['Salesforce Flow', 'Process Builder', 'SOQL', 'SOSL'],
    highlights: [
      'Automated 10+ CRM workflows using Process Builder and Flow; customized objects and data models to improve workflow efficiency.',
      'Built SOQL/SOSL applications with validation rules and role-based access controls; earned Super Badges: Apex Specialist and Process Automation Specialist.'
    ]
  },
  {
    role: 'Subject Matter Expert – Mathematics',
    organization: 'Chegg India Pvt. Ltd.',
    location: 'Remote',
    period: 'Apr 2021 – Aug 2023',
    tech: ['R', 'Minitab', 'Statistics'],
    highlights: [
      "Authored and reviewed 500+ advanced probability and statistics solutions; recognized as 'Quality Champ' for exceptional accuracy.",
      'Applied statistical modeling and inferential techniques to develop rigorous step-by-step solutions supporting students globally.'
    ]
  },
  {
    role: 'Lead Designer (Freelancer)',
    organization: 'SSKS Home Designs',
    location: 'Remote',
    period: 'Aug 2021 – Dec 2023',
    tech: ['AutoCAD', 'SketchUp'],
    highlights: [
      'Founded a sustainable architecture startup; delivered 15+ complete building models and interior/exterior designs.',
      'Managed full client lifecycle from project brief to final delivery.'
    ]
  },
  {
    role: 'Research Intern (IAS Summer Research Fellowship)',
    organization: 'Indian Institute of Technology (IIT) Bombay',
    location: 'Mumbai, India',
    period: 'Jun 2019 – Aug 2019',
    featured: true,
    tech: ['Cyclone', 'AutoCAD', 'TLS'],
    highlights: [
      'Led TLS as-built mapping research capturing, processing, and documenting 3D scan data.',
      'Developed standardized QC procedures adopted as lab reference and contributed to technical documentation and publications.'
    ]
  }
];
