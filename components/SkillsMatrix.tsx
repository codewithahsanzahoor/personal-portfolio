import React, { useState } from "react";
import { SKILLS } from "../constants";

const SkillsMatrix: React.FC = () => {
  const [filter, setFilter] = useState("ALL_MODULES");

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-8 py-24 border-y border-primary/5"
    >
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Profile Sidebar */}
        <div className="lg:w-1/3 space-y-8">
          <div className="relative group">
            <div className="flex items-center gap-2 mb-4 text-primary font-mono text-xs tracking-widest uppercase">
              <span className="w-8 h-px bg-primary/40 group-hover:w-16 transition-all duration-500"></span>
              System Core v2.0.4 // Dev_Profile
            </div>
            <div className="flex items-start gap-4">
              <div className="relative w-24 h-24 border-2 border-primary/30 p-1 overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Ahsan Zahoor"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-5 h-5 rounded-sm flex items-center justify-center border border-background-dark z-20">
                  <span className="material-icons text-[12px] text-white">
                    check
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold tracking-tighter uppercase leading-tight group-hover:text-primary transition-colors">
                  Ahsan_Zahoor
                </h3>
                <h4 className="text-2xl font-bold text-primary tracking-tighter uppercase hologram-glow">
                  Full_Stack_Dev
                </h4>
                <p className="text-[10px] text-primary/60 font-mono tracking-widest mt-1 italic animate-pulse">
                  # MERN_ARCHITECT
                </p>
              </div>
            </div>
          </div>

          <p className="text-slate-400 leading-relaxed text-sm">
            Initializing biographical data... Associate Full Stack Developer at{" "}
            <span className="text-white">Preesoft</span>. Creating scalable
            enterprise applications.{" "}
            <span className="text-primary font-bold">2+ years</span> of
            experience in engineering high-performance web ecosystems,
            specializing in the <span className="text-white">MERN stack</span>{" "}
            and <span className="text-white">Real-time</span> architectures.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "XP_LEVEL", val: "02+" },
              { label: "UPTIME", val: "100%" },
              { label: "REGION", val: "PK" },
            ].map((stat, i) => (
              <div
                key={i}
                className="border border-primary/20 p-3 rounded-sm bg-primary/5 hover:bg-primary/10 transition-colors group cursor-default"
              >
                <p className="text-[8px] text-primary/60 font-mono uppercase mb-1 group-hover:text-primary">
                  {stat.label}
                </p>
                <p className="text-lg font-bold group-hover:scale-110 transition-transform origin-left">
                  {stat.val}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 p-6 rounded-sm space-y-4 hover:border-primary/40 transition-all">
            <h5 className="flex items-center gap-2 text-primary font-bold uppercase text-xs">
              <span className="material-icons text-sm animate-spin [animation-duration:3s]">
                terminal
              </span>
              Core_Competencies
            </h5>
            <div className="space-y-2">
              {[
                { n: "MERN Stack Architecture", l: "Advanced" },
                { n: "Real-time Systems", l: "Expert" },
                { n: "Secure API Design", l: "Intermediate+" },
              ].map((comp, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-[10px] font-mono tracking-widest border-b border-primary/5 pb-1"
                >
                  <span className="text-slate-400">{comp.n}</span>
                  <span className="text-primary">{comp.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="lg:w-2/3">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
              <span className="material-icons text-primary animate-pulse">
                apps
              </span>
              SKILLS_MATRIX
            </h2>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {["ALL_MODULES", "FRONTEND", "BACKEND"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => setFilter(btn)}
                  className={`px-4 py-1 text-[10px] font-bold tracking-widest uppercase border border-primary/30 rounded-full transition-all ${filter === btn ? "bg-primary text-background-dark" : "hover:bg-primary/10 text-primary"}`}
                >
                  {btn.replace("_", " ")}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.filter(
              (skill) => filter === "ALL_MODULES" || skill.category === filter,
            ).map((skill, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-xl group relative overflow-hidden border-primary/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rotate-45 translate-x-12 -translate-y-12 group-hover:translate-x-8 transition-transform"></div>
                <div className="flex justify-between items-start mb-6">
                  <span className="material-icons text-primary text-3xl group-hover:scale-110 group-hover:rotate-12 transition-transform">
                    {skill.icon}
                  </span>
                  <span className="text-[8px] font-mono text-primary/40 uppercase">
                    {skill.module}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">
                  {skill.name}
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-primary/60">
                    <span>PROFICIENCY</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1 bg-primary/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary shadow-[0_0_15px_rgba(37,209,244,0.6)] transition-all duration-1000 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-16 opacity-40">
            {[
              { label: "Memory_Load", val: "4.2 GB" },
              { label: "Sync_Rate", val: "60 Hz" },
              { label: "Packet_Loss", val: "0.00%" },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="w-1 h-1 bg-primary mx-auto mb-2 animate-ping"></div>
                <p className="text-[10px] font-mono uppercase group-hover:text-primary transition-colors">
                  {stat.label}
                </p>
                <p className="text-xs font-bold">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
