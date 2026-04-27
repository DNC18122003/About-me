import React from 'react';
import { Settings, Mail, Phone, Github, Facebook, Download, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { PERSONAL_INFO } from '../data';

// The Settings and Contact Tab Content
export function SettingsSection() {
  
  // Define an array of contact methods for easy mapping and rendering
  const CONTACTS = [
    { 
      label: "Email Address", 
      value: PERSONAL_INFO.email, 
      icon: Mail, 
      link: `mailto:${PERSONAL_INFO.email}`, 
      color: "text-red-400", 
      bg: "bg-red-400/10", 
      hover: "group-hover:bg-red-400 group-hover:shadow-red-400/20" 
    },
    { 
      label: "Phone Number", 
      value: PERSONAL_INFO.phone, 
      icon: Phone, 
      link: `tel:${PERSONAL_INFO.phone}`, 
      color: "text-green-400", 
      bg: "bg-green-400/10", 
      hover: "group-hover:bg-green-400 group-hover:shadow-green-400/20" 
    },
    { 
      label: "Facebook", 
      value: PERSONAL_INFO.name, 
      icon: Facebook, 
      link: PERSONAL_INFO.facebook, 
      color: "text-blue-500", 
      bg: "bg-blue-500/10", 
      hover: "group-hover:bg-blue-500 group-hover:shadow-blue-500/20" 
    },
    { 
      label: "GitHub", 
      value: "DNC18122003", 
      icon: Github, 
      link: PERSONAL_INFO.github, 
      color: "text-white", 
      bg: "bg-white/10", 
      hover: "group-hover:bg-white group-hover:text-surface-950 group-hover:shadow-white/20" 
    },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="pb-8">
      <SectionHeader title="Settings" icon={Settings} subtitle="Contact Information." />
      
      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {CONTACTS.map((contact, index) => (
          <a 
            key={index} 
            href={contact.link} 
            target={contact.link.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="bg-[#18181a] border border-white/5 p-6 rounded-3xl flex items-center gap-5 hover:border-white/10 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
          >
            {/* Contact Icon Box */}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${contact.bg} ${contact.color} ${contact.hover} group-hover:text-white group-hover:scale-110`}>
              <contact.icon size={24} />
            </div>
            
            {/* Contact Details */}
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-neutral-500 uppercase font-bold tracking-widest mb-1.5">{contact.label}</p>
              <p className="font-bold text-[15px] text-white/90 group-hover:text-white transition-colors truncate">
                {contact.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* About Me / Objective Block */}
      <div className="bg-[#18181a] border border-white/5 p-8 rounded-3xl shadow-xl relative overflow-hidden group hover:border-white/10 transition-colors">
        {/* Decorative background accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        
        <h3 className="text-2xl font-extrabold text-white mb-2">{PERSONAL_INFO.role}</h3>
        <p className="text-brand-primary text-xs font-bold tracking-widest uppercase mb-6">{PERSONAL_INFO.tagline}</p>
        
        <div className="space-y-4 text-[14px] text-neutral-400 leading-relaxed relative z-10">
          <p>{PERSONAL_INFO.summary}</p>
          <p>{PERSONAL_INFO.about}</p>
        </div>
      </div>

    </motion.div>
  );
}
