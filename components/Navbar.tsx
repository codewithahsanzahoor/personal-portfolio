import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 border border-primary flex items-center justify-center rotate-45 group-hover:bg-primary transition-all">
          <span className="material-icons text-primary group-hover:text-background-dark -rotate-45">
            bolt
          </span>
        </div>
        <div className="ml-2">
          <h1 className="text-xl font-bold tracking-tighter uppercase leading-none">
            Ahsan <span className="text-primary">Dev</span>
          </h1>
          <p className="text-[10px] text-primary/60 tracking-[0.2em] font-mono">
            SYS_CORE_V4.0
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
        <a className="text-primary border-b border-primary" href="#projects">
          Projects
        </a>
        <a className="hover:text-primary transition-colors" href="#skills">
          Tech Stack
        </a>
        <a
          href="#contact"
          className="bg-transparent border border-primary px-6 py-2 text-xs font-bold tracking-widest hover:bg-primary hover:text-background-dark transition-all"
        >
          HIRE ME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
