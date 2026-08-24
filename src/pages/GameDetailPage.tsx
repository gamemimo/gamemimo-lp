import React from 'react';
import type { GameItem } from '../data/gamesData';
import { ArrowLeft, Play, Star, Smartphone, ShieldCheck, Sparkles, Trophy, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GameDetailPageProps {
  game: GameItem;
  onBack: () => void;
  onOpenInstantPlay: (game: GameItem) => void;
}

export const GameDetailPage: React.FC<GameDetailPageProps> = ({
  game,
  onBack,
  onOpenInstantPlay
}) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#FF5E7E', '#FFD166', '#06D6A0', '#4FACFE']
    });
  };

  return (
    <div className="min-h-screen bg-base-100 pb-24">
      
      {/* 1. FULLSCREEN IMMERSIVE HERO BANNER */}
      <div className="relative h-[480px] sm:h-[580px] w-full overflow-hidden bg-base-300">
        <img
          src={game.coverImage}
          alt={game.title}
          className="w-full h-full object-cover filter blur-xs scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/60 to-black/40"></div>

        {/* Top Back Navigation Bar */}
        <div className="absolute top-6 left-4 sm:left-8 z-20">
          <button
            onClick={onBack}
            className="btn btn-sm sm:btn-md btn-circle bg-base-100/80 backdrop-blur-md shadow-lg border border-base-300 hover:scale-105"
            title="Back to games"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Title & Store Badges Overlay */}
        <div className="absolute bottom-8 left-4 sm:left-8 right-4 sm:right-8 max-w-7xl mx-auto z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`badge ${game.badgeColor} badge-md font-extrabold shadow`}>
                {game.badge}
              </span>
              <span className="badge badge-neutral badge-md font-bold bg-black/60 text-white backdrop-blur">
                {game.releaseQuarter}
              </span>
              <span className="badge badge-ghost badge-md font-bold bg-base-100/80">
                {game.engine}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Fredoka'] text-base-content tracking-tight drop-shadow-sm">
              {game.title}
            </h1>

            <p className="text-base sm:text-lg text-base-content/80 font-['Nunito'] max-w-2xl font-medium">
              {game.description}
            </p>
          </div>

          {/* Download & Play Actions */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {game.hasPlayableWeb && (
              <button
                onClick={() => { triggerConfetti(); onOpenInstantPlay(game); }}
                className="btn btn-primary rounded-full px-6 font-bold gap-2 shadow-xl shadow-primary/30 hover:scale-105 transition-transform"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Play in Browser</span>
              </button>
            )}

            {game.appStoreUrl && (
              <a
                href={game.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-neutral bg-black text-white hover:bg-neutral-800 rounded-full px-5 font-bold gap-2 shadow-md hover:scale-105 transition-transform"
              >
                <Smartphone className="w-4 h-4" />
                <span>Apple App Store</span>
              </a>
            )}

            {game.googlePlayUrl && (
              <a
                href={game.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-full px-5 font-bold gap-2 hover:scale-105 transition-transform bg-base-100/70"
              >
                <Download className="w-4 h-4" />
                <span>Google Play</span>
              </a>
            )}
          </div>

        </div>
      </div>

      {/* 2. GAME HIGHLIGHT STRIP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-3xl bg-base-200/60 border border-base-300">
          <div className="p-3">
            <div className="text-xs text-base-content/60 font-bold uppercase">Store Rating</div>
            <div className="text-xl font-extrabold text-amber-500 font-['Fredoka'] flex items-center gap-1 mt-0.5">
              <Star className="w-4 h-4 fill-current" /> {game.rating} / 5.0
            </div>
          </div>

          <div className="p-3">
            <div className="text-xs text-base-content/60 font-bold uppercase">Community Reach</div>
            <div className="text-xl font-extrabold text-success font-['Fredoka'] mt-0.5">
              {game.players}
            </div>
          </div>

          <div className="p-3">
            <div className="text-xs text-base-content/60 font-bold uppercase">Target Platforms</div>
            <div className="text-sm font-extrabold text-base-content mt-1 flex gap-1">
              {game.platforms.join(', ')}
            </div>
          </div>

          <div className="p-3">
            <div className="text-xs text-base-content/60 font-bold uppercase">Compliance</div>
            <div className="text-sm font-bold text-emerald-600 mt-1 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> 100% COPPA Safe
            </div>
          </div>
        </div>
      </div>

      {/* 3. CHARACTER ROSTER & DESIGN SPOTLIGHT */}
      {game.characters && game.characters.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/15 text-secondary font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Character Roster</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Fredoka'] text-base-content">
              Meet the Heroes & Companions
            </h2>
            <p className="text-sm text-base-content/70 font-['Nunito'] mt-1">
              Distinctive personality traits, signature abilities, and in-game dialogues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {game.characters.map((char, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row items-center sm:items-start gap-6 group"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-pink-500/20 to-amber-300/20 p-2 shrink-0 border border-primary/20 group-hover:scale-105 transition-transform">
                  <img
                    src={char.portrait}
                    alt={char.name}
                    className="w-full h-full object-contain filter drop-shadow"
                  />
                </div>

                <div className="space-y-2 text-center sm:text-left flex-1">
                  <div>
                    <h3 className="text-xl font-bold font-['Fredoka'] text-base-content">
                      {char.name}
                    </h3>
                    <div className="text-xs font-extrabold text-primary uppercase tracking-wide">
                      {char.role}
                    </div>
                  </div>

                  <p className="text-xs text-base-content/70 font-['Nunito'] leading-relaxed">
                    {char.personality}
                  </p>

                  <div className="p-2.5 rounded-xl bg-base-200/80 border border-base-300 text-xs font-semibold text-secondary">
                    ⚡ <strong>Signature Ability:</strong> {char.signatureAbility}
                  </div>

                  <div className="text-xs italic text-base-content/60 font-['Nunito'] pt-1">
                    "{char.activityQuote}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. IN-GAME ACTIVITIES & SCREENSHOT GALLERY */}
      {game.activities && game.activities.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5" />
              <span>In-Game Gameplay</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Fredoka'] text-base-content">
              Lively In-Game Activities & World Exploration
            </h2>
          </div>

          <div className="space-y-8">
            {game.activities.map((act, idx) => (
              <div
                key={idx}
                className="card bg-base-100 border border-base-200 shadow-xl rounded-3xl overflow-hidden"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-base-300">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-['Fredoka'] drop-shadow-md">
                      {act.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-200 font-['Nunito'] max-w-2xl mt-1 drop-shadow">
                      {act.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. TECH SPECS & USP BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-base-200/80 to-base-300/60 border border-base-300 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-2xl font-bold font-['Fredoka'] text-base-content">
              Engine & Technical Architecture
            </h3>
            <p className="text-sm text-base-content/80 font-['Nunito'] leading-relaxed">
              Built on <strong>{game.engine}</strong> with low-memory mobile footprint, 60 FPS silky smooth animations, and high-conversion tactile feedback.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {game.tags.map((t, i) => (
                <span key={i} className="badge badge-outline font-bold text-xs">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onBack}
              className="btn btn-outline rounded-full px-6 font-bold"
            >
              Back to Catalog
            </button>
            {game.hasPlayableWeb && (
              <button
                onClick={() => onOpenInstantPlay(game)}
                className="btn btn-primary rounded-full px-6 font-bold gap-2 shadow"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Launch Web Demo</span>
              </button>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
