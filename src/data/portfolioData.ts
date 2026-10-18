import type { Project, InterestItem, TimelineItem, SkillItem, NavItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Anshik Gandhi',
  monogram: 'AG',
  role: 'BBA STUDENT · ASPIRING ENTREPRENEUR',
  institution: 'JECRC University, Jaipur',
  year: 'First-Year Student (Batch of 2026)',
  headline: 'Learning Business. Building What’s Next.',
  bio: "I'm Anshik Gandhi, a first-year BBA student at JECRC University, Jaipur, interested in startups, business strategy, and turning ideas into meaningful ventures.",
  availability: 'Open to learning, collaboration & new ideas',
  location: 'Jaipur, Rajasthan, India',
  email: 'anshik.gandhi.connect@gmail.com',
  socials: {
    linkedin: 'https://linkedin.com/in/anshik-gandhi-placeholder',
    twitter: 'https://x.com/anshik_gandhi',
    github: 'https://github.com/anshik-gandhi',
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Interests', href: '#interests' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const ABOUT_CARDS = [
  {
    number: '01',
    title: 'Business Mindset',
    description: 'Exploring business models, strategy, marketing, and the decisions behind successful ventures.',
    tag: 'Foundations',
  },
  {
    number: '02',
    title: 'Startup Curiosity',
    description: 'Interested in identifying problems, validating ideas, and understanding how businesses get started.',
    tag: 'Discovery',
  },
  {
    number: '03',
    title: 'Continuous Learning',
    description: 'Developing practical knowledge through projects, experimentation, collaboration, and new experiences.',
    tag: 'Execution',
  },
];

export const INTERESTS_DATA: InterestItem[] = [
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    description: 'Understanding how to turn ideas into viable businesses.',
    iconName: 'Lightbulb',
    focusArea: 'Venture Creation & Value Propositions',
  },
  {
    id: 'startups-innovation',
    title: 'Startups & Innovation',
    description: 'Exploring new solutions to real-world problems.',
    iconName: 'Rocket',
    focusArea: 'Early-stage Problem Solving',
  },
  {
    id: 'business-strategy',
    title: 'Business Strategy',
    description: 'Learning how companies make decisions and grow.',
    iconName: 'Target',
    focusArea: 'Competitive Advantage & Scaling',
  },
  {
    id: 'marketing-branding',
    title: 'Marketing & Branding',
    description: 'Understanding customer needs, positioning, and brand identity.',
    iconName: 'Megaphone',
    focusArea: 'Audience Research & Storytelling',
  },
  {
    id: 'product-thinking',
    title: 'Product Thinking',
    description: 'Exploring how useful products are researched, designed, and improved.',
    iconName: 'Boxes',
    focusArea: 'User Centricity & Iteration',
  },
  {
    id: 'tech-business',
    title: 'Technology & Business',
    description: 'Learning how emerging technologies create business opportunities.',
    iconName: 'Cpu',
    focusArea: 'Digital Platforms & Automation',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'campus-exchange',
    title: 'Campus Resource Exchange',
    category: 'Startup Concept',
    stage: 'Concept Stage',
    description: 'A peer-to-peer concept designed to help university students trade academic materials, textbook rentals, and peer notes efficiently.',
    detailedOverview: 'During my first semester at JECRC, I observed how students frequently purchase expensive textbooks each semester only to discard or stash them away. This concept models a closed-loop university marketplace with verified student accounts.',
    problemStatement: 'Undergraduate students lack a trusted, hyper-local channel to buy, sell, or rent semester textbooks and course notes at fair student prices.',
    proposedSolution: 'A WhatsApp/Web-first inventory board where students verify with university ID, list items by semester course code, and arrange on-campus pickup.',
    tools: ['Market Research', 'Customer Interviews', 'Figma Wireframing', 'Unit Economics'],
    keyTakeaway: 'Hyperlocal network density is essential before expanding to broader categories.',
    url: '',
  },
  {
    id: 'd2c-case-study',
    title: 'Indian D2C Beverage Landscape',
    category: 'Business Research',
    stage: 'Research Phase',
    description: 'An analytical teardown of emerging direct-to-consumer beverage startups in India, dissecting supply chain, margins, and customer acquisition.',
    detailedOverview: 'An exploratory study analyzing how modern Indian FMCG and clean-label beverage brands navigate retail distributor margins versus online customer acquisition costs (CAC).',
    problemStatement: 'High CAC on digital ad platforms threatens D2C unit economics, making omnichannel expansion mandatory for sustainable profitability.',
    proposedSolution: 'Synthesized insights from 8 brand case studies into a comparative matrix covering distributor margins, repeat order rates, and packaging economics.',
    tools: ['Secondary Research', 'Financial Ratio Analysis', 'Comparative Matrix', 'Notion'],
    keyTakeaway: 'Retention and offline distributor relationships dictate survival beyond the initial 10,000 orders.',
    url: '',
  },
  {
    id: 'idea-validation-kit',
    title: 'Student Idea Validation Framework',
    category: 'Digital Product Experiment',
    stage: 'In Progress',
    description: 'A structured, Notion-based framework to help first-time student builders validate problem statements before writing code or spending capital.',
    detailedOverview: 'A step-by-step 5-stage validation roadmap tailored for college students: Problem Definition, Mom Test Customer Interviews, Fake Door Landing Page, Minimum Viable Test, and Go/No-Go Decision Rules.',
    problemStatement: 'Most college students who want to build startups jump straight into building apps without talking to potential customers or testing demand.',
    proposedSolution: 'A templated 14-day validation sprint document with interview scripts, cold outreach copy, and a scoring rubric for willingness-to-pay.',
    tools: ['Notion Template', 'User Journey Mapping', 'Interview Protocols', 'Lean Startup Methodology'],
    keyTakeaway: 'Validating willingness to pay is 10x more valuable than asking friends if an idea sounds "cool".',
    url: '',
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 't-2026',
    year: '2026',
    title: 'Beginning My Business Journey',
    subtitle: 'First-Year BBA · JECRC University, Jaipur',
    description: 'Commenced my Bachelor of Business Administration degree at JECRC University. Focused on mastering foundational concepts in management, accounting, microeconomics, and modern business structures while actively exploring the startup ecosystem.',
    status: 'current',
    tags: ['BBA Degree', 'JECRC University', 'Business Foundations', 'Jaipur'],
  },
  {
    id: 't-ongoing',
    year: 'Ongoing',
    title: 'Problem Discovery & Case Studies',
    subtitle: 'Independent Study & Project Ideation',
    description: 'Conducting campus interviews, analyzing Indian startup business models, reading classic venture case studies, and documenting observations on emerging consumer trends and market gaps.',
    status: 'in-progress',
    tags: ['Market Research', 'Case Teardowns', 'Idea Validation', 'Networking'],
  },
  {
    id: 't-future',
    year: 'Upcoming Goals',
    title: 'Venture Prototyping & Competitions',
    subtitle: 'Aspirational Roadmap',
    description: 'Planning to participate in university business plan competitions, build an MVP for a campus-focused venture, and seek summer internships with early-stage startup founders.',
    status: 'upcoming',
    tags: ['MVP Development', 'Pitch Competitions', 'Founder Apprenticeship'],
  },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 's-biz-fund',
    name: 'Business Fundamentals',
    category: 'Strategy & Analysis',
    description: 'Understanding revenue models, cost structures, and basic financial statements.',
  },
  {
    id: 's-market-res',
    name: 'Market Research',
    category: 'Strategy & Analysis',
    description: 'Analyzing industry reports, competitive landscapes, and target demographics.',
  },
  {
    id: 's-startup-idea',
    name: 'Startup Ideation',
    category: 'Strategy & Analysis',
    description: 'Identifying pain points, formulating hypotheses, and applying lean startup methods.',
  },
  {
    id: 's-problem-solv',
    name: 'Problem Solving',
    category: 'Strategy & Analysis',
    description: 'Breaking down complex challenges using first-principles thinking and frameworks.',
  },
  {
    id: 's-digital-tools',
    name: 'Digital Tools',
    category: 'Execution & Tools',
    description: 'Proficiency with Notion, spreadsheets, basic Figma wireframing, and research tools.',
  },
  {
    id: 's-pres-design',
    name: 'Presentation Design',
    category: 'Execution & Tools',
    description: 'Crafting clean, visual pitch decks, executive summaries, and structured slides.',
  },
  {
    id: 's-biz-comm',
    name: 'Business Communication',
    category: 'Communication',
    description: 'Drafting concise emails, formal business memos, and articulating ideas clearly.',
  },
  {
    id: 's-branding',
    name: 'Branding Fundamentals',
    category: 'Communication',
    description: 'Exploring brand positioning, value proposition clarity, and visual consistency.',
  },
];
