import React from 'react';
import { Terminal, ArrowRight, PlayCircle, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-8 z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
          <Terminal className="w-3.5 h-3.5" /> Next-Gen Offensive Security Academy
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
          Master Advanced <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Cybersecurity</span> & Red Teaming.
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal">
          Bypass standard defenses, dismantle complex web architectures, and master adversary emulation through rigorous hands-on virtual lab scenarios.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-extrabold hover:opacity-90 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)]">
            Access Full Academy <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#curriculum" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white font-semibold transition-all">
            <PlayCircle className="w-5 h-5 text-cyan-400" /> Explore Syllabus
          </a>
        </div>

        <div className="pt-6 grid grid-cols-3 gap-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
          <div>
            <p className="text-2xl font-bold text-white">80+ Hrs</p>
            <p className="text-xs text-slate-400">Practical Labs</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-xs text-slate-400">Hands-on Attack</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Lifetime</p>
            <p className="text-xs text-slate-400">Lab Access</p>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full max-w-xl">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-cyan-500/20">
          <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-400">root@cyber-ops:~# active_audit.sh</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-3 text-left">
            <p className="text-cyan-400">$ initializing secure workspace container...</p>
            <p className="text-slate-300">&gt; Target cluster: <span className="text-emerald-400">secured_node_alpha</span></p>
            <p className="text-slate-300">&gt; Exploitation vector: <span className="text-amber-400">Active</span></p>
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Privilege escalation successful. Root shell secured.</span>
            </div>
            <p className="text-slate-500 animate-pulse">_ waiting for student command input...</p>
          </div>
        </div>
      </div>
    </section>
  );
}