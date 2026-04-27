import React from 'react';
import { Folder, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { PROJECTS } from '../data';

// The Project Tab Content
export function ProjectSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="pb-8">
      <SectionHeader title="Portfolio" icon={Folder} subtitle="Projects & Works." />
      
      {/* List of projects mapped from our data file */}
      <div className="space-y-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-white/10 transition-colors shadow-lg">
            
            {/* Project Image */}
            <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden shrink-0">
              <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
              {/* Overlay with Link Icon shown on Hover */}
              <div className="absolute inset-0 bg-surface-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white text-surface-950 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors">{project.title}</h3>
              <p className="text-[14px] text-neutral-400 mb-6 leading-relaxed flex-grow">{project.description}</p>
              
              {/* Tags/Tech Stack list */}
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
}
