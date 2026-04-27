import React from 'react';

// Props needed to render the bottom navigation icons
interface Props {
  icon: React.ReactNode;
  color: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  href?: string;
}

// A simple reusable component for the bottom Dock navigation
export function DockIcon({ icon, color, label, isActive, onClick, href }: Props) {
  // Common content for both button and link
  const content = (
    <>
      {/* Tooltip that shows on hover */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-surface-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
        {label}
      </div>
      
      {/* The Icon Box with standard CSS hover animations */}
      <div 
        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${color} transition-all duration-300 shadow-lg border transform group-hover:scale-110 group-hover:-translate-y-3 ${isActive ? 'border-white/40 shadow-brand-primary/20' : 'border-white/10'}`}
      >
        {icon}
      </div>

      {/* Active Indicator dot at the bottom */}
      {isActive && <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/80 shadow-[0_0_5px_rgba(255,255,255,0.8)]" />}
    </>
  );

  // If there's a link, render an <a> tag. Otherwise, render a <button>.
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
