import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { TOOLS } from '../constants';
import { ExternalLink, Circle } from 'lucide-react';

export const Tools: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader title="Arsenal" subtitle="Self-Hosted Utilities" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOLS.map((tool) => (
          <div key={tool.id} className="group border-2 border-cyber-black bg-white p-6 relative hover:border-cyber-red transition-colors hard-shadow h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider bg-cyber-black text-white px-2 py-1">
                {tool.category}
              </span>
              <div className="flex items-center gap-2 font-mono text-xs">
                 <Circle size={10} fill={tool.status === 'ONLINE' ? '#22c55e' : '#ef4444'} className={tool.status === 'ONLINE' ? 'text-green-500' : 'text-red-500'} />
                 {tool.status}
              </div>
            </div>
            
            <h3 className="font-sans font-black text-2xl uppercase mb-3 group-hover:text-cyber-red transition-colors">
              {tool.name}
            </h3>
            
            <p className="font-serif text-gray-600 mb-6 flex-grow border-l-2 border-gray-200 pl-3">
              {tool.description}
            </p>
            
            <a href={tool.link} className="inline-flex items-center justify-center gap-2 w-full py-3 border-2 border-cyber-black font-mono font-bold uppercase text-sm hover:bg-cyber-black hover:text-white transition-all">
              Launch Tool <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};