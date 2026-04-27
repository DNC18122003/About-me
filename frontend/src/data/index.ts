import { 
  Globe, Code2, Palette, Server, Layers, TerminalIcon, LucideIcon, Database, Layout, GitBranch, Wrench
} from 'lucide-react';

// Define types here so they are easy to find and manage in one place
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
  category: 'Frontend' | 'Backend' | 'Tools';
}

export type TabType = 'home' | 'project' | 'skill' | 'settings';

// Static Data
export const PERSONAL_INFO = {
  name: "DNC",
  fullName: "DNC Developer",
  role: "Intern Backend Developer",
  tagline: "IT student with a deep passion for Backend Development.",
  summary: "Final-year IT student at FPT University with strong logical thinking. I possess a solid foundation in JavaScript (ES6+) and Node.js. Seeking an opportunity to contribute to real-world projects by building standardized RESTful APIs and optimizing database queries.",
  about: "Aiming to grow into a core Backend Developer within the next 12 months. I focus on implementing Clean Code principles and constantly learning new technologies to solve complex backend challenges efficiently.",
  email: "cuongdinhlc2003@gmail.com",
  phone: "0335804528",
  facebook: "https://www.facebook.com/inhcuong.444172",
  github: "https://github.com/DNC18122003",
  
  resumeUrl: "#"
};

export const SKILLS: Skill[] = [
  // Frontend
  { name: "JavaScript / TypeScript", level: 85, icon: Code2, category: 'Frontend' },
  { name: "ReactJS", level: 80, icon: Globe, category: 'Frontend' },
  { name: "HTML5 & CSS3", level: 90, icon: Palette, category: 'Frontend' },
  { name: "Bootstrap", level: 75, icon: Layout, category: 'Frontend' },

  // Backend
  { name: "Node.js (ExpressJS)", level: 85, icon: Server, category: 'Backend' },
  { name: "SQL Server & MySQL", level: 80, icon: Database, category: 'Backend' },
  { name: "MongoDB", level: 75, icon: Layers, category: 'Backend' },

  // Tools & IDEs
  { name: "Git / SourceTree", level: 85, icon: GitBranch, category: 'Tools' },
  { name: "Postman", level: 90, icon: TerminalIcon, category: 'Tools' },
  { name: "Visual Studio", level: 80, icon: Wrench, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Quantum Analytics Pro",
    description: "Enterprise-grade data visualization platform with real-time processing and predictive modeling.",
    tech: ["Next.js", "TypeScript", "Recharts", "Prisma"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Nexus AI Hub",
    description: "A collaborative AI workspace integrating multiple LLMs with custom workflow automation.",
    tech: ["React", "Node.js", "OpenAI", "Socket.io"],
    link: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Lumina E-Commerce",
    description: "High-conversion headless commerce store featuring a custom design system and lightning-fast performance.",
    tech: ["Shopify", "React", "Tailwind", "Framer Motion"],
    link: "#",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800"
  },
];
