import React from 'react';
import { SKILLS_MARQUEE, TOOLS } from '../constants';
import { ArrowRight, Terminal, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-0">
      {/* Newspaper Metadata Strip */}
      <div className="w-full border-b-[2px] border-cyber-black bg-white py-2 px-4 flex justify-between font-mono text-xs md:text-sm uppercase tracking-widest text-cyber-gray">
        <span>Volume I</span>
        <span className="hidden md:inline">Edition 2025 • India Desk</span>
        <span>Price: FREE</span>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh] border-b-[3px] border-cyber-black">
        {/* Main Headline Area */}
        <div className="lg:col-span-7 p-6 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r-[3px] border-cyber-black bg-cyber-paper relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Terminal size={400} />
          </div>
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-cyber-black mb-6 z-10">
            HELLO<br />
            WORLD<span className="text-cyber-red">.</span>
          </h1>
          <h2 className="font-sans font-bold text-2xl md:text-4xl uppercase tracking-tighter mb-8 z-10">
            Full Stack <span className="bg-cyber-black text-white px-2">Engineer</span> & Security <span className="text-cyber-red">Researcher</span>
          </h2>
          <div className="font-serif text-lg md:text-xl leading-relaxed max-w-2xl border-l-4 border-cyber-red pl-6 z-10">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
              Building the bridge between robust architecture and offensive security. I craft systems that survive the storm and break the ones that don't.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-4 z-10">
            <Link to="/projects" className="bg-cyber-black text-white font-mono uppercase font-bold py-4 px-8 border-2 border-cyber-black hover:bg-transparent hover:text-cyber-black transition-all hard-shadow flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="bg-transparent text-cyber-black font-mono uppercase font-bold py-4 px-8 border-2 border-cyber-black hover:bg-cyber-red hover:text-white hover:border-cyber-red transition-all">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Sidebar / Image Area */}
        <div className="lg:col-span-5 relative bg-neutral-200 overflow-hidden group">
            {/* Grayscale Glitch Image Placeholder */}
            <div className="absolute inset-0 bg-[url('https://picsum.photos/800/1200')] bg-cover bg-center grayscale contrast-125 group-hover:contrast-150 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-cyber-red/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 w-full bg-cyber-black/90 p-8 border-t-4 border-cyber-red transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-mono text-cyber-red text-sm mb-2">// SYSTEM.IDENTITY</p>
                <p className="font-sans text-white font-bold text-lg leading-tight">
                    OPERATIVE: [YOUR NAME]<br/>
                    STATUS: ACTIVE<br/>
                    LOC: UNKNOWN
                </p>
            </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-cyber-black text-white py-4 border-b-[3px] border-cyber-black overflow-hidden relative">
        <div className="marquee-container">
            <div className="marquee-content font-mono font-bold text-xl md:text-2xl tracking-widest">
                {SKILLS_MARQUEE.map((skill, i) => (
                    <span key={i} className="mx-8">
                        <span className="text-cyber-red mx-2">///</span> {skill}
                    </span>
                ))}
                {SKILLS_MARQUEE.map((skill, i) => (
                    <span key={`dup-${i}`} className="mx-8">
                        <span className="text-cyber-red mx-2">///</span> {skill}
                    </span>
                ))}
            </div>
        </div>
      </div>

      {/* Quick Stats / Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-[3px] divide-cyber-black border-b-[3px] border-cyber-black bg-white">
          <div className="p-8 hover:bg-red-50 transition-colors">
              <Shield className="w-12 h-12 text-cyber-black mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">Security First</h3>
              <p className="font-serif text-gray-600">Offensive mindset applied to defensive architecture. Certified and battle-tested.</p>
          </div>
          <div className="p-8 hover:bg-red-50 transition-colors">
              <Terminal className="w-12 h-12 text-cyber-black mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">Automation</h3>
              <p className="font-serif text-gray-600">Building tools to eliminate repetition. Scripts, bots, and CI/CD pipelines.</p>
          </div>
          <div className="p-8 hover:bg-red-50 transition-colors">
              <Cpu className="w-12 h-12 text-cyber-black mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">Performance</h3>
              <p className="font-serif text-gray-600">Optimized code running on lean infrastructure. Speed is a feature.</p>
          </div>
      </div>
    </div>
  );
};