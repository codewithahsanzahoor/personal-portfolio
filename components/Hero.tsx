import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* HUD background decorations */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
        <div className="w-[600px] h-[600px] border-[1px] border-primary rounded-full animate-spin [animation-duration:20s] flex items-center justify-center">
          <div className="w-[400px] h-[400px] border-[2px] border-dashed border-primary rounded-full animate-spin [animation-duration:15s] flex items-center justify-center">
            <div className="w-[200px] h-[200px] border border-primary/40 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating HUD Elements */}
      <div className="absolute top-20 left-20 animate-float opacity-20 hidden lg:block">
        <span className="material-icons text-primary text-6xl">blur_on</span>
      </div>
      <div className="absolute bottom-40 right-20 animate-float [animation-delay:2s] opacity-20 hidden lg:block">
        <span className="material-icons text-primary text-6xl">grain</span>
      </div>

      <div className="relative z-10 max-w-5xl">
        <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 border border-primary/30 rounded-full px-4 py-1 animate-bounce">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-[10px] text-primary tracking-[0.3em] font-bold uppercase">
            System Online: v4.0_Stable
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8 hover:animate-glitch transition-all cursor-default select-none">
          Ahsan <span className="text-primary hologram-glow">Zahoor</span>{" "}
          <br />
          <span className="text-primary hologram-glow">Full Stack Web</span> ,
          Mobile Developer <br /> &{" "}
          <span className="text-accent-purple purple-glow">
            DevOps Engineer
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light tracking-wide animate-pulse [animation-duration:4s]">
          Specializing in MERN Stack, Next.js, and scaling Real-time
          Applications. Bridge the gap between complex backend logic and
          seamless frontend experiences.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="#projects"
            className="w-full md:w-auto px-10 py-4 bg-primary text-background-dark font-bold uppercase tracking-widest hover:bg-white transition-all rounded-sm flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(37,209,244,0.4)]"
          >
            Explore My Work{" "}
            <span className="material-icons group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
          <a
            href="/cv.pdf"
            download="Ahsan_Zahoor_CV.pdf"
            className="w-full md:w-auto px-10 py-4 border border-primary/40 text-slate-100 font-bold uppercase tracking-widest hover:bg-primary/10 transition-all rounded-sm group relative overflow-hidden flex items-center justify-center text-center"
          >
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 max-w-5xl w-full border-t border-primary/10 pt-12">
        {[
          { id: "01", label: "REACT / NEXT.JS" },
          { id: "02", label: "NODE / EXPRESS" },
          { id: "03", label: "MONGODB / SQL" },
          { id: "04", label: "REAL-TIME APPS" },
        ].map((item, i) => (
          <div
            key={item.id}
            className="text-left group cursor-default hover:translate-y-[-5px] transition-transform duration-300"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <span className="text-primary font-bold text-xl block mb-1 group-hover:hologram-glow transition-all">
              {item.id}
            </span>
            <span className="text-[10px] text-primary/60 font-mono tracking-widest uppercase group-hover:text-primary transition-colors">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
        <span className="text-[8px] font-mono tracking-[0.4em] uppercase">
          Scroll to Explore
        </span>
      </div>
    </div>
  );
};

export default Hero;
