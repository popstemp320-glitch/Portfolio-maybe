import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader title="Operations" subtitle="Classified Projects" />

      <div className="space-y-16">
        {PROJECTS.map((project, index) => (
          <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 border-2 border-cyber-black transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform z-0"></div>
              <div className="relative z-10 border-2 border-cyber-black overflow-hidden h-64 md:h-80 w-full">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="font-mono text-xs border border-cyber-gray px-2 py-0.5 text-cyber-gray uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tighter mb-6 relative inline-block group cursor-default">
                {project.title}
                <span className="absolute bottom-0 left-0 w-full h-2 bg-cyber-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </h2>

              <p className="font-serif text-lg text-gray-700 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a href={project.repoLink} className="flex items-center gap-2 font-mono font-bold border-b-2 border-cyber-black pb-1 hover:text-cyber-red hover:border-cyber-red transition-all">
                  <Github size={18} /> Source Code
                </a>
                {project.demoLink && (
                  <a href={project.demoLink} className="flex items-center gap-2 font-mono font-bold border-b-2 border-cyber-black pb-1 hover:text-cyber-red hover:border-cyber-red transition-all">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};