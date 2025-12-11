import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { WRITEUPS } from '../constants';
import { FileText, Flag, Calendar } from 'lucide-react';

export const Writeups: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader title="Intelligence" subtitle="Mission Reports & Writeups" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main Content Column */}
        <div className="md:col-span-12 space-y-12">
          {WRITEUPS.map((writeup) => (
            <article key={writeup.id} className="border-b border-gray-300 pb-12">
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                <span className="font-mono text-cyber-red font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                  <Flag size={14} /> {writeup.platform}
                </span>
                <span className="font-mono text-gray-500 text-xs flex items-center gap-2">
                  <Calendar size={12} /> {writeup.date}
                </span>
                <span className={`font-mono text-xs px-2 py-0.5 border ${
                  writeup.difficulty === 'Insane' ? 'border-cyber-red text-cyber-red' : 
                  writeup.difficulty === 'Hard' ? 'border-orange-500 text-orange-500' :
                  'border-green-600 text-green-600'
                }`}>
                  [{writeup.difficulty}]
                </span>
              </div>

              <h2 className="font-display font-bold text-4xl mb-4 hover:text-cyber-red transition-colors cursor-pointer">
                {writeup.title}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3">
                  <p className="font-serif text-lg text-gray-800 leading-relaxed mb-4">
                    <span className="float-left text-5xl font-display font-black mr-3 mt-[-6px] text-cyber-black">
                      {writeup.excerpt.charAt(0)}
                    </span>
                    {writeup.excerpt.substring(1)}
                  </p>
                  <a href="#" className="inline-block font-sans font-bold uppercase text-sm border-b-2 border-cyber-black hover:bg-cyber-black hover:text-white transition-all pt-1">
                    Read Full Report
                  </a>
                </div>
                
                <div className="lg:col-span-1 border-l-2 border-gray-200 pl-4 flex flex-col justify-center">
                   <div className="bg-gray-100 p-4 text-center">
                      <FileText className="mx-auto mb-2 text-gray-400" size={32} />
                      <span className="font-mono text-xs text-gray-500">CATEGORY</span>
                      <p className="font-sans font-bold text-sm uppercase">{writeup.category}</p>
                   </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};