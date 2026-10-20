export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  image: string;
  liveUrl?: string;
  technologies: string[];
  deliverables: string[];
  challenge: string;
  solution: string;
  featured: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: 'Layout' | 'Code' | 'Zap' | 'ShoppingBag' | 'RefreshCw' | 'Cpu';
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  activities: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}
