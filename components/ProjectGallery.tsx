
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectGallery: React.FC = () => {
  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-px bg-primary"></span>
            <span className="text-xs font-mono text-primary tracking-widest uppercase">Portfolio Terminal</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight uppercase">
            Project <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">Showcase</span>
          </h2>
        </div>
        <div className="flex items-center gap-4 pb-2">
          <div className="text-right">
            <p className="text-xs font-mono text-primary/60 uppercase">System Status</p>
            <p className="text-sm font-bold text-emerald-400">ENCRYPTED / ACTIVE</p>
          </div>
          <div className="w-12 h-12 border-2 border-primary/20 rounded-full flex items-center justify-center">
            <span className="material-icons text-primary animate-pulse">radar</span>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-8 px-8 md:px-[calc(50vw-640px+32px)] no-scrollbar py-12">
        {PROJECTS.map((project) => (
          <div key={project.id} className="flex-shrink-0 w-[300px] md:w-[600px] aspect-[4/5] md:aspect-[16/10] snap-center group relative">
            <div className="relative w-full h-full glass-panel rounded-xl overflow-hidden group-hover:scale-[1.02] transition-all duration-500 border-primary/20">
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-60 group-hover:opacity-30" 
                src={project.imageUrl} 
                alt={project.title} 
              />
              
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-20 pointer-events-none"></div>

              {/* Card Header */}
              <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-20">
                <div>
                  <span className="bg-primary/20 text-primary px-3 py-1 text-[10px] font-mono tracking-widest rounded-full border border-primary/30">ID: {project.id}</span>
                  <h3 className="text-2xl font-bold mt-2 tracking-tight uppercase">{project.title}</h3>
                </div>
                <div className="w-10 h-10 glass-panel rounded flex items-center justify-center border border-primary/40">
                  <span className="material-icons text-primary text-sm">settings_input_component</span>
                </div>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-30 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent">
                <p className="text-slate-300 text-sm md:text-base mb-6 max-w-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-mono border border-primary/20 rounded uppercase">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 bg-primary text-background-dark font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-colors group/btn uppercase tracking-widest text-xs">
                    Initialize <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                  <button className="w-14 bg-background-dark/50 border border-primary text-primary py-3 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <span className="material-icons">code</span>
                  </button>
                </div>
              </div>

              {/* Bottom HUD Labels */}
              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center pointer-events-none opacity-40">
                <div className="text-[8px] font-mono space-y-1">
                  <p>{project.coordinates}</p>
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-primary/30"></div>
                  <div className="w-1 h-3 bg-primary/60"></div>
                  <div className="w-1 h-3 bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Spacer */}
        <div className="flex-shrink-0 w-32 md:w-64"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="relative w-full h-1 bg-primary/10 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-primary w-1/3 shadow-[0_0_10px_rgba(37,209,244,0.8)]"></div>
        </div>
        <div className="flex justify-between items-center mt-4 text-[10px] font-mono text-primary/60 tracking-widest uppercase">
          <span>01 / Project_Init</span>
          <span className="animate-pulse">Scroll to Navigate_</span>
          <span>Data_Stream: 88%</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
