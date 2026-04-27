/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  User, 
  Cpu, 
  Briefcase, 
  Send,
  Layers,
  ChevronRight,
  Terminal as TerminalIcon,
  BrainCircuit,
  Users,
  Sparkles,
  Globe,
  Smartphone,
  Server,
  Palette,
  Download,
  Command,
  Wifi,
  Battery,
  Search,
  Folder,
  Settings,
  GraduationCap
} from 'lucide-react';

// --- Types ---

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

interface Skill {
  name: string;
  level: number;
  icon: any;
  category: 'Frontend' | 'Backend' | 'Tools';
}

// --- Data ---

const PERSONAL_INFO = {
  name: "DNC",
  fullName: "DNC Developer",
  role: "Senior Full Stack Web Developer",
  tagline: "Building the future of the web with elegant code and exceptional design.",
  summary: "I specialize in creating high-performance, scalable web applications using modern technologies. With a deep passion for user experience and technical excellence, I transform complex requirements into intuitive digital solutions.",
  about: "With over 3 years of experience in the software industry, I have honed my skills in both frontend and backend development. My approach combines artistic creativity with engineering precision, ensuring that every project I touch is not only functional but also visually stunning and performant.",
  email: "contact@dnc-dev.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  location: "Vietnam",
  resumeUrl: "#"
};

const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, icon: Globe, category: 'Frontend' },
  { name: "TypeScript", level: 90, icon: Code2, category: 'Frontend' },
  { name: "Tailwind CSS", level: 98, icon: Palette, category: 'Frontend' },
  { name: "Node.js / Express", level: 85, icon: Server, category: 'Backend' },
  { name: "MongoDB / SQL", level: 80, icon: Layers, category: 'Backend' },
  { name: "React Native", level: 75, icon: Smartphone, category: 'Tools' },
  { name: "Docker / AWS", level: 70, icon: Cpu, category: 'Tools' },
  { name: "Git / CI/CD", level: 90, icon: TerminalIcon, category: 'Tools' },
];

const PROJECTS: Project[] = [
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

// --- Components ---

function DockIcon({ icon, color, label, isActive, onClick, href }: { icon: React.ReactNode, color: string, label: string, isActive?: boolean, onClick?: () => void, href?: string }) {
  const content = (
    <>
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-surface-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
        {label}
      </div>
      <motion.div 
        whileHover={{ scale: 1.25, y: -12 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${color} transition-all duration-300 shadow-lg border ${isActive ? 'border-white/40 shadow-brand-primary/20' : 'border-white/10'}`}
      >
        {icon}
      </motion.div>
      {isActive && <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/80 shadow-[0_0_5px_rgba(255,255,255,0.8)]" />}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="group relative focus:outline-none block">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="group relative focus:outline-none">
      {content}
    </button>
  );
}

const MacClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return <span className="cursor-default opacity-90">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</span>;
};

const SectionHeader = ({ title, icon: Icon, subtitle, centered = false }: { title: string; icon: any; subtitle: string; centered?: boolean }) => (
  <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
    <div className={`flex items-center gap-2 text-brand-primary mb-3 text-xs font-bold uppercase tracking-[0.3em] ${centered ? 'justify-center' : ''}`}>
      <Icon size={14} />
      <span>{title}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
      {subtitle}
    </h2>
  </div>
);

type TabType = 'home' | 'project' | 'education' | 'settings';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [activeSkillCategory, setActiveSkillCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Tools'>('All');

  const filteredSkills = activeSkillCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeSkillCategory);

  // Define tab content
  const renderTabContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <motion.div key="home" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="h-full flex flex-col justify-center">
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-4xl md:text-[54px] font-bold text-white mb-4 tracking-tight leading-tight">
                Hello, <span className="text-brand-primary">World.</span>
              </h1>
              <p className="text-neutral-400 max-w-lg leading-relaxed text-[15px] mx-auto md:mx-0">
                Tôi viết code như viết nhật ký. Thích sự đơn giản, <span className="font-bold text-white border-b border-white/20 pb-0.5">pixel-perfect</span> và cà phê sữa đá.
              </p>
            </div>

            {/* Terminal */}
            <div className="bg-[#0f0f11] rounded-xl border border-white/10 overflow-hidden shadow-2xl font-mono text-sm w-full text-left">
              <div className="flex items-center px-4 py-2.5 border-b border-white/5 bg-[#18181a]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]/20 border border-[#ff5f56]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/20 border border-[#ffbd2e]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]/20 border border-[#27c93f]/50" />
                </div>
                <div className="mx-auto text-[11px] text-neutral-500 flex items-center gap-2 font-sans">
                  <TerminalIcon size={12} /> bash - 80x24
                </div>
                <div className="w-12"></div>
              </div>
              <div className="p-5 sm:p-6 text-neutral-300 space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-brand-accent">➜</span>
                    <span className="text-brand-primary">~</span>
                    <span className="text-white font-medium">whoami</span>
                  </div>
                  <div className="ml-5 space-y-1.5 text-[13px]">
                    <p><span className="text-brand-primary">name:</span> <span className="text-[#eab308]">"{PERSONAL_INFO.fullName}"</span></p>
                    <p><span className="text-brand-primary">role:</span> <span className="text-[#eab308]">"Fullstack Engineer"</span></p>
                    <p><span className="text-brand-primary">stack:</span> <span className="text-white">["Next.js", "React", "Node", "TypeScript"]</span></p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-brand-accent">➜</span>
                    <span className="text-brand-primary">~</span>
                    <span className="text-white font-medium">ls -la ./socials</span>
                  </div>
                  <div className="ml-5 flex gap-5 text-neutral-500">
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={18} /></a>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors"><Linkedin size={18} /></a>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-red-400 transition-colors"><Mail size={18} /></a>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-brand-accent">➜</span>
                  <span className="text-brand-primary">~</span>
                  <span className="w-2 h-4 bg-white/80 animate-pulse"></span>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'project':
        return (
          <motion.div key="project" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="pb-8">
            <SectionHeader title="Portfolio" icon={Folder} subtitle="Projects & Works." />
            
            <div className="space-y-6">
              {PROJECTS.map((project) => (
                <div key={project.id} className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-white/10 transition-colors shadow-lg">
                  <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-surface-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white text-surface-950 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                    <p className="text-[14px] text-neutral-400 mb-6 leading-relaxed flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-white/5 rounded-md text-neutral-400 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'education':
        return (
          <motion.div key="education" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="pb-8">
            <SectionHeader title="Education & Skills" icon={GraduationCap} subtitle="Learning Journey." />
            
            <div className="mb-10 bg-white/[0.02] border border-white/5 p-6 rounded-2xl shadow-lg">
               <h3 className="text-lg font-bold text-white mb-2">Bachelor of Computer Science</h3>
               <p className="text-brand-primary font-bold text-sm mb-4">University of Technology • 2018 - 2022</p>
               <p className="text-neutral-400 text-sm leading-relaxed">
                 Graduated with honors. Specialized in software engineering and web technologies. Active member of the university's web development club.
               </p>
            </div>

            <div className="flex items-center gap-2 text-white/80 font-bold text-sm mb-6 uppercase tracking-widest">
              <Cpu size={16} /> Tech Stack
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {['All', 'Frontend', 'Backend', 'Tools'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCategory(cat as any)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${activeSkillCategory === cat ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25' : 'bg-white/5 text-neutral-400 hover:text-white border border-white/5'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimatePresence mode='popLayout'>
                {filteredSkills.map((skill) => (
                  <motion.div 
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl flex items-center gap-4 hover:border-brand-primary/30 transition-colors group shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary/20 transition-all">
                      <skill.icon size={22} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-bold text-[13px]">{skill.name}</h3>
                        <span className="text-[11px] font-bold text-neutral-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: `${skill.level}%` }} 
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary" 
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        );

      case 'settings':
        return (
          <motion.div key="settings" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="pb-8">
            <SectionHeader title="Settings" icon={Settings} subtitle="System Preferences." />
            
            <div className="space-y-8">
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl shadow-lg">
                 <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest text-brand-primary">Account Contact</h3>
                 <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-5 group hover:bg-white/[0.02] p-4 -m-4 rounded-xl transition-colors">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-500 uppercase font-black tracking-widest mb-1">Email Address</p>
                    <p className="font-bold text-[14px]">{PERSONAL_INFO.email}</p>
                  </div>
                </a>
              </div>
              
              <div className="bg-white/[0.02] border border-white/5 p-6 sm:p-8 rounded-3xl shadow-lg">
                <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest text-brand-primary">Direct Message</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] ml-1">Name</label>
                      <input className="input-field py-3.5 text-[14px] rounded-xl bg-white/[0.03]" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] ml-1">Email</label>
                      <input className="input-field py-3.5 text-[14px] rounded-xl bg-white/[0.03]" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] ml-1">Subject</label>
                    <input className="input-field py-3.5 text-[14px] rounded-xl bg-white/[0.03]" placeholder="Project Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] ml-1">Message</label>
                    <textarea rows={4} className="input-field py-3.5 text-[14px] resize-none rounded-xl bg-white/[0.03]" placeholder="Tell me about your vision..." />
                  </div>
                  <button className="btn-primary w-full justify-center py-4 text-[13px] tracking-widest uppercase rounded-xl mt-2">
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-cover bg-center selection:bg-brand-primary selection:text-white font-sans relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=2532")' }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      
      {/* Mac Menu Bar */}
      <div className="absolute top-0 w-full h-8 bg-black/30 backdrop-blur-md flex items-center justify-between px-5 text-white/90 text-[13px] font-medium z-50">
        <div className="flex items-center gap-5">
          <Command size={15} />
          <span className="font-bold cursor-default">DNC.dev</span>
          <span className="hidden sm:inline cursor-default opacity-80 hover:opacity-100 transition-opacity">File</span>
          <span className="hidden sm:inline cursor-default opacity-80 hover:opacity-100 transition-opacity">Edit</span>
          <span className="hidden sm:inline cursor-default opacity-80 hover:opacity-100 transition-opacity">View</span>
          <span className="hidden sm:inline cursor-default opacity-80 hover:opacity-100 transition-opacity">Go</span>
          <span className="hidden sm:inline cursor-default opacity-80 hover:opacity-100 transition-opacity">Window</span>
          <span className="hidden sm:inline cursor-default opacity-80 hover:opacity-100 transition-opacity">Help</span>
        </div>
        <div className="flex items-center gap-5">
          <Wifi size={15} className="opacity-80" />
          <Search size={15} className="opacity-80" />
          <Battery size={15} className="opacity-80" />
          <MacClock />
        </div>
      </div>

      {/* Mac Window Component */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] px-4 md:px-8 h-[calc(100vh-140px)] max-h-[850px] min-h-[500px]">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full bg-[#1c1c1e]/85 backdrop-blur-3xl rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row"
        >
          {/* Top window controls for mobile */}
          <div className="md:hidden flex gap-2 p-4 border-b border-white/5 bg-[#2d2d30]/50 shrink-0">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-[280px] bg-[#252528]/80 p-6 md:p-8 flex flex-col items-center border-r border-white/5 relative z-10 shrink-0 md:overflow-y-auto custom-scrollbar">
            <div className="hidden md:flex gap-2 absolute top-5 left-5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>

            <div className="relative mb-5 mt-4 md:mt-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-full blur-md opacity-60 animate-pulse-slow"></div>
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" 
                  alt="Avatar"
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-white/10 object-cover bg-surface-800"
                />
            </div>
            <h2 className="text-white font-bold text-xl md:text-2xl mb-1">{PERSONAL_INFO.fullName}</h2>
            <div className="flex items-center gap-2 mb-8 text-[10px] font-bold tracking-widest text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                FULLSTACK DEV
            </div>

            <button onClick={() => setActiveTab('settings')} className="w-full py-2.5 bg-brand-primary hover:bg-blue-600 text-white text-sm rounded-lg font-semibold mb-3 transition-colors text-center shadow-lg shadow-brand-primary/20">
              Contact Me
            </button>
            <a href={PERSONAL_INFO.resumeUrl} className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg font-semibold transition-colors text-center border border-white/5 flex items-center justify-center gap-2">
              <Download size={16} /> CV
            </a>
            
            <div className="mt-6 md:mt-auto pt-6 w-full flex justify-center gap-6 text-[10px] md:text-[11px] text-neutral-500 font-mono">
              <p>Git status: <span className="text-green-500">clean</span></p>
              <p>Branch: <span className="text-brand-primary">main</span></p>
            </div>
          </div>

          <div className="flex-1 p-6 md:p-10 relative bg-[#1e1e20]/80 overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="popLayout">
              {renderTabContent()}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Persistent macOS Dock Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-[60]"
      >
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-2 md:p-3 flex items-center gap-2 md:gap-3 shadow-2xl">
          <DockIcon isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} color="bg-zinc-800" icon={<Command size={22} />} label="Home" />
          <DockIcon isActive={activeTab === 'project'} onClick={() => setActiveTab('project')} color="bg-orange-500" icon={<Folder size={22} />} label="Project" />
          <DockIcon isActive={activeTab === 'education'} onClick={() => setActiveTab('education')} color="bg-purple-500" icon={<GraduationCap size={22} />} label="Education" />
          <div className="w-px h-8 md:h-10 bg-white/20 mx-1" />
          <DockIcon href={PERSONAL_INFO.github} color="bg-zinc-800" icon={<Github size={22} />} label="GitHub" />
          <DockIcon isActive={activeTab === 'settings'} onClick={() => setActiveTab('settings')} color="bg-brand-secondary" icon={<Settings size={22} />} label="Settings" />
        </div>
      </motion.div>
    </div>
  );
}
