import React from 'react';
import { Github, Linkedin, Mail, Terminal as TerminalIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

// The Home Tab Content
export function HomeSection() {
  return (
    // Basic entry animation when tab opens
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="h-full flex flex-col justify-center">
      
      {/* Intro Text */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-[54px] font-bold text-white mb-4 tracking-tight leading-tight">
          Hello, <span className="text-brand-primary">World.</span>
        </h1>
        <p className="text-neutral-400 max-w-lg leading-relaxed text-[15px] mx-auto md:mx-0">
          Tôi viết code như viết nhật ký. Thích sự đơn giản, <span className="font-bold text-white border-b border-white/20 pb-0.5">pixel-perfect</span> và cà phê sữa đá.
        </p>
      </div>

      {/* Terminal UI */}
      <div className="bg-[#0f0f11] rounded-xl border border-white/10 overflow-hidden shadow-2xl font-mono text-sm w-full text-left">
        {/* Terminal Header */}
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

        {/* Terminal Content */}
        <div className="p-5 sm:p-6 text-neutral-300 space-y-5">
          {/* Command 1 */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-brand-accent">➜</span>
              <span className="text-brand-primary">~</span>
              <span className="text-white font-medium">whoami</span>
            </div>
            <div className="ml-5 space-y-1.5 text-[13px]">
              <p><span className="text-brand-primary">name:</span> <span className="text-[#eab308]">"{PERSONAL_INFO.fullName}"</span></p>
              <p><span className="text-brand-primary">role:</span> <span className="text-[#eab308]">"Fullstack Engineer"</span></p>
              <p><span className="text-brand-primary">stack:</span> <span className="text-white">[ "React", "Node", "TypeScript"]</span></p>
            </div>
          </div>
          
          {/* Command 2 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-brand-accent">➜</span>
              <span className="text-brand-primary">~</span>
              <span className="text-white font-medium">ls -la ./socials</span>
            </div>
            <div className="ml-5 flex gap-5 text-neutral-500">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={18} /></a>
             
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-red-400 transition-colors"><Mail size={18} /></a>
            </div>
          </div>
          
          {/* Cursor */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-brand-accent">➜</span>
            <span className="text-brand-primary">~</span>
            <span className="w-2 h-4 bg-white/80 animate-pulse"></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
