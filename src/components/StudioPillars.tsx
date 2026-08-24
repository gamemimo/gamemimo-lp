import React from 'react';
import { HeartHandshake, Zap, Sparkles, ShieldCheck, Smile } from 'lucide-react';

export const StudioPillars: React.FC = () => {
  const pillars = [
    {
      icon: <Smile className="w-8 h-8 text-pink-500" />,
      title: "Cozy & Zero-Stress",
      desc: "Designed for relaxation, offline enjoyment, and gentle snackable progression. No predatory timers or aggressive paywalls."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Instant Web & Cross-Play",
      desc: "Jump into games in under 1 second right in your browser via gamemimo.com, then sync progress smoothly to iOS and Android."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-cyan-500" />,
      title: "Tactile ASMR & Delight",
      desc: "Every pop, merge, harvest, and outfit snap is tuned with satisfying haptic feedback, joyful audio chimes, and pastel art."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      title: "100% Family & Kid Safe",
      desc: "Strict COPPA & GDPR compliance, non-personalized child-safe ad mediation, and transparent low-cost micro-IAPs."
    }
  ];

  return (
    <section id="pillars" className="py-16 sm:py-24 bg-base-200/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Our Studio DNA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Fredoka'] text-base-content tracking-tight">
            Crafted for Pure Player Joy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-base-content/70 font-['Nunito']">
            We build worlds that make your day a little brighter, wherever you are.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-base-100 border border-base-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-base-200 flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold font-['Fredoka'] text-base-content mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed font-['Nunito']">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
