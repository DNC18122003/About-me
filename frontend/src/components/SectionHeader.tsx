import React from 'react';
import { LucideIcon } from 'lucide-react';

// Props for our SectionHeader
interface Props {
  title: string;
  icon: LucideIcon;
  subtitle: string;
}

// A reusable header for each main section page
export function SectionHeader({ title, icon: Icon, subtitle }: Props) {
  return (
    <div className="mb-10">
      {/* Small Category Title */}
      <div className="flex items-center gap-2 text-brand-primary mb-3 text-xs font-bold uppercase tracking-[0.3em]">
        <Icon size={14} />
        <span>{title}</span>
      </div>
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
        {subtitle}
      </h2>
    </div>
  );
}
