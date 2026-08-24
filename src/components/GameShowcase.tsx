import React, { useState } from 'react';
import { GAMES_CATALOG, type GameItem } from '../data/gamesData';
import { Sparkles, Smartphone, Monitor, Star, ExternalLink, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ShowcaseProps {
  onSelectGame: (game: GameItem) => void;
}

export const GameShowcase: React.FC<ShowcaseProps> = ({ onSelectGame }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'q4-2026' | '2027' | 'holiday' | 'instant-web'>('all');

  const filterTabs = [
    { id: 'all', label: '🌟 All Games (12)', count: 12 },
    { id: 'q4-2026', label: '🍂 Q4 2026 Lineup', count: 4 },
    { id: 'holiday', label: '🎃 Holiday Specials', count: 2 },
    { id: '2027', label: '🚀 2027 Upcoming', count: 7 },
    { id: 'instant-web', label: '⚡ Playable in Browser', count: 6 },
  ];

  const filteredGames = GAMES_CATALOG.filter(game => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'instant-web') return game.hasPlayableWeb;
    return game.category === activeFilter;
  });

  const handleCardSparkle = () => {
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#FF5E7E', '#FFD166', '#06D6A0']
    });
  };

  return (
    <section id="games" className="py-16 sm:py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Fredoka'] text-base-content tracking-tight">
            Our Joyful Game Showcase
          </h2>
          <p className="mt-4 text-base sm:text-lg text-base-content/70 font-['Nunito']">
            From offline-friendly farming sanctuaries to TikTok viral 3D match ASMR puzzles and fast web arcade shooters.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveFilter(tab.id as any); handleCardSparkle(); }}
              className={`btn btn-sm sm:btn-md rounded-full px-5 font-bold transition-all ${
                activeFilter === tab.id
                  ? 'btn-primary shadow-lg shadow-primary/25 scale-105'
                  : 'btn-ghost bg-base-200/60 hover:bg-base-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map(game => (
            <div
              key={game.id}
              className="card bg-base-100 border border-base-200 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 rounded-3xl overflow-hidden group flex flex-col justify-between"
            >
              {/* Card Image Banner */}
              <div className="relative h-52 overflow-hidden bg-base-200">
                <img
                  src={game.coverImage}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className={`badge ${game.badgeColor} badge-sm font-extrabold shadow`}>
                    {game.badge}
                  </span>
                </div>

                {/* Platform Icons */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-semibold">
                  {game.platforms.includes("Web") && <span title="Web Browser"><Monitor className="w-3.5 h-3.5" /></span>}
                  {game.platforms.includes("iOS") && <span title="Apple iOS"><Smartphone className="w-3.5 h-3.5" /></span>}
                  {game.platforms.includes("Android") && <span title="Google Android"><Smartphone className="w-3.5 h-3.5" /></span>}
                </div>

                {/* Bottom Overlay Title & Genre */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider font-bold text-amber-300 drop-shadow">
                    {game.genre}
                  </span>
                  <h3 className="text-xl font-bold font-['Fredoka'] drop-shadow-md line-clamp-1">
                    {game.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-sm text-base-content/80 line-clamp-2 font-['Nunito']">
                    {game.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {game.tags.map((tag, idx) => (
                      <span key={idx} className="badge badge-ghost badge-sm text-xs font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta Info & Actions */}
                <div className="pt-3 border-t border-base-200 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-xs font-extrabold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{game.rating}</span>
                      <span className="text-base-content/50 font-normal">({game.players})</span>
                    </div>
                    <div className="text-[11px] text-base-content/60 font-semibold mt-0.5">
                      {game.releaseQuarter}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center gap-2">
                    {game.hasPlayableWeb ? (
                      <button
                        onClick={() => { handleCardSparkle(); onSelectGame(game); }}
                        className="btn btn-sm btn-primary rounded-full px-3.5 font-bold gap-1 shadow hover:scale-105"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Play</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => { handleCardSparkle(); onSelectGame(game); }}
                        className="btn btn-sm btn-outline btn-secondary rounded-full px-3.5 font-bold gap-1 hover:scale-105"
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

      </div>
    </section>
  );
};
