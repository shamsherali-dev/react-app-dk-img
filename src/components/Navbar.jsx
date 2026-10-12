import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#030712]/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Shield className="w-6 h-6" />
          </div>
          <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            CYBER./OPS
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#curriculum" className="hover:text-cyan-400 transition-colors">Curriculum</a>
          <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
          <a href="#reviews" className="hover:text-cyan-400 transition-colors">Testimonials</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#pricing" className="px-5 py-2.5 rounded-xl text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            Enroll Securely
          </a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-300 hover:text-white">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
          <a href="#curriculum" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 py-2">Curriculum</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 py-2">Pricing</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block w-full py-3 text-center rounded-xl bg-cyan-500 font-bold text-slate-950">Enroll Securely</a>
        </div>
      )}
    </header>
  );
}