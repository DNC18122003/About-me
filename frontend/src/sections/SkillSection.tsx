import React, { useState } from 'react';
import { Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { SKILLS } from '../data';

// The Skills Tab Content
export function SkillSection() {
  // Store the currently active category
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Frontend', 'Backend', 'Tools'];

  // Filter skills based on state. 
  // Simplified by removing useMemo since this list is very small.
  const filteredSkills = activeCategory === 'All' 
      ? SKILLS 
      : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="pb-8">
      <SectionHeader title="Skills" icon={Cpu} subtitle="Tech Stack & Tools." />
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8 mt-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${activeCategory === cat ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25' : 'bg-white/5 text-neutral-400 hover:text-white border border-white/5'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid - Premium Large Cards (Original Layout Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredSkills.map((skill) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl flex items-center gap-5 hover:border-brand-primary/30 hover:bg-white/[0.04] transition-all group shadow-lg"
          >
            {/* Original Square Icon Box Style */}
            <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all shadow-inner shrink-0">
              <skill.icon size={26} />
            </div>
            
            {/* Skill Content */}
            <div className="flex-1">
              <h3 className="font-bold text-[16px] text-white/90 group-hover:text-white transition-colors">
                {skill.name}
              </h3>
              <p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-black mt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                {skill.category}
              </p>
            </div>

            {/* Premium Accent Dot */}
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(59,130,246,1)]" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
