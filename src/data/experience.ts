export interface ExperienceItem {
  title: string;
  company: string;
  description: string;
  date: string;
  location: string;
  category: 'research' | 'community' | 'content' | 'leadership';
  highlights?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Advisor',
    company: 'ITU Blockchain',
    description: "Supporting research, content, and community direction for Turkey's first and largest university blockchain community.",
    date: 'Jun 2025 — Present',
    location: 'Istanbul',
    category: 'leadership',
  },
  {
    title: 'Research & Growth Marketing',
    company: 'Fintables Kripto',
    description: "Built Fintables' entire crypto vertical from scratch. Created written and visual content across X, YouTube, and the website — educational explainers, technical research, weekly newsletters, and trend analysis.",
    date: 'Jan 2024 — Nov 2025',
    location: 'Istanbul',
    category: 'research',
    highlights: ['~4M total engagements in one year', 'Built crypto side from zero'],
  },
  {
    title: 'Co-Founder',
    company: 'Maslak Labs',
    description: 'Web3 community & content hub supporting global blockchain projects\' Turkey-side operations. Led local content production, community engagement, in-person events, and ambassador programs.',
    date: 'Jun 2024 — Present',
    location: 'Istanbul',
    category: 'leadership',
    highlights: ['~5M annual impressions', 'Fuel, Superseed, Frax operations'],
  },
  {
    title: 'Head of Research & Content Creation',
    company: 'ITU Blockchain',
    description: "Taught blockchain basics and technical topics through weekly discussions. Guided members in content creation and hackathon participation. Wrote technical articles and hosted X Spaces.",
    date: 'Jun 2024 — Jun 2025',
    location: 'Istanbul',
    category: 'research',
  },
  {
    title: 'Community & Content',
    company: 'Fuel Network Turkey, Frax Finance Turkey, Superseed Turkey',
    description: "Managed the official Turkey accounts. Created educational and ecosystem-focused content. Organized in-person events and community meetups. Contributed to TGE-related communication and growth efforts.",
    date: 'Apr 2024 — Nov 2025',
    location: 'Remote',
    category: 'community',
  },
  {
    title: 'Editor & Writer',
    company: 'Genesis News',
    description: 'Weekly 5-minute newsletter covering the most important Web3 news of the week, published by ITU Blockchain.',
    date: 'Mar 2023 — Mar 2025',
    location: 'Istanbul',
    category: 'content',
    highlights: ['~3,000 subscribers'],
  },
  {
    title: 'Content Creator',
    company: 'Mina Protocol & Fileverse',
    description: 'Published blog posts for Mina\'s zkIgnite program and Fileverse covering Ethereum events, onboarding guides, and ecosystem content.',
    date: '2023 — 2024',
    location: 'Remote',
    category: 'content',
  },
];
