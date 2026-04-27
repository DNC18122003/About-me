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

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredSkills.map((skill) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl flex items-center gap-4 hover:border-brand-primary/30 transition-colors group shadow-lg"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary/20 transition-all">
              <skill.icon size={22} />
            </div>
            
            {/* Skill Level Details */}
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <h3 className="font-bold text-[13px]">{skill.name}</h3>
                <span className="text-[11px] font-bold text-neutral-500">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                {/* Progress bar animation */}
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: `${skill.level}%` }} 
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary" 
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
