import type { ServiceItem, ProcessStep } from '../types';

export const services: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'Website Design',
    tagline: 'Visual hierarchy, typography, and purposeful aesthetics.',
    description: 'Thoughtful layouts, clear typographic structure, and user-focused interfaces tailored to establish your brand authority and guide visitor attention.',
    deliverables: ['Custom Figma Prototypes', 'Responsive Layout Grids', 'Design Systems & Tokens', 'Interaction Specifications'],
    iconName: 'Layout',
  },
  {
    id: 'web-development',
    number: '02',
    title: 'Web Development',
    tagline: 'Clean code, modern standards, and sub-second performance.',
    description: 'Responsive, accessible websites engineered to load instantly and run flawlessly across every modern device, screen size, and browser.',
    deliverables: ['Semantic HTML & Modern CSS', 'TypeScript / React / Next.js', 'Core Web Vitals Optimization', 'WCAG AA Accessibility'],
    iconName: 'Code',
  },
  {
    id: 'landing-pages',
    number: '03',
    title: 'Landing Pages',
    tagline: 'Focused narratives engineered to convert interest into action.',
    description: 'Laser-focused single-page destinations designed to articulate your unique value proposition and guide prospects smoothly toward conversion.',
    deliverables: ['Narrative Wireframing', 'Conversion Funnel Strategy', 'Lead Capture Integration', 'Performance Micro-animations'],
    iconName: 'Zap',
  },
  {
    id: 'ecommerce',
    number: '04',
    title: 'E-commerce Development',
    tagline: 'Tactile storefronts built for effortless browsing and checkout.',
    description: 'Online storefronts that organize products cleanly, eliminate friction during checkout, and reflect the craft and character of your merchandise.',
    deliverables: ['Custom Product Catalogs', 'Streamlined Cart & Checkout', 'Payment & Shipping Integration', 'Mobile Tap-Target Optimization'],
    iconName: 'ShoppingBag',
  },
  {
    id: 'redesign',
    number: '05',
    title: 'Website Redesign',
    tagline: 'Modernizing outdated interfaces while preserving SEO equity.',
    description: 'A comprehensive visual and technical overhaul of an existing site to restore aesthetic relevance, fix performance bottlenecks, and improve conversion.',
    deliverables: ['Current State Audit', 'UX Friction Elimination', 'Technical Modernization', 'SEO Link Preservation'],
    iconName: 'RefreshCw',
  },
  {
    id: 'web-apps',
    number: '06',
    title: 'Custom Web Applications',
    tagline: 'Purpose-built software tools tailored to your operational workflows.',
    description: 'Bespoke web applications, internal dashboards, and client portals built to automate workflows and provide specialized interactive tools.',
    deliverables: ['Interactive Dashboards', 'API & Database Integration', 'Authentication & Role Security', 'State Architecture'],
    iconName: 'Cpu',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    duration: 'Week 1',
    description: 'We align on your commercial goals, target audience, core constraints, and competitive differentiators before writing any code.',
    activities: [
      'In-depth business & audience discovery session',
      'Content architecture and sitemap mapping',
      'Benchmark performance and technical requirements',
      'Clear project timeline and scope definition',
    ],
  },
  {
    number: '02',
    title: 'Design',
    duration: 'Weeks 2–3',
    description: 'We establish the visual identity, typography system, responsive wireframes, and interactive components in collaborative review rounds.',
    activities: [
      'Typography pairing and dark editorial color scale',
      'Responsive wireframes for mobile, tablet, and desktop',
      'High-fidelity component prototyping',
      'Feedback review and design sign-off',
    ],
  },
  {
    number: '03',
    title: 'Develop',
    duration: 'Weeks 3–5',
    description: 'We build the website using clean, semantic TypeScript and modern CSS, testing every component for responsiveness and accessibility.',
    activities: [
      'Clean component architecture with zero fluff',
      'Interactive animations tuned for performance',
      'Form validations and third-party integrations',
      'Cross-browser and multi-device QA testing',
    ],
  },
  {
    number: '04',
    title: 'Launch & Support',
    duration: 'Week 6 & Ongoing',
    description: 'We execute the production deployment, verify DNS configurations, test Core Web Vitals, and provide straightforward handover documentation.',
    activities: [
      'Production deployment to CDN edge hosting',
      'Lighthouse 95+ performance validation',
      'Domain, DNS, and SSL verification',
      'Handover guide & 30-day post-launch support',
    ],
  },
];
