import React, { useState } from 'react';
import { GAMES_CATALOG, type GameItem } from '../data/gamesData';
import { Search, Sparkles, Smartphone, Monitor, Star, ArrowRight, Filter } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GamesPageProps {
  onSelectGame: (game: GameItem) => void;
}

export const GamesPage: React.FC<GamesPageProps> = ({ onSelectGame }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState<'all' | 2025 | 2026 | 2027>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'holiday' | 'instant-web'>('all');

  const filteredGames = GAMES_CATALOG.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          game.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          game.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesYear = yearFilter === 'all' || game.year === yearFilter;

    const matchesCategory = categoryFilter === 'all' || 
                            (categoryFilter === 'holiday' && game.category === 'holiday') ||
                            (categoryFilter === 'instant-web' && game.hasPlayableWeb);

    return matchesSearch && matchesYear && matchesCategory;
  });

  const handleSparkle = () => {
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Full Studio Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-['Fredoka'] text-base-content tracking-tight">
          GameMimo Master Games Catalog
        </h1>
        <p className="mt-4 text-base sm:text-lg text-base-content/70 font-['Nunito']">
          Click any game thumbnail to view full character designs, in-game activity captures, and play in browser.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-6 rounded-3xl bg-base-200/70 border border-base-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50" />
          <input
            type="text"
            placeholder="Search by title, genre, or tag..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="input input-sm sm:input-md input-bordered w-full pl-10 rounded-full bg-base-100"
          />
        </div>

        {/* Year Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-base-content/60 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Year:
          </span>
          {(['all', 2025, 2026, 2027] as const).map(y => (
            <button
              key={y}
              onClick={() => { setYearFilter(y); handleSparkle(); }}
              className={`btn btn-xs sm:btn-sm rounded-full font-bold capitalize ${
                yearFilter === y ? 'btn-primary shadow-sm' : 'btn-ghost bg-base-100'
              }`}
            >
              {y === 'all' ? 'All Years' : y}
            </button>
          ))}
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => { setCategoryFilter(categoryFilter === 'holiday' ? 'all' : 'holiday'); handleSparkle(); }}
            className={`btn btn-xs sm:btn-sm rounded-full font-bold ${
              categoryFilter === 'holiday' ? 'btn-warning shadow-sm' : 'btn-ghost bg-base-100'
            }`}
          >
            🎃 Holiday Specials
          </button>

          <button
            onClick={() => { setCategoryFilter(categoryFilter === 'instant-web' ? 'all' : 'instant-web'); handleSparkle(); }}
            className={`btn btn-xs sm:btn-sm rounded-full font-bold ${
              categoryFilter === 'instant-web' ? 'btn-accent shadow-sm' : 'btn-ghost bg-base-100'
            }`}
          >
            ⚡ Playable Web
          </button>
        </div>

      </div>

      {/* Games Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGames.length === 0 ? (
          <div className="col-span-full text-center py-16">
            <p className="text-lg font-bold text-base-content/60">No games matched your filter criteria.</p>
            <button
              onClick={() => { setSearchTerm(''); setYearFilter('all'); setCategoryFilter('all'); }}
              className="btn btn-sm btn-outline mt-4 rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredGames.map(game => (
            <div
              key={game.id}
              onClick={() => onSelectGame(game)}
              className="card bg-base-100 border border-base-200 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 rounded-3xl overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              {/* Cover Image */}
              <div className="relative h-56 overflow-hidden bg-base-200">
                <img
                  src={game.coverImage}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className={`badge ${game.badgeColor} badge-sm font-extrabold shadow`}>
                    {game.badge}
                  </span>
                  <span className="badge badge-neutral badge-sm font-bold bg-black/60 text-white backdrop-blur">
                    {game.year}
                  </span>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-semibold">
                  {game.platforms.includes("Web") && <span title="Web"><Monitor className="w-3.5 h-3.5" /></span>}
                  {game.platforms.includes("iOS") && <span title="iOS"><Smartphone className="w-3.5 h-3.5" /></span>}
                  {game.platforms.includes("Android") && <span title="Android"><Smartphone className="w-3.5 h-3.5" /></span>}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider font-bold text-amber-300 drop-shadow">
                    {game.genre}
                  </span>
                  <h3 className="text-xl font-bold font-['Fredoka'] drop-shadow-md line-clamp-1">
                    {game.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-sm text-base-content/80 line-clamp-2 font-['Nunito']">
                    {game.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {game.tags.map((tag, idx) => (
                      <span key={idx} className="badge badge-ghost badge-sm text-xs font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-base-200 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-xs font-extrabold text-amber-500">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span>{game.rating}</span>
                      <span className="text-base-content/50 font-normal">({game.players})</span>
                    </div>
                    <div className="text-[11px] text-base-content/60 font-semibold mt-0.5">
                      {game.releaseQuarter}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); onSelectGame(game); }}
                      className="btn btn-sm btn-primary rounded-full px-3.5 font-bold gap-1 shadow"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                      <span>Details & Play</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};
