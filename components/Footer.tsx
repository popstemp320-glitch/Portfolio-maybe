import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-black text-white py-12 border-t-[3px] border-cyber-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">PORTFOLIO OS</h3>
            <p className="font-serif text-gray-400 max-w-xs">
              Printed in India • Vol 1.0 • © 2025
              <br />
              All systems nominal.
            </p>
          </div>
          <div className="font-mono text-sm text-gray-400">
            <p className="mb-2">// SYSTEM STATUS</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              CORE: ONLINE
            </p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              NET: SECURE
            </p>
          </div>
          <div className="flex gap-4 items-start md:justify-end">
            {[Github, Linkedin, Twitter, Mail].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="p-3 border border-gray-600 hover:border-cyber-red hover:text-cyber-red transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-gray-500">
          <p>ID: USER_2025_ADMIN_ACCESS</p>
          <p>DESIGN: CYBERPRINT PROTOCOL</p>
        </div>
      </div>
    </footer>
  );
};