import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Invest in Your Elite Career</h2>
        <p className="text-slate-400">Get complete, unrestricted access to all labs, video modules, and community support.</p>
      </div>

      <div className="max-w-md mx-auto rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-extrabold text-xs tracking-wider uppercase">
          All-Access Pass
        </div>

        <div className="text-center mt-4 mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Cyber Pro Security Tier</h3>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-black text-white">$299</span>
            <span className="text-sm text-slate-400">/ lifetime access</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8 text-sm text-slate-300">
          <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Full Access to all 4 Red Team Modules</li>
          <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> 80+ Hours of Isolated Virtual Labs</li>
          <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Custom AI Security Scripting Templates</li>
          <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Verified Industry Completion Certificate</li>
          <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Private Discord Community Access</li>
        </ul>

        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-extrabold hover:opacity-90 transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)]">
          Secure Your Seat Now
        </button>
      </div>
    </section>
  );
}