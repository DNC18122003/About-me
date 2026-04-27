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
    <div className="absolute top-0 w-full h-8 bg-[#1c1c1e]/90 flex items-center justify-between px-5 text-white/90 text-[13px] font-medium z-50">
      {/* Left Side Menu */}
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

      {/* Right Side Icons & Time */}
      <div className="flex items-center gap-5">
        <Wifi size={15} className="opacity-80" />
        <Search size={15} className="opacity-80" />
        <Battery size={15} className="opacity-80" />
        <span className="cursor-default opacity-90">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
        </span>
      </div>
    </div>
  );
}
