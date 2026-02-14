
import React, { useState } from 'react';

const ContactTerminal: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<null | 'sending' | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 px-8 max-w-4xl mx-auto">
      <div className="mb-12 text-center relative">
        <div className="inline-block py-1 px-3 mb-4 border border-primary/30 bg-primary/10 rounded text-[10px] tracking-[0.3em] font-bold text-primary uppercase">
          Protocol: 0x244-COMM
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 uppercase">
          Establish <span className="text-primary hologram-glow">Connection</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm uppercase tracking-widest opacity-80">
          Initializing secure uplink for project inquiry.
        </p>
      </div>

      <div className="glass-panel rounded-xl p-8 md:p-12 relative overflow-hidden group border-primary/20">
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40"></div>

        {status === 'success' ? (
          <div className="py-20 text-center animate-pulse">
            <span className="material-icons text-emerald-400 text-6xl mb-4">check_circle</span>
            <h3 className="text-2xl font-bold text-emerald-400 uppercase tracking-widest">Transmission Successful</h3>
            <p className="text-slate-400 mt-2">Data payload received and encrypted. Response pending.</p>
            <button 
              onClick={() => setStatus(null)}
              className="mt-8 text-xs font-mono text-primary underline uppercase tracking-widest"
            >
              Restart_Uplink
            </button>
          </div>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="block text-[10px] tracking-widest text-primary uppercase mb-2 font-bold">Ident_Name</label>
                <input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-primary/5 border-b-2 border-primary/20 focus:border-primary outline-none py-3 px-4 transition-all duration-300 text-slate-100 placeholder:text-slate-600 rounded-t-sm" 
                  placeholder="GUEST_USER" 
                  type="text" 
                />
              </div>
              <div className="relative">
                <label className="block text-[10px] tracking-widest text-primary uppercase mb-2 font-bold">Ident_Email</label>
                <input 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-primary/5 border-b-2 border-primary/20 focus:border-primary outline-none py-3 px-4 transition-all duration-300 text-slate-100 placeholder:text-slate-600 rounded-t-sm" 
                  placeholder="USER@NETWORK.COM" 
                  type="email" 
                />
              </div>
            </div>
            <div className="relative">
              <label className="block text-[10px] tracking-widest text-primary uppercase mb-2 font-bold">Data_Payload</label>
              <textarea 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-primary/5 border-b-2 border-primary/20 focus:border-primary outline-none py-3 px-4 transition-all duration-300 text-slate-100 placeholder:text-slate-600 rounded-t-sm resize-none" 
                placeholder="ENTER TRANSMISSION DETAILS..." 
                rows={4}
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="text-[10px] text-slate-500 uppercase tracking-tighter font-mono">
                  <span className="block">Latency: 24ms</span>
                  <span className="block">Encryption: AES-256</span>
                </div>
              </div>
              <button 
                disabled={status === 'sending'}
                className="w-full md:w-auto px-10 py-4 bg-primary text-background-dark font-bold uppercase tracking-[0.2em] rounded overflow-hidden hover:bg-white transition-all shadow-[0_0_15px_rgba(37,209,244,0.3)] disabled:opacity-50" 
                type="submit"
              >
                {status === 'sending' ? 'Transmitting...' : 'Transmit_Data'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactTerminal;
