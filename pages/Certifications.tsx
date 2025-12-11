import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { CERTIFICATIONS } from '../constants';
import { Award, CheckCircle } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader title="Credentials" subtitle="Verified Achievements" align="center" />

      <div className="space-y-8">
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.id} className="relative bg-white border-l-[6px] border-cyber-black p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow">
            {/* "Paper clipping" visual effect */}
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-200 transform rotate-45 border border-gray-300 z-0"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-grow">
                 <div className="flex items-center gap-3 mb-2">
                    <Award className="text-cyber-red" />
                    <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">{cert.issuer}</span>
                 </div>
                 <h2 className="font-display text-3xl font-bold text-cyber-black mb-2 leading-tight">
                   {cert.title}
                 </h2>
                 <div className="flex flex-wrap gap-4 mt-4 font-mono text-sm text-gray-600">
                   <span className="bg-gray-100 px-2 py-1 border border-gray-300">ID: {cert.credentialId}</span>
                   <span className="bg-gray-100 px-2 py-1 border border-gray-300">Issued: {cert.date}</span>
                 </div>
              </div>

              <div className="flex-shrink-0 flex items-center md:flex-col gap-2 md:items-end">
                 <span className={`font-sans font-black uppercase text-sm px-3 py-1 border-2 ${
                    cert.level === 'Expert' ? 'border-cyber-red text-cyber-red' : 'border-cyber-black text-cyber-black'
                 }`}>
                    {cert.level}
                 </span>
                 <CheckCircle className="text-green-600 w-6 h-6 hidden md:block" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};