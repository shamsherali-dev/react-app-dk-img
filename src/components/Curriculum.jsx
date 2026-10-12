import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Curriculum() {
  const modules = [
    { id: '01', title: 'Advanced Penetration Testing & Recon', hours: '18h', desc: 'Master network mapping, vulnerability enumeration, and stealth recon using enterprise toolsets.' },
    { id: '02', title: 'Offensive Web Application Hacking', hours: '24h', desc: 'Deep dive into OWASP Top 10, SSRF, advanced SQLi, JWT hijacking, and API security flaws.' },
    { id: '03', title: 'Red Team Operations & Evasion', hours: '22h', desc: 'Simulate advanced persistent threats (APTs), payload obfuscation, and EDR bypass techniques.' },
    { id: '04', title: 'Automated Security Scripting & AI', hours: '16h', desc: 'Build custom Python automation scripts and leverage local LLMs for automated threat intelligence.' }
  ];

  return (
    <section id="curriculum" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Advanced Training Modules</h2>
        <p className="text-slate-400 max-w-xl mx-auto">Structured curriculum designed by elite security professionals to take you from fundamentals to advanced enterprise red teaming.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((m) => (
          <div key={m.id} className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                MODULE {m.id}
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> {m.hours}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{m.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}