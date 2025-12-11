import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'left' }) => {
  return (
    <div className={`mb-12 py-8 border-b-[3px] border-cyber-black ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <div className="flex flex-col gap-2">
        <span className="font-mono text-cyber-red text-sm tracking-widest uppercase">
          // {subtitle}
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-cyber-black">
          {title}
        </h1>
      </div>
    </div>
  );
};