import React from 'react';
import { Sparkles, Gamepad2, ArrowRight, Star, Trophy, Users, ShieldCheck, Play, ExternalLink } from 'lucide-react';
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
  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF5E7E', '#FFD166', '#06D6A0', '#4FACFE', '#FFAA00']
    });
  };

  // Highlights strictly for 2025 and 2026 releases
  const featuredHighlights = GAMES_CATALOG.filter(g => g.featured && (g.year === 2025 || g.year === 2026));

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. PROFESSIONAL PARALLAX HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-18 lg:pb-36 bg-gradient-to-b from-base-100 via-base-200/40 to-base-100">
        
        {/* Background Widescreen Scenery Glow */}
        <div className="absolute inset-0 opacity-15 dark:opacity-10 pointer-events-none overflow-hidden">
          <img
            src="/images/gamemimo_hero_banner.png"
            alt="Fairytale Scenery"
            className="w-full h-full object-cover scale-105 filter blur-xs"
          />
        </div>

        {/* Floating Parallax Character & Asset Cutouts */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden max-w-7xl mx-auto">
          
          {/* Baby Dragon (Top Left) */}
          <div className="absolute top-10 left-4 sm:left-12 animate-float-slow opacity-95">
            <div
              className="w-24 h-24 sm:w-36 sm:h-36 rounded-3xl p-1 shadow-2xl cursor-pointer pointer-events-auto hover:scale-110 active:scale-95 transition-transform"
              onClick={triggerConfetti}
              title="Baby Draco — Click me!"
            >
              <img
                src="/images/character_baby_dragon.png"
                alt="Baby Dragon"
                className="w-full h-full object-contain filter drop-shadow-xl"
              />
            </div>
          </div>

          {/* Mimo Fluffy Cat (Top Right) */}
          <div className="absolute top-16 right-4 sm:right-14 animate-float-reverse opacity-95">
            <div
              className="w-24 h-24 sm:w-36 sm:h-36 rounded-3xl p-1 shadow-2xl cursor-pointer pointer-events-auto hover:scale-110 active:scale-95 transition-transform"
              onClick={triggerConfetti}
              title="Mimo Cat — Click me!"
            >
              <img
                src="/images/character_mimo_cat.png"
                alt="Mimo Cat"
                className="w-full h-full object-contain filter drop-shadow-xl"
              />
            </div>
          </div>

          {/* Toy Airplane (Bottom Left) */}
          <div className="absolute bottom-16 left-6 sm:left-20 animate-float-reverse opacity-90 hidden md:block">
            <div
              className="w-28 h-28 cursor-pointer pointer-events-auto hover:scale-110 transition-transform"
              onClick={triggerConfetti}
              title="Happy Airplane"
            >
              <img
                src="/images/item_airplane.png"
                alt="Toy Airplane"
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </div>
          </div>

          {/* Magic Crystal Gem (Bottom Right) */}
          <div className="absolute bottom-20 right-8 sm:right-24 animate-float-slow opacity-95 hidden sm:block">
            <div
              className="w-24 h-24 cursor-pointer pointer-events-auto hover:scale-110 transition-transform"
              onClick={triggerConfetti}
              title="Magic Crystal Gem"
            >
              <img
                src="/images/item_magic_gem.png"
                alt="Magic Gem"
                className="w-full h-full object-contain filter drop-shadow-xl"
              />
            </div>
          </div>

        </div>

        {/* Central Hero Text Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Brand Division Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-100/90 border border-base-300 shadow-sm mb-6 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-success animate-ping"></span>
            <span className="text-xs sm:text-sm font-extrabold text-base-content/80 uppercase tracking-wider font-['Nunito']">
              ✨ Casual &bull; Cozy &bull; Family Friendly Gaming
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-['Fredoka'] text-base-content leading-tight">
            Joyful Casual Games. <br />
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Cozy Worlds. Play Anywhere.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-base-content/80 max-w-2xl mx-auto font-medium leading-relaxed font-['Nunito']">
            GameMimo is the casual game studio of <strong>SGGame</strong>. We design delightful 2.5D farming simulators, satisfying 3D goods sorting, and instant browser arcade games crafted for pure player joy.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('games')}
              className="btn btn-lg btn-primary rounded-full px-8 font-bold shadow-xl shadow-primary/30 gap-2 hover:scale-105 transition-transform w-full sm:w-auto"
            >
              <Sparkles className="w-5 h-5" />
              <span>Explore 2025–2026 Games</span>
            </button>

            <button
              onClick={() => { triggerConfetti(); onOpenInstantPlay(); }}
              className="btn btn-lg btn-outline btn-secondary rounded-full px-8 font-bold gap-2 hover:scale-105 transition-transform w-full sm:w-auto"
            >
              <Gamepad2 className="w-5 h-5" />
              <span>Play Instant Web Demo</span>
            </button>
          </div>

          {/* Studio Metrics */}
          <div className="mt-14 pt-8 border-t border-base-content/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
            <div className="p-3 rounded-2xl bg-base-100/70 border border-base-200 shadow-sm flex items-center gap-3">
              <Users className="w-6 h-6 text-pink-500 shrink-0" />
              <div>
                <div className="font-extrabold text-xl font-['Fredoka']">10M+</div>
                <div className="text-xs text-base-content/70 font-semibold">Global Players</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-base-100/70 border border-base-200 shadow-sm flex items-center gap-3">
              <Gamepad2 className="w-6 h-6 text-orange-500 shrink-0" />
              <div>
                <div className="font-extrabold text-xl font-['Fredoka']">12+</div>
                <div className="text-xs text-base-content/70 font-semibold">Joyful Titles</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-base-100/70 border border-base-200 shadow-sm flex items-center gap-3">
              <Trophy className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <div className="font-extrabold text-xl font-['Fredoka']">4.8 ★</div>
                <div className="text-xs text-base-content/70 font-semibold">Store Rating</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-base-100/70 border border-base-200 shadow-sm flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
              <div>
                <div className="font-extrabold text-xl font-['Fredoka']">100%</div>
                <div className="text-xs text-base-content/70 font-semibold">COPPA Safe</div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 2. FEATURED HIGHLIGHT GAMES (2025 - 2026) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Fredoka'] text-base-content tracking-tight">
              Featured 2025–2026 Releases
            </h2>
            <p className="text-sm sm:text-base text-base-content/70 font-['Nunito'] mt-1">
              Hand-crafted casual hits launching this year across iOS, Android, and Web browsers.
            </p>
          </div>

          <button
            onClick={() => onNavigate('games')}
            className="btn btn-sm btn-ghost text-primary font-bold gap-1 mt-4 md:mt-0 hover:translate-x-1 transition-transform"
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
              className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 rounded-3xl overflow-hidden group flex flex-col justify-between"
            >
              {/* Mock Gameplay Screenshot Banner */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-base-200">
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
                  <h3 className="text-2xl font-extrabold font-['Fredoka'] drop-shadow-md">
                    {game.title}
                  </h3>
                </div>
              </div>

              {/* Card Details & Actions */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-base-content/80 font-['Nunito'] leading-relaxed">
                  {game.description}
                </p>

                <div className="p-3 rounded-2xl bg-base-200/60 border border-base-300 text-xs font-semibold text-primary">
                  💡 <strong>Studio USP:</strong> {game.usp}
                </div>

                <div className="pt-2 border-t border-base-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{game.rating}</span>
                    <span className="text-base-content/50 font-normal">({game.players})</span>
                  </div>

                  <div className="flex gap-2">
                    {game.hasPlayableWeb ? (
                      <button
                        onClick={() => onSelectGame(game)}
                        className="btn btn-sm btn-primary rounded-full px-4 font-bold gap-1 shadow"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Play Web Demo</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => onSelectGame(game)}
                        className="btn btn-sm btn-outline rounded-full px-4 font-bold gap-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. STUDIO PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-pink-500/10 via-orange-400/10 to-amber-300/10 border border-primary/20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Fredoka'] text-base-content">
              Why Players Love GameMimo
            </h2>
            <p className="text-sm text-base-content/70 font-['Nunito'] mt-2">
              Every detail is tuned for heartwarming moments, relaxing gameplay, and pure satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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
              From <em>Magic Merge: Dragon Sanctuary</em> to <em>Kawaii Mart Supermarket</em> and <em>Melody Paws</em>. Explore our complete roadmap.
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
