import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { name: 'Alex Vance', role: 'Security Engineer at CloudGuard', comment: 'The Red Team operations module alone landed me a senior position. Absolutely top-tier content.' },
    { name: 'Sarah Jenkins', role: 'Penetration Tester', comment: 'No fluff, straight-to-the-point practical labs that mirror real-world corporate infrastructure attacks.' }
  ];

  return (
    <section id="reviews" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/80">
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30">
            <div className="flex items-center gap-1 text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
            </div>
            <p className="text-sm text-slate-300 mb-4 italic">"{t.comment}"</p>
            <div>
              <p className="font-bold text-white text-sm">{t.name}</p>
              <p className="text-xs text-cyan-400">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}