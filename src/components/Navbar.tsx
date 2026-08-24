import React, { useState, useEffect } from 'react';
import { Sparkles, Gamepad2, Volume2, VolumeX, Menu, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface NavbarProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
  onOpenInstantPlay: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTheme, setTheme, onOpenInstantPlay }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerSparkles = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.1, x: 0.8 },
      colors: ['#FF6B8B', '#FFAA00', '#4FACFE', '#00F2FE', '#FFD166']
    });
  };

  const themes = [
    { id: 'pastel', label: '🌸 Pastel' },
    { id: 'cupcake', label: '🧁 Cupcake' },
    { id: 'valentine', label: '💖 Valentine' },
    { id: 'emerald', label: '🌿 Emerald' },
    { id: 'sunset', label: '🌅 Sunset' },
    { id: 'cyberpunk', label: '⚡ Cyber' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group" onClick={triggerSparkles}>
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
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-semibold text-sm">
          <a href="#games" className="hover:text-primary transition-colors">Games Catalog</a>
          <a href="#events" className="hover:text-primary transition-colors flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-warning" />
            <span>Holiday Events</span>
          </a>
          <a href="#pillars" className="hover:text-primary transition-colors">Why GameMimo</a>
          <a href="#about" className="hover:text-primary transition-colors">About Us</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Action Controls & Theme Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Theme Dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-sm btn-ghost gap-1 font-medium capitalize">
              🎨 <span className="hidden lg:inline">{currentTheme}</span>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-box w-36 text-sm border border-base-200 mt-2 z-50">
              {themes.map(t => (
                <li key={t.id}>
                  <button 
                    onClick={() => setTheme(t.id)} 
                    className={`py-1.5 ${currentTheme === t.id ? 'active font-bold' : ''}`}
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
            className="btn btn-sm btn-primary rounded-full px-4 gap-2 font-bold shadow-lg shadow-primary/25 hover:scale-105 transition-transform"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Play Web Instant</span>
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden btn btn-sm btn-ghost btn-circle"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-base-200 px-4 pt-2 pb-6 space-y-3 mt-2">
          <nav className="flex flex-col gap-3 font-semibold text-base">
            <a href="#games" onClick={() => setMobileMenuOpen(false)} className="py-1">🎮 Games Catalog</a>
            <a href="#events" onClick={() => setMobileMenuOpen(false)} className="py-1">🎃 Holiday Events</a>
            <a href="#pillars" onClick={() => setMobileMenuOpen(false)} className="py-1">✨ Why GameMimo</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-1">🏢 About Us</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1">💌 Contact & Support</a>
          </nav>
          <div className="pt-3 border-t border-base-200 flex items-center justify-between">
            <span className="text-sm font-semibold">Theme:</span>
            <div className="flex flex-wrap gap-1">
              {themes.slice(0, 4).map(t => (
                <button key={t.id} onClick={() => setTheme(t.id)} className="btn btn-xs btn-outline">
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
