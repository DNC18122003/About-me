import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Command, Folder, Cpu, Github, Settings as SettingsIcon } from 'lucide-react';

// Import Types & Data
import { TabType, PERSONAL_INFO } from './data';

// Import Components
import { MenuBar } from './components/MenuBar';
import { DockIcon } from './components/DockIcon';

// Import Sections
import { Sidebar } from './sections/Sidebar';
import { HomeSection } from './sections/HomeSection';
import { ProjectSection } from './sections/ProjectSection';
import { SkillSection } from './sections/SkillSection';
import { SettingsSection } from './sections/SettingsSection';

export default function App() {
  // State to track which tab is currently active
  const [activeTab, setActiveTab] = useState<TabType>('home');

  // Simple function to switch to settings
  const handleContactClick = () => {
    setActiveTab('settings');
  };

  // Function to render the correct section based on state
  const renderTabContent = () => {
    switch (activeTab) {
      case 'home': return <HomeSection key="home" />;
      case 'project': return <ProjectSection key="project" />;
      case 'skill': return <SkillSection key="skill" />;
      case 'settings': return <SettingsSection key="settings" />;
      default: return <HomeSection key="home" />;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0a0a0c] selection:bg-brand-primary selection:text-white font-sans relative">
      {/* Background Style */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1200")' }} 
      />
      
      {/* Top Menu */}
      <MenuBar />

      {/* Main Window Wrapper */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] px-4 md:px-8 h-[calc(100vh-140px)] max-h-[850px] min-h-[500px]">
        
        {/* Animated Window Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full bg-[#1c1c1e] rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row"
        >
          {/* Top window controls for mobile */}
          <div className="md:hidden flex gap-2 p-4 border-b border-white/5 bg-[#2d2d30] shrink-0">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
          </div>

          {/* Left Sidebar */}
          <Sidebar onContactClick={handleContactClick} />

          {/* Right Content Area */}
          <div className="flex-1 p-6 md:p-10 relative bg-[#1e1e20] overflow-y-auto custom-scrollbar">
            {/* AnimatePresence handles the fade in/out when tabs switch */}
            <AnimatePresence mode="popLayout">
              {renderTabContent()}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Bottom Dock Menu */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-[60]"
      >
        <div className="bg-[#1c1c1e]/95 backdrop-blur-md border border-white/20 rounded-3xl p-2 md:p-3 flex items-center gap-2 md:gap-3 shadow-2xl">
          <DockIcon isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} color="bg-zinc-800" icon={<Command size={22} />} label="Home" />
          <DockIcon isActive={activeTab === 'project'} onClick={() => setActiveTab('project')} color="bg-orange-500" icon={<Folder size={22} />} label="Project" />
          <DockIcon isActive={activeTab === 'skill'} onClick={() => setActiveTab('skill')} color="bg-purple-500" icon={<Cpu size={22} />} label="Skills" />
          
          <div className="w-px h-8 md:h-10 bg-white/20 mx-1" />
          
          <DockIcon href={PERSONAL_INFO.github} color="bg-zinc-800" icon={<Github size={22} />} label="GitHub" />
          <DockIcon isActive={activeTab === 'settings'} onClick={() => setActiveTab('settings')} color="bg-brand-secondary" icon={<SettingsIcon size={22} />} label="Settings" />
        </div>
      </motion.div>
    </div>
  );
}
