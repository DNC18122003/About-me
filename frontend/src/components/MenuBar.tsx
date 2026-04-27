import React, { useState, useEffect } from 'react';
import { Command, Wifi, Search, Battery } from 'lucide-react';

// The top macOS style menu bar
export function MenuBar() {
  // Simple state to hold current time
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[1200px] h-10 bg-[#1c1c1e]/70 backdrop-blur-2xl flex items-center justify-between px-6 text-white/90 text-[13px] font-medium z-50 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      {/* Left Side Menu */}
      <div className="flex items-center gap-6">
        <div className="p-1.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
          <Command size={16} className="text-brand-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
        </div>
        <span className="font-black tracking-tight text-white cursor-default bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">DNC.dev</span>
      </div>

      {/* Right Side Icons & Time */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-4 px-3 py-1 bg-white/5 rounded-full border border-white/5">
          <Wifi size={14} className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
          <Search size={14} className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
          <Battery size={14} className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity text-emerald-400" />
        </div>
        
        <div className="flex items-center gap-2 pl-2 border-l border-white/10">
          <span className="cursor-default font-black text-white/90 tracking-tighter">
            {time.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}
          </span>
          <span className="cursor-default font-black text-brand-primary tracking-tighter">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
          </span>
        </div>
      </div>
    </div>
  );
}
