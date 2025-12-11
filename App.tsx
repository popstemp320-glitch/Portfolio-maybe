import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Tools } from './pages/Tools';
import { Certifications } from './pages/Certifications';
import { Projects } from './pages/Projects';
import { Writeups } from './pages/Writeups';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cyber-paper text-cyber-ink selection:bg-cyber-red selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/writeups" element={<Writeups />} />
            <Route path="/contact" element={<div className="h-[50vh] flex items-center justify-center font-display text-4xl">CONTACT FORM PLACEHOLDER</div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;