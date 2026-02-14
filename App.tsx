
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectGallery from './components/ProjectGallery';
import ContactTerminal from './components/ContactTerminal';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen grid-bg relative">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent"></div>
        {/* Subtle Side labels */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 opacity-20">
          <div className="rotate-90 text-[10px] font-mono tracking-[0.5em] whitespace-nowrap text-primary uppercase">System_Parameters</div>
          <div className="w-px h-24 bg-primary/40"></div>
          <div className="rotate-90 text-[10px] font-mono tracking-[0.5em] whitespace-nowrap text-primary uppercase">Active_Protocols</div>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 opacity-20">
          <div className="-rotate-90 text-[10px] font-mono tracking-[0.5em] whitespace-nowrap text-primary uppercase">Quantum_Engine</div>
          <div className="w-px h-24 bg-primary/40"></div>
          <div className="-rotate-90 text-[10px] font-mono tracking-[0.5em] whitespace-nowrap text-primary uppercase">Neural_Link</div>
        </div>
      </div>

      {/* Main UI */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <SkillsMatrix />
          <ProjectGallery />
          <ContactTerminal />
        </main>
        
        {/* Footer */}
        <footer className="border-t border-primary/10 bg-background-dark/80 backdrop-blur-md py-12 px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-bold tracking-tighter text-lg uppercase">Dev_Core <span className="text-primary">v4.0</span></span>
              </div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">© 2024 All Rights Reserved // Node_ID: 882-Alpha</p>
            </div>

            <div className="flex items-center gap-6">
              {['GitHub', 'LinkedIn', 'Terminal'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 border border-primary/20 flex items-center justify-center rounded-full text-slate-400 hover:text-primary hover:border-primary transition-all bg-primary/5">
                   <span className="material-icons text-xl">{social === 'GitHub' ? 'code' : social === 'LinkedIn' ? 'person' : 'terminal'}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 px-4 py-2 rounded-full">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </div>
              <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase font-mono">System Status: Online</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating AI Assistant */}
      <AIChat />

      {/* Frame Decor */}
      <div className="fixed top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 pointer-events-none z-[60]"></div>
      <div className="fixed top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 pointer-events-none z-[60]"></div>
      <div className="fixed bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/20 pointer-events-none z-[60]"></div>
      <div className="fixed bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 pointer-events-none z-[60]"></div>
    </div>
  );
};

export default App;
