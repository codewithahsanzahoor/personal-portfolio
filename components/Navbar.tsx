import React from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
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

        {/* Desktop Menu */}
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-background-dark/95 backdrop-blur-xl border-l border-primary/20 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-24 px-8 space-y-8">
          <a
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-bold tracking-widest uppercase text-slate-300 hover:text-primary transition-colors flex items-center gap-4"
          >
            <span className="text-primary/40 font-mono text-xs">01</span>
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-bold tracking-widest uppercase text-slate-300 hover:text-primary transition-colors flex items-center gap-4"
          >
            <span className="text-primary/40 font-mono text-xs">02</span>
            Tech Stack
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-bold tracking-widest uppercase text-primary border border-primary/30 px-6 py-3 text-center hover:bg-primary hover:text-background-dark transition-all"
          >
            HIRE ME
          </a>

          <div className="mt-auto mb-12">
            <div className="text-[10px] text-primary/40 font-mono uppercase tracking-widest mb-4">
              System Status
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-emerald-500 font-mono">ONLINE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
