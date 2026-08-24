import React, { useState } from 'react';
import { Gamepad2, Volume2, VolumeX, Menu, X, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export type PageId = 'home' | 'games' | 'events' | 'about' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  currentTheme: string;
  setTheme: (theme: string) => void;
  onOpenInstantPlay: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  currentTheme,
  setTheme,
  onOpenInstantPlay,
}) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const triggerSparkles = () => {
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.1, x: 0.8 },
      colors: ['#FF6B8B', '#FFAA00', '#4FACFE', '#00F2FE', '#FFD166']
    });
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'games', label: 'Games Portfolio' },
    { id: 'events', label: 'Holiday Events' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const themes = [
    { id: 'pastel', label: '🌸 Pastel' },
    { id: 'cupcake', label: '🧁 Cupcake' },
    { id: 'valentine', label: '💖 Valentine' },
    { id: 'emerald', label: '🌿 Emerald' },
    { id: 'sunset', label: '🌅 Sunset' },
    { id: 'cyberpunk', label: '⚡ Cyber' },
  ];

  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 glass-panel shadow-sm border-b border-base-200/80 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-500 via-orange-400 to-amber-300 p-0.5 shadow-md group-hover:rotate-6 transition-transform">
            <img src="/branding/gamemimo_icon_mark.svg" alt="GameMimo Mascot" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-2xl tracking-tight text-base-content font-['Fredoka']">Game</span>
              <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-pink-500 via-orange-400 to-amber-400 bg-clip-text text-transparent font-['Fredoka']">Mimo</span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-base-content/60 block -mt-1">
              A Division of SGGame
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 font-bold text-sm">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                currentPage === link.id
                  ? 'bg-primary text-primary-content shadow-sm font-extrabold'
                  : 'text-base-content/70 hover:text-base-content hover:bg-base-200/60'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Controls: Theme, Sound, Play Web */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Theme Dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-sm btn-ghost gap-1 font-medium capitalize rounded-full">
              🎨 <span className="hidden lg:inline">{currentTheme}</span>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-2xl w-36 text-sm border border-base-200 mt-2 z-50">
              {themes.map(t => (
                <li key={t.id}>
                  <button 
                    onClick={() => setTheme(t.id)} 
                    className={`py-1.5 rounded-xl ${currentTheme === t.id ? 'active font-bold' : ''}`}
                  >
                    {t.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sound FX Toggle */}
          <button 
            onClick={() => setSoundEnabled(!soundEnabled)} 
            className="btn btn-circle btn-sm btn-ghost"
            title={soundEnabled ? "Sound enabled" : "Sound muted"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-primary" /> : <VolumeX className="w-4 h-4 text-base-content/40" />}
          </button>

          {/* Play Web CTA Button */}
          <button 
            onClick={() => { triggerSparkles(); onOpenInstantPlay(); }}
            className="btn btn-sm btn-primary rounded-full px-4 gap-1.5 font-bold shadow-md shadow-primary/25 hover:scale-105 transition-transform"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Play Web Instant</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden btn btn-sm btn-ghost btn-circle"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-base-200 px-4 pt-3 pb-6 space-y-3 mt-2">
          <nav className="flex flex-col gap-1.5 font-bold text-base">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-2xl flex items-center justify-between ${
                  currentPage === link.id
                    ? 'bg-primary text-primary-content font-extrabold'
                    : 'text-base-content hover:bg-base-200'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </button>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-base-200 flex items-center justify-between">
            <span className="text-xs font-bold text-base-content/70">Theme:</span>
            <div className="flex flex-wrap gap-1">
              {themes.slice(0, 4).map(t => (
                <button key={t.id} onClick={() => setTheme(t.id)} className="btn btn-xs btn-outline rounded-lg">
                  {t.label.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenInstantPlay(); }}
            className="btn btn-primary btn-block rounded-full font-bold gap-2 mt-2"
          >
            <Gamepad2 className="w-4 h-4" />
            Play Instant Web Game
          </button>
        </div>
      )}
    </header>
  );
};
