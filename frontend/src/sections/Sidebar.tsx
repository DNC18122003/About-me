import React from 'react';
import { Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

// Accept a function from parent to switch tabs when "Contact Me" is clicked
interface Props {
  onContactClick: () => void;
}

// The static left sidebar holding the profile
export function Sidebar({ onContactClick }: Props) {
  return (
    <div className="w-full md:w-[280px] bg-[#252528] p-6 md:p-8 flex flex-col items-center border-r border-white/5 relative z-10 shrink-0 md:overflow-y-auto custom-scrollbar">
      {/* Fake window buttons (Red, Yellow, Green) */}
      <div className="hidden md:flex gap-2 absolute top-5 left-5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>

      {/* Avatar Image (Hover Glow Effect) */}
      <div 
        className="relative mb-6 mt-4 md:mt-6 rounded-full p-1 border-2 border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-500 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.8),0_0_50px_rgba(59,130,246,0.5)] hover:scale-105 cursor-pointer"
      >
          <img 
            src="/avatar.png" 
            alt="Avatar"
            loading="lazy"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover bg-surface-800"
          />
      </div>

      <h2 className="text-white font-bold text-xl md:text-2xl mb-1">{PERSONAL_INFO.fullName}</h2>
      
      {/* Status indicator */}
      <div className="flex items-center gap-2 mb-8 text-[10px] font-bold tracking-widest text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
          FULLSTACK DEV
      </div>

      {/* Action Buttons */}
      <button onClick={onContactClick} className="w-full py-2.5 bg-brand-primary hover:bg-blue-600 text-white text-sm rounded-lg font-semibold mb-3 transition-colors text-center shadow-lg shadow-brand-primary/20">
        Contact Me
      </button>
      
      <a href={PERSONAL_INFO.resumeUrl} className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg font-semibold transition-colors text-center border border-white/5 flex items-center justify-center gap-2">
        <Download size={16} /> CV
      </a>
      
      {/* Bottom Footer Info */}
      <div className="mt-6 md:mt-auto pt-6 w-full flex justify-center gap-6 text-[10px] md:text-[11px] text-neutral-500 font-mono">
        <p>Git status: <span className="text-green-500">clean</span></p>
        <p>Branch: <span className="text-brand-primary">main</span></p>
      </div>
    </div>
  );
}
