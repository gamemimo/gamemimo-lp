import React, { useState, useEffect } from 'react';
import { Sparkles, Gamepad2, ArrowRight, Star, Trophy, Users, ShieldCheck, Smartphone, Download } from 'lucide-react';
import { GAMES_CATALOG, type GameItem } from '../data/gamesData';
import confetti from 'canvas-confetti';

interface HomePageProps {
  onNavigate: (page: 'games' | 'events' | 'about' | 'contact') => void;
  onSelectGame: (game: GameItem) => void;
  onOpenInstantPlay: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectGame,
  onOpenInstantPlay
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isTeenDracoFlying, setIsTeenDracoFlying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerDracoFlight = () => {
    setIsTeenDracoFlying(prev => !prev);
    confetti({
      particleCount: 90,
      spread: 100,
      origin: { y: 0.5, x: 0.3 },
      colors: ['#00F5D4', '#7B2CBF', '#FF007F', '#FFBE0B', '#3A86FF']
    });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FF5E7E', '#FFD166', '#06D6A0', '#4FACFE', '#FFAA00']
    });
  };

  // Highlights strictly for 2025 and 2026 releases
  const featuredHighlights = GAMES_CATALOG.filter(g => g.featured && (g.year === 2025 || g.year === 2026));

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      
      {/* 1. CINEMATIC LARGE-SCALE 3D SCROLL PARALLAX HERO (1080P, 1440P & 4K READY) */}
      <section className="relative overflow-hidden pt-16 pb-28 lg:pt-24 lg:pb-44 bg-gradient-to-b from-base-100 via-base-200/50 to-base-100 min-h-[90vh] xl:min-h-[100vh] flex items-center justify-center">
        
        {/* Layer 0: Distant Sky Castle & Floating Islands (0.12x slow drift) */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${scrollY * 0.12}px) scale(1.08)` }}
        >
          <img
            src="/images/gamemimo_hero_banner.png"
            alt="Fairytale Castle & Sky Scenery"
            className="w-full h-full object-cover opacity-25 dark:opacity-15 filter blur-[1px]"
          />
        </div>

        {/* Layer 0.5: Dynamic Flying Teen Draco (Flies behind hero text across the screen!) */}
        {isTeenDracoFlying && (
          <div
            className="absolute z-10 pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: `${15 + Math.sin(scrollY * 0.005) * 40}%`,
              top: `${12 + (scrollY * 0.35) % 65}%`,
              transform: `translate(-50%, -50%) scale(${1.2 + Math.cos(scrollY * 0.006) * 0.3}) rotate(${Math.sin(scrollY * 0.008) * 20}deg)`
            }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[460px] lg:h-[460px] filter drop-shadow-2xl">
              <img
                src="/images/character_teen_draco_flying.png"
                alt="Flying Teen Draco"
                className="w-full h-full object-contain animate-float-slow"
              />
              <div className="absolute top-4 right-8 badge badge-accent badge-md font-extrabold shadow-lg animate-pulse">
                ✨ Soaring Draco!
              </div>
            </div>
          </div>
        )}

        {/* Layer 1: Foreground Big Toy Biplane (Dynamic zoom, fast flyby & depth blur) */}
        <div
          className="absolute top-12 right-[-5%] sm:right-0 lg:right-[5%] xl:right-[8%] pointer-events-none z-30 transition-transform duration-100 ease-out"
          style={{
            transform: `translateY(${-scrollY * 0.45}px) translateX(${-scrollY * 0.25}px) scale(${1 + scrollY * 0.0006})`,
            filter: scrollY > 150 ? 'blur(2px)' : 'none'
          }}
        >
          <div
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] xl:w-[540px] xl:h-[540px] cursor-pointer pointer-events-auto hover:scale-110 active:scale-95 transition-transform"
            onClick={triggerConfetti}
            title="Happy Red Biplane — Click me!"
          >
            <img
              src="/images/item_airplane.png"
              alt="Toy Airplane"
              className="w-full h-full object-contain filter drop-shadow-2xl animate-float-slow"
            />
          </div>
        </div>

        {/* Layer 2: Big Fluffy Cloud Foreground Overlay (Sweeps bottom-left) */}
        <div
          className="absolute -bottom-10 -left-20 sm:left-[-5%] lg:left-[2%] pointer-events-none z-30 opacity-70 transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${-scrollY * 0.35}px) translateX(${scrollY * 0.15}px) scale(1.1)` }}
        >
          <div className="w-80 h-44 sm:w-[500px] sm:h-[260px] lg:w-[700px] lg:h-[350px]">
            <img
              src="/images/item_cloud_soft.png"
              alt="Floating Cloud"
              className="w-full h-full object-contain filter blur-md"
            />
          </div>
        </div>

        {/* Layer 3: Foreground Left — Baby Draco (Click toggles Soaring Teen Draco flight!) */}
        <div
          className="absolute top-10 left-[-2%] sm:left-[2%] lg:left-[6%] xl:left-[10%] z-20 transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <div
            className="w-60 h-60 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px] p-2 cursor-pointer pointer-events-auto hover:scale-108 active:scale-95 transition-transform animate-float-slow group"
            onClick={triggerDracoFlight}
            title="Click to unleash Flying Teen Draco!"
          >
            <img
              src={isTeenDracoFlying ? "/images/character_teen_draco_flying.png" : "/images/character_baby_dragon.png"}
              alt="Draco"
              className="w-full h-full object-contain filter drop-shadow-2xl transition-all duration-500"
            />
            <div className="absolute bottom-6 right-6 badge badge-primary badge-sm sm:badge-md lg:badge-lg font-extrabold shadow-xl animate-bounce">
              {isTeenDracoFlying ? "🐲 Soaring! (Click to Rest)" : "🐲 Baby Draco (Click to Fly!)"}
            </div>
          </div>
        </div>

        {/* Layer 4: Foreground Right — Big Mimo Cat with Aviator Scarf */}
        <div
          className="absolute bottom-10 right-[-2%] sm:right-[3%] lg:right-[7%] xl:right-[12%] z-20 transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${-scrollY * 0.22}px)` }}
        >
          <div
            className="w-60 h-60 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] xl:w-[460px] xl:h-[460px] p-2 cursor-pointer pointer-events-auto hover:scale-108 active:scale-95 transition-transform animate-float-reverse"
            onClick={triggerConfetti}
            title="Mimo Cat — Click to wave!"
          >
            <img
              src="/images/character_mimo_cat.png"
              alt="Mimo Cat"
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
            <div className="absolute top-6 left-6 badge badge-warning badge-sm sm:badge-md lg:badge-lg font-extrabold shadow-xl animate-bounce">
              Mimo Cat 🐱
            </div>
          </div>
        </div>

        {/* Layer 5: Floating Magic Crystal Diamonds & Ruby Gems */}
        {/* Gem 1: Cyan Diamond Left */}
        <div
          className="absolute bottom-28 left-[10%] sm:left-[16%] lg:left-[20%] z-20 hidden sm:block transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${-scrollY * 0.38}px) rotate(${scrollY * 0.08}deg)` }}
        >
          <div
            className="w-24 h-24 sm:w-36 sm:h-36 lg:w-[190px] lg:h-[190px] cursor-pointer pointer-events-auto hover:scale-115 transition-transform animate-float-slow"
            onClick={triggerConfetti}
            title="Luminous Cyan Crystal"
          >
            <img
              src="/images/item_magic_gem.png"
              alt="Cyan Gem"
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Gem 2: Fiery Ruby Gem Right */}
        <div
          className="absolute top-24 right-[16%] sm:right-[22%] lg:right-[26%] z-15 hidden md:block transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.28}px) rotate(${-scrollY * 0.06}deg)` }}
        >
          <div
            className="w-20 h-20 sm:w-32 sm:h-32 lg:w-[170px] lg:h-[170px] cursor-pointer pointer-events-auto hover:scale-115 transition-transform animate-float-reverse"
            onClick={triggerConfetti}
            title="Glowing Fiery Ruby Gem"
          >
            <img
              src="/images/item_ruby_gem.png"
              alt="Ruby Gem"
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Central Main Hero Text Content */}
        <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Brand Division Pill */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-base-100/95 border border-base-300 shadow-lg mb-8 backdrop-blur-md">
            <span className="w-3 h-3 rounded-full bg-success animate-ping"></span>
            <span className="text-xs sm:text-sm lg:text-base font-extrabold text-base-content/90 uppercase tracking-wider font-['Nunito']">
              ✨ Casual &bull; Cozy &bull; Family Friendly Gaming Studio
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight font-['Fredoka'] text-base-content leading-tight">
            Joyful Casual Games. <br />
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Cozy Worlds. Play Anywhere.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 sm:mt-8 text-base sm:text-xl lg:text-2xl text-base-content/85 max-w-3xl mx-auto font-medium leading-relaxed font-['Nunito']">
            GameMimo is the casual game studio of <strong>SGGame</strong>. We design delightful 2.5D farming simulators, satisfying 3D goods sorting, and instant browser arcade games crafted for pure player joy.
          </p>

          {/* Main CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('games')}
              className="btn btn-lg btn-primary rounded-full px-8 sm:px-10 font-bold shadow-2xl shadow-primary/35 gap-2 hover:scale-105 transition-transform w-full sm:w-auto text-base sm:text-lg"
            >
              <Sparkles className="w-6 h-6" />
              <span>Explore 2025–2026 Highlights</span>
            </button>

            <button
              onClick={() => { triggerConfetti(); onOpenInstantPlay(); }}
              className="btn btn-lg btn-outline btn-secondary rounded-full px-8 sm:px-10 font-bold gap-2 hover:scale-105 transition-transform w-full sm:w-auto text-base sm:text-lg bg-base-100/70"
            >
              <Gamepad2 className="w-6 h-6" />
              <span>Play Instant in Browser</span>
            </button>
          </div>

          {/* Mobile Store Development Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm sm:btn-md btn-neutral bg-black text-white hover:bg-neutral-800 rounded-full px-5 font-semibold text-xs sm:text-sm gap-2 shadow-lg"
            >
              <Smartphone className="w-4 h-4" />
              <span>Apple App Store (TestFlight)</span>
            </a>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm sm:btn-md btn-outline rounded-full px-5 font-semibold text-xs sm:text-sm gap-2 bg-base-100/90 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Google Play Store (Early Access)</span>
            </a>
          </div>

          {/* Studio Metrics */}
          <div className="mt-14 pt-8 border-t border-base-content/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            <div className="p-4 rounded-3xl bg-base-100/80 border border-base-200 shadow-md flex items-center gap-3">
              <Users className="w-7 h-7 text-pink-500 shrink-0" />
              <div>
                <div className="font-extrabold text-2xl font-['Fredoka']">10M+</div>
                <div className="text-xs text-base-content/70 font-semibold">Global Players</div>
              </div>
            </div>

            <div className="p-4 rounded-3xl bg-base-100/80 border border-base-200 shadow-md flex items-center gap-3">
              <Gamepad2 className="w-7 h-7 text-orange-500 shrink-0" />
              <div>
                <div className="font-extrabold text-2xl font-['Fredoka']">12+</div>
                <div className="text-xs text-base-content/70 font-semibold">Joyful Titles</div>
              </div>
            </div>

            <div className="p-4 rounded-3xl bg-base-100/80 border border-base-200 shadow-md flex items-center gap-3">
              <Trophy className="w-7 h-7 text-amber-500 shrink-0" />
              <div>
                <div className="font-extrabold text-2xl font-['Fredoka']">4.8 ★</div>
                <div className="text-xs text-base-content/70 font-semibold">Store Rating</div>
              </div>
            </div>

            <div className="p-4 rounded-3xl bg-base-100/80 border border-base-200 shadow-md flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-emerald-500 shrink-0" />
              <div>
                <div className="font-extrabold text-2xl font-['Fredoka']">100%</div>
                <div className="text-xs text-base-content/70 font-semibold">COPPA Safe</div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 2. FEATURED HIGHLIGHT GAMES (2025 - 2026) — CLICK TO DETAIL VIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Fredoka'] text-base-content tracking-tight">
              Featured 2025–2026 Releases
            </h2>
            <p className="text-sm sm:text-base text-base-content/70 font-['Nunito'] mt-1">
              Click any game card to explore character designs, lively in-game activities, and store links.
            </p>
          </div>

          <button
            onClick={() => onNavigate('games')}
            className="btn btn-sm sm:btn-md btn-ghost text-primary font-bold gap-1 mt-4 md:mt-0 hover:translate-x-1 transition-transform"
          >
            <span>View Full Portfolio (12 Games)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2025-2026 Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredHighlights.map(game => (
            <div
              key={game.id}
              onClick={() => onSelectGame(game)}
              className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 rounded-3xl overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              {/* Mock Gameplay Screenshot Banner */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-base-200">
                <img
                  src={game.coverImage}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`badge ${game.badgeColor} badge-md font-extrabold shadow`}>
                    {game.badge}
                  </span>
                  <span className="badge badge-neutral badge-md font-bold bg-black/60 text-white backdrop-blur">
                    {game.releaseQuarter}
                  </span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-amber-300 drop-shadow">
                    {game.genre}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-['Fredoka'] drop-shadow-md">
                    {game.title}
                  </h3>
                </div>
              </div>

              {/* Card Details & Actions */}
              <div className="p-6 space-y-4">
                <p className="text-sm sm:text-base text-base-content/80 font-['Nunito'] leading-relaxed line-clamp-2">
                  {game.description}
                </p>

                <div className="p-3.5 rounded-2xl bg-base-200/60 border border-base-300 text-xs sm:text-sm font-semibold text-primary">
                  💡 <strong>Studio USP:</strong> {game.usp}
                </div>

                <div className="pt-3 border-t border-base-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-500">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{game.rating}</span>
                    <span className="text-base-content/50 font-normal">({game.players})</span>
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); onSelectGame(game); }}
                    className="btn btn-sm sm:btn-md btn-primary rounded-full px-5 font-bold gap-1.5 shadow-md"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>View Game & Characters</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. STUDIO PILLARS & MASTER PITCH ARTWORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Why Players Love GameMimo — Master Pitch Artwork */}
        <div className="rounded-3xl bg-gradient-to-br from-pink-500/10 via-orange-400/10 to-amber-300/10 border border-primary/20 overflow-hidden p-8 sm:p-12 shadow-xl">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="badge badge-primary badge-sm font-extrabold uppercase mb-2">
              The GameMimo Universe
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-['Fredoka'] text-base-content">
              Why Players Love GameMimo
            </h2>
            <p className="text-sm sm:text-base text-base-content/70 font-['Nunito'] mt-2">
              Combining cozy storytelling, tactile physics ASMR, Disney-inspired digital art, and cross-platform instant play into one joyful ecosystem.
            </p>
          </div>

          {/* Master Hero Pitch Visual */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-base-100 group">
            <img
              src="/images/gamemimo_universe_pitch.png"
              alt="GameMimo Universe Master Pitch Art"
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-['Fredoka']">
                  One Unified Universe of Joyful Worlds
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-['Nunito']">
                  Draco the Dragon &bull; Mimo the Kitten &bull; Barnaby the Farmer &bull; Mie the Stylist &bull; Kael & Nyra &bull; Chef Leo
                </p>
              </div>

              <button
                onClick={() => onNavigate('games')}
                className="btn btn-sm sm:btn-md btn-primary rounded-full px-6 font-bold shrink-0 shadow"
              >
                Explore All Universes
              </button>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-10">
            <div className="p-5 rounded-2xl bg-base-100/90 shadow-sm border border-base-200">
              <span className="text-3xl mb-2 block">🌸</span>
              <h4 className="font-bold text-base font-['Fredoka'] text-base-content">Cozy & Relaxing</h4>
              <p className="text-xs text-base-content/70 mt-1 font-['Nunito']">Offline friendly, gentle progression, zero pressure.</p>
            </div>

            <div className="p-5 rounded-2xl bg-base-100/90 shadow-sm border border-base-200">
              <span className="text-3xl mb-2 block">⚡</span>
              <h4 className="font-bold text-base font-['Fredoka'] text-base-content">Instant Web Play</h4>
              <p className="text-xs text-base-content/70 mt-1 font-['Nunito']">Play right in your browser with zero installs.</p>
            </div>

            <div className="p-5 rounded-2xl bg-base-100/90 shadow-sm border border-base-200">
              <span className="text-3xl mb-2 block">✨</span>
              <h4 className="font-bold text-base font-['Fredoka'] text-base-content">Satisfying ASMR</h4>
              <p className="text-xs text-base-content/70 mt-1 font-['Nunito']">Crisp haptics, tactile pops, and cheerful audio.</p>
            </div>

            <div className="p-5 rounded-2xl bg-base-100/90 shadow-sm border border-base-200">
              <span className="text-3xl mb-2 block">🛡️</span>
              <h4 className="font-bold text-base font-['Fredoka'] text-base-content">100% Family Safe</h4>
              <p className="text-xs text-base-content/70 mt-1 font-['Nunito']">Strict COPPA privacy and fair micro-IAPs.</p>
            </div>
          </div>

        </div>

      </section>

      {/* 4. 2027 UPCOMING TEASER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-base-200/70 border border-base-300 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="badge badge-primary badge-sm font-extrabold uppercase">
              Looking Ahead to 2027
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Fredoka'] text-base-content">
              Discover Our 2027 Dragon & Tycoon Pipeline
            </h3>
            <p className="text-sm text-base-content/70 font-['Nunito'] max-w-xl">
              From <em>Magic Merge: Dragon Sanctuary</em> to <em>Kawaii Mart Supermarket</em>, <em>Cooking Hero</em>, and <em>Happy City</em>. Explore our complete roadmap.
            </p>
          </div>

          <button
            onClick={() => onNavigate('games')}
            className="btn btn-primary rounded-full px-6 font-bold gap-2 shrink-0 shadow-md"
          >
            <span>View 2027 Lineup</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
