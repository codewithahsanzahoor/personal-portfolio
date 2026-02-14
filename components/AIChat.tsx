
import React, { useState, useRef, useEffect } from 'react';
import { generateAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'SYSTEM READY. I am the Nexus Operator. How can I assist your technical inquiry today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = { role: 'user', content: input } as ChatMessage;
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await generateAIResponse(input, messages.map(m => ({ role: m.role, content: m.content })));
    
    setMessages(prev => [...prev, { role: 'assistant', content: response || 'NO RESPONSE' }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-[350px] md:w-[400px] h-[500px] glass-panel rounded-xl flex flex-col overflow-hidden border-primary/40 shadow-2xl">
          <div className="bg-primary/10 p-4 border-b border-primary/20 flex justify-between items-center">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">System Intelligence</span>
             </div>
             <button onClick={() => setIsOpen(false)} className="text-primary hover:text-white transition-colors">
                <span className="material-icons text-sm">close</span>
             </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
             {messages.map((msg, idx) => (
               <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                 <div className={`max-w-[80%] p-3 rounded-lg text-sm font-light leading-relaxed ${
                   msg.role === 'user' 
                     ? 'bg-primary/20 border border-primary/40 text-slate-100 rounded-br-none' 
                     : 'bg-background-dark border border-primary/10 text-primary/90 rounded-bl-none'
                 }`}>
                   {msg.content}
                 </div>
               </div>
             ))}
             {isTyping && (
               <div className="flex justify-start">
                  <div className="bg-background-dark border border-primary/10 p-3 rounded-lg rounded-bl-none">
                    <div className="flex gap-1">
                       <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
                       <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                       <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
               </div>
             )}
          </div>

          <div className="p-4 border-t border-primary/20 bg-background-dark/50">
             <div className="relative">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="QUERY SYSTEM..."
                  className="w-full bg-primary/5 border border-primary/20 focus:border-primary outline-none py-2 pl-4 pr-12 text-sm text-slate-100 font-mono"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-white"
                >
                  <span className="material-icons">send</span>
                </button>
             </div>
             <p className="text-[8px] text-center mt-2 text-primary/40 font-mono tracking-widest">UPLINK_SECURE: AES-256</p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-background-dark border-2 border-primary/40 rounded-full flex items-center justify-center text-primary shadow-[0_0_20px_rgba(37,209,244,0.4)] hover:scale-110 transition-all group"
        >
          <span className="material-icons text-3xl group-hover:animate-pulse">smart_toy</span>
        </button>
      )}
    </div>
  );
};

export default AIChat;
