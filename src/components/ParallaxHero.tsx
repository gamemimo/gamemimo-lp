import React from 'react';
import { Sparkles, Gamepad2, ArrowDown, Trophy, Users, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenInstantPlay: () => void;
}

export const ParallaxHero: React.FC<HeroProps> = ({ onOpenInstantPlay }) => {
  const triggerBigConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FF5E7E', '#FF9966', '#FFD166', '#06D6A0', '#118AB2', '#073B4C']
    });
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-32 bg-gradient-to-b from-base-100 via-base-200/40 to-base-100">
      
      {/* Background Animated Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Floating Pink Baby Dragon */}
        <div className="absolute top-12 left-4 sm:left-16 animate-float-slow opacity-85">
          <div className="relative group cursor-pointer pointer-events-auto" onClick={triggerBigConfetti}>
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-xl flex items-center justify-center p-3 text-white">
              <span className="text-4xl sm:text-5xl">🐲</span>
            </div>
            <div className="absolute -top-2 -right-2 badge badge-accent badge-sm font-bold shadow animate-bounce">
              Baby Draco
            </div>
          </div>
        </div>

        {/* Floating Fluffy Kitten */}
        <div className="absolute top-24 right-6 sm:right-20 animate-float-reverse opacity-85">
          <div className="relative group cursor-pointer pointer-events-auto" onClick={triggerBigConfetti}>
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 shadow-xl flex items-center justify-center p-3 text-white">
              <span className="text-4xl sm:text-5xl">🐱</span>
            </div>
            <div className="absolute -top-2 -left-2 badge badge-warning badge-sm font-bold shadow animate-bounce">
              Mimo Cat
            </div>
          </div>
        </div>

        {/* Vintage Red Biplane with Smoke */}
        <div className="absolute bottom-24 left-8 sm:left-24 animate-float-reverse opacity-80 hidden md:block">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🛩️</span>
            <div className="flex gap-1.5 opacity-50">
              <span className="w-3 h-3 rounded-full bg-base-content/20 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-base-content/20"></span>
            </div>
          </div>
        </div>

        {/* Sparkling Magic Crystal Gem */}
        <div className="absolute bottom-32 right-12 sm:right-28 animate-float-slow opacity-90 hidden sm:block">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg flex items-center justify-center text-3xl rotate-12 cursor-pointer pointer-events-auto" onClick={triggerBigConfetti}>
            💎
          </div>
        </div>

        {/* Soft Background Cloud Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-warning/10 rounded-full blur-3xl -z-10"></div>
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Brand Division Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-200/80 border border-base-300 shadow-sm mb-6 animate-pulse-gentle">
          <span className="w-2.5 h-2.5 rounded-full bg-success animate-ping"></span>
          <span className="text-xs sm:text-sm font-bold text-base-content/80 tracking-wide uppercase">
            ✨ Welcoming Q4 2026 & 2027 Game Lineup
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-['Fredoka'] text-base-content leading-tight sm:leading-none">
          Joyful Casual Games. <br />
          <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
            Cozy Worlds. Play Anywhere.
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="mt-6 text-base sm:text-xl text-base-content/80 max-w-3xl mx-auto font-medium leading-relaxed font-['Nunito']">
          GameMimo is the casual & family-friendly gaming division of <strong>SGGame</strong>. 
          We craft relaxing farm simulators, satisfying 3D goods sorting, fairytale merge quests, and instant web arcade experiences built for pure joy.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#games"
            className="btn btn-lg btn-primary rounded-full px-8 font-bold shadow-xl shadow-primary/30 gap-2 hover:scale-105 transition-transform w-full sm:w-auto"
            onClick={triggerBigConfetti}
          >
            <Sparkles className="w-5 h-5" />
            <span>Explore All Games</span>
          </a>

          <button
            onClick={() => { triggerBigConfetti(); onOpenInstantPlay(); }}
            className="btn btn-lg btn-outline btn-secondary rounded-full px-8 font-bold gap-2 hover:scale-105 transition-transform w-full sm:w-auto"
          >
            <Gamepad2 className="w-5 h-5" />
            <span>Play Instant in Browser</span>
          </button>
        </div>

        {/* Live Studio Stats Bar */}
        <div className="mt-14 pt-8 border-t border-base-content/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
          
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-base-100/60 border border-base-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-950 text-pink-500 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-xl sm:text-2xl font-['Fredoka'] text-base-content">10M+</div>
              <div className="text-xs text-base-content/70 font-semibold">Global Players</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-base-100/60 border border-base-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-500 flex items-center justify-center shrink-0">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-xl sm:text-2xl font-['Fredoka'] text-base-content">12+</div>
              <div className="text-xs text-base-content/70 font-semibold">Joyful Titles</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-base-100/60 border border-base-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-500 flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-xl sm:text-2xl font-['Fredoka'] text-base-content">4.8 ★</div>
              <div className="text-xs text-base-content/70 font-semibold">Store Rating</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-base-100/60 border border-base-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-500 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-xl sm:text-2xl font-['Fredoka'] text-base-content">100%</div>
              <div className="text-xs text-base-content/70 font-semibold">Family Safe (COPPA)</div>
            </div>
          </div>

        </div>

      </div>

      {/* Down Arrow Indicator */}
      <div className="flex justify-center mt-10">
        <a href="#games" className="btn btn-circle btn-sm btn-ghost animate-bounce text-base-content/60">
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>

    </section>
  );
};
