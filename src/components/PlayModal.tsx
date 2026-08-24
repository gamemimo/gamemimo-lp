import React, { useState } from 'react';
import type { GameItem } from '../data/gamesData';
import { X, Play, RefreshCw, Star, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PlayModalProps {
  game: GameItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PlayModal: React.FC<PlayModalProps> = ({ game, isOpen, onClose }) => {
  const [interactiveScore, setInteractiveScore] = useState(0);
  const [combo, setCombo] = useState(1);

  if (!isOpen || !game) return null;

  const handleTapAction = () => {
    setInteractiveScore(prev => prev + 10 * combo);
    setCombo(prev => Math.min(prev + 1, 8));
    confetti({
      particleCount: 15,
      spread: 40,
      origin: { y: 0.5 },
      colors: ['#FF5E7E', '#FFD166', '#06D6A0']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl bg-base-100 rounded-3xl shadow-2xl border border-base-300 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-base-200 flex items-center justify-between bg-base-200/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-base-300 shrink-0">
              <img src={game.coverImage} alt={game.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg sm:text-xl font-['Fredoka'] text-base-content line-clamp-1">
                {game.title}
              </h3>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-primary">{game.genre}</span>
                <span className="text-base-content/40">&bull;</span>
                <span className="text-base-content/60 font-semibold">{game.engine}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn btn-circle btn-sm btn-ghost"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Interactive Screen */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Simulated Browser Web Canvas */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col items-center justify-center text-center p-6 text-white shadow-inner">
            
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>60 FPS Web Canvas Active</span>
            </div>

            <div className="absolute top-4 right-4 flex items-center gap-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
              <div className="flex items-center gap-1 text-amber-400">
                <Trophy className="w-3.5 h-3.5" />
                <span>Score: {interactiveScore}</span>
              </div>
              <div className="text-pink-400">
                Combo: x{combo}
              </div>
            </div>

            {/* Interactive Game Mascot Tap Arena */}
            <div className="space-y-4 my-auto">
              <div
                onClick={handleTapAction}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-pink-500 via-orange-400 to-amber-300 shadow-2xl flex items-center justify-center text-5xl sm:text-6xl mx-auto cursor-pointer hover:scale-110 active:scale-95 transition-transform select-none"
              >
                🎮
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-black font-['Fredoka'] text-white">
                  Tap to Play Quick Mini-Demo!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-['Nunito'] mt-1">
                  Experience the snappy responsive feedback of our GameMimo web engine. Tap above to trigger haptic particle bursts!
                </p>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-400">
              <span>Engine: {game.engine}</span>
              <button
                onClick={() => { setInteractiveScore(0); setCombo(1); }}
                className="btn btn-xs btn-ghost text-slate-300 gap-1"
              >
                <RefreshCw className="w-3 h-3" /> Reset Score
              </button>
            </div>
          </div>

          {/* Game Information & Store Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-['Nunito']">
            <div className="p-4 rounded-2xl bg-base-200/60 border border-base-300">
              <div className="font-bold text-base-content mb-1">About This Game</div>
              <p className="text-xs text-base-content/70 leading-relaxed">
                {game.description}
              </p>
              <div className="mt-2 text-xs font-semibold text-primary">
                USP: {game.usp}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-base-200/60 border border-base-300 flex flex-col justify-between">
              <div>
                <div className="font-bold text-base-content mb-1">Platforms & Release</div>
                <div className="text-xs text-base-content/70">
                  Target: <strong>{game.releaseQuarter}</strong>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {game.platforms.map((p, i) => (
                    <span key={i} className="badge badge-sm badge-neutral">{p}</span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-base-300 flex items-center justify-between">
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" /> {game.rating} / 5.0
                </span>
                <span className="text-xs font-bold text-success">
                  {game.players}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-base-200 flex items-center justify-between bg-base-200/30">
          <span className="text-xs text-base-content/60 font-semibold hidden sm:inline">
            GameMimo Instant Play Framework &bull; SGGame Group
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button onClick={onClose} className="btn btn-sm btn-ghost font-bold">
              Close
            </button>
            <button
              onClick={() => {
                confetti({ particleCount: 50, spread: 70 });
                alert(`Redirecting to ${game.title} instant web launcher...`);
              }}
              className="btn btn-sm btn-primary rounded-full px-5 font-bold gap-1 shadow"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch Full Web Game</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
