import React, { useState } from 'react';
import type { GameItem } from '../data/gamesData';
import { Sparkles, Gamepad2, ArrowLeft, Star, Smartphone, Download, CheckCircle2, Trophy, Heart } from 'lucide-react';
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
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(0);

  const triggerCheer = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF5E7E', '#FFD166', '#06D6A0', '#4FACFE', '#FFAA00']
    });
  };

  const activeChar = game.characters && game.characters.length > 0
    ? game.characters[selectedCharacterIndex] || game.characters[0]
    : null;

  return (
    <div className="space-y-16 pb-24">
      
      {/* 1. FULLSCREEN IMMERSIVE HERO BANNER */}
      <section className="relative overflow-hidden bg-base-900 text-white min-h-[500px] lg:min-h-[580px] flex items-end">
        {/* Background Fullscreen Art */}
        <div className="absolute inset-0">
          <img
            src={game.coverImage}
            alt={game.title}
            className="w-full h-full object-cover opacity-60 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-black/40 to-black/70"></div>
        </div>

        {/* Top Back Navigation Bar */}
        <div className="absolute top-6 left-4 sm:left-8 z-30">
          <button
            onClick={onBack}
            className="btn btn-sm sm:btn-md btn-neutral rounded-full gap-2 bg-black/60 hover:bg-black/80 text-white backdrop-blur border border-white/20 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Games</span>
          </button>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-6">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className={`badge ${game.badgeColor} badge-lg font-extrabold shadow-lg`}>
              {game.badge}
            </span>
            <span className="badge badge-neutral badge-lg font-bold bg-black/70 text-white backdrop-blur border border-white/20">
              {game.releaseQuarter}
            </span>
            <span className="badge badge-accent badge-lg font-bold">
              {game.genre}
            </span>
          </div>

          <div className="space-y-3 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-['Fredoka'] text-white drop-shadow-lg leading-tight">
              {game.title}
            </h1>
            <p className="text-base sm:text-xl text-slate-200 font-['Nunito'] font-medium leading-relaxed max-w-3xl drop-shadow">
              {game.description}
            </p>
          </div>

          {/* Action CTAs: PLAY IN BROWSER + STORE DOWNLOADS */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {game.hasPlayableWeb ? (
              <button
                onClick={() => { triggerCheer(); onOpenInstantPlay(game); }}
                className="btn btn-lg btn-primary rounded-full px-8 font-extrabold shadow-2xl shadow-primary/40 gap-2 hover:scale-105 transition-transform"
              >
                <Gamepad2 className="w-6 h-6" />
                <span>Play in Browser Now (Instant)</span>
              </button>
            ) : (
              <button
                disabled
                className="btn btn-lg btn-disabled rounded-full px-8 font-bold text-white/60 bg-white/10"
              >
                <span>Mobile Release Only</span>
              </button>
            )}

            {game.appStoreUrl && (
              <a
                href={game.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-neutral bg-black/80 text-white hover:bg-black rounded-full px-6 font-semibold gap-2 border border-white/20 backdrop-blur shadow-lg"
              >
                <Smartphone className="w-5 h-5" />
                <span>Apple App Store</span>
              </a>
            )}

            {game.googlePlayUrl && (
              <a
                href={game.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-outline rounded-full px-6 font-semibold gap-2 text-white border-white/40 hover:bg-white/10 backdrop-blur"
              >
                <Download className="w-5 h-5" />
                <span>Google Play Store</span>
              </a>
            )}
          </div>

          {/* Quick Stats Bar */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-200">
            <div className="flex items-center gap-1.5 text-amber-300">
              <Star className="w-4 h-4 fill-amber-300" />
              <span className="font-extrabold text-white">{game.rating} / 5.0</span>
              <span className="text-slate-300">({game.players})</span>
            </div>
            <div>&bull;</div>
            <div>Engine: <span className="text-white font-bold">{game.engine}</span></div>
            <div>&bull;</div>
            <div>Platforms: <span className="text-white font-bold">{game.platforms.join(', ')}</span></div>
          </div>

        </div>

      </section>

      {/* 2. CHARACTER DESIGN HERO SPOTLIGHT (LARGE PROMINENT ARTWORK) */}
      {game.characters && game.characters.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Character Design Showcase</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-['Fredoka'] text-base-content">
                Meet the Heroes & Companions
              </h2>
              <p className="text-sm sm:text-base text-base-content/70 font-['Nunito'] mt-1">
                Original hand-crafted Disney-Pixar stylized protagonists, companions, and guides.
              </p>
            </div>

            {/* Character Selector Tabs */}
            {game.characters.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {game.characters.map((char, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setSelectedCharacterIndex(idx); triggerCheer(); }}
                    className={`btn btn-sm rounded-full font-bold gap-2 ${
                      selectedCharacterIndex === idx ? 'btn-primary shadow-md' : 'btn-ghost bg-base-200'
                    }`}
                  >
                    <span>{char.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Large Hero Character Stage */}
          {activeChar && (
            <div className="rounded-3xl bg-gradient-to-br from-base-200/90 via-base-100 to-base-200/90 border border-base-300 shadow-xl overflow-hidden p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* BIG Character Artwork Stage (Left 5 Columns) */}
                <div className="lg:col-span-5 flex justify-center items-center relative">
                  {/* Glowing Aura Ring */}
                  <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-primary/15 filter blur-3xl -z-10 animate-pulse"></div>
                  
                  <div className="relative h-72 sm:h-96 lg:h-[440px] w-full flex items-center justify-center">
                    <img
                      src={activeChar.portrait}
                      alt={activeChar.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Character Lore & Details (Right 7 Columns) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{activeChar.role}</span>
                    </div>
                    <h3 className="text-3xl sm:text-5xl font-extrabold font-['Fredoka'] text-base-content">
                      {activeChar.name}
                    </h3>
                  </div>

                  {/* Character Quote Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-base-100 border border-base-300 shadow-sm relative">
                    <span className="text-3xl text-primary/30 absolute top-2 left-3 font-serif">“</span>
                    <p className="text-base sm:text-lg font-bold text-base-content/90 font-['Nunito'] italic pl-6">
                      {activeChar.activityQuote}
                    </p>
                  </div>

                  {/* Character Traits & Signature Ability */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-base-100 border border-base-200">
                      <div className="flex items-center gap-2 text-xs font-extrabold text-secondary uppercase tracking-wider mb-1">
                        <Heart className="w-4 h-4" />
                        <span>Personality & Identity</span>
                      </div>
                      <p className="text-sm text-base-content/80 font-['Nunito']">
                        {activeChar.personality}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-base-100 border border-base-200">
                      <div className="flex items-center gap-2 text-xs font-extrabold text-accent uppercase tracking-wider mb-1">
                        <Sparkles className="w-4 h-4" />
                        <span>Signature In-Game Ability</span>
                      </div>
                      <p className="text-sm font-bold text-primary font-['Nunito']">
                        {activeChar.signatureAbility}
                      </p>
                    </div>
                  </div>

                  {/* Multi-Character Navigation Pills */}
                  {game.characters.length > 1 && (
                    <div className="pt-2 border-t border-base-200 flex items-center gap-3">
                      <span className="text-xs font-bold text-base-content/60">Switch Character:</span>
                      <div className="flex gap-2">
                        {game.characters.map((c, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedCharacterIndex(i)}
                            className={`btn btn-xs rounded-full font-bold ${
                              selectedCharacterIndex === i ? 'btn-primary' : 'btn-ghost bg-base-200'
                            }`}
                          >
                            {c.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>
          )}

        </section>
      )}

      {/* 3. LIVELY IN-GAME ACTIVITY CAPTURES */}
      {game.activities && game.activities.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-wider mb-2">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Core Gameplay Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Fredoka'] text-base-content">
              In-Game Activities & Adventures
            </h2>
            <p className="text-sm sm:text-base text-base-content/70 font-['Nunito'] mt-1">
              Explore what characters do inside the game world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {game.activities.map((act, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-base-200">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h4 className="text-xl font-bold font-['Fredoka'] drop-shadow">
                      {act.title}
                    </h4>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm sm:text-base text-base-content/80 font-['Nunito'] leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* 4. GAME DESIGN USP & KEY SPECIFICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-base-200/70 border border-base-300 space-y-6">
          <h3 className="text-2xl font-extrabold font-['Fredoka'] text-base-content">
            Game Features & Architecture Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-base-100 border border-base-200 space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-bold text-primary">
                <CheckCircle2 className="w-4 h-4" />
                <span>Unique Selling Point</span>
              </div>
              <p className="text-xs sm:text-sm text-base-content/75 font-['Nunito']">
                {game.usp}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-base-100 border border-base-200 space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-bold text-secondary">
                <CheckCircle2 className="w-4 h-4" />
                <span>Audio & Visual Style</span>
              </div>
              <p className="text-xs sm:text-sm text-base-content/75 font-['Nunito']">
                Disney-Pixar semi-3D glossy hand-painted digital art with crisp ASMR haptic audio feedback.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-base-100 border border-base-200 space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-bold text-accent">
                <CheckCircle2 className="w-4 h-4" />
                <span>Fair Monetization & Safety</span>
              </div>
              <p className="text-xs sm:text-sm text-base-content/75 font-['Nunito']">
                100% COPPA family-safe, optional rewarded ads with zero paywalls.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-2">
            {game.tags.map((tag, idx) => (
              <span key={idx} className="badge badge-primary badge-outline badge-md font-bold">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
