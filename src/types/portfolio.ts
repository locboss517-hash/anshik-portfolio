export type ThemeMode = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  category: 'Startup Concept' | 'Business Research' | 'Digital Product Experiment';
  stage: 'Concept Stage' | 'In Progress' | 'Research Phase';
  description: string;
  detailedOverview: string;
  problemStatement: string;
  proposedSolution: string;
  tools: string[];
  keyTakeaway: string;
  url?: string;
}

export interface InterestItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  focusArea: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'current' | 'in-progress' | 'upcoming';
  tags: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Strategy & Analysis' | 'Execution & Tools' | 'Communication';
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
