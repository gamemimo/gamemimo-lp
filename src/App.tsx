import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ParallaxHero } from './components/ParallaxHero';
import { GameShowcase } from './components/GameShowcase';
import { StudioPillars } from './components/StudioPillars';
import { EventsRoadmap } from './components/EventsRoadmap';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PlayModal } from './components/PlayModal';
import { GAMES_CATALOG, type GameItem } from './data/gamesData';

export function App() {
  const [currentTheme, setCurrentTheme] = useState('pastel');
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [playModalOpen, setPlayModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const handleOpenDefaultInstantPlay = () => {
    const instantGame = GAMES_CATALOG.find(g => g.hasPlayableWeb) || GAMES_CATALOG[0];
    setSelectedGame(instantGame);
    setPlayModalOpen(true);
  };

  const handleSelectGame = (game: GameItem) => {
    setSelectedGame(game);
    setPlayModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-['Quicksand'] bg-base-100 text-base-content antialiased">
      {/* Top Sticky Navigation */}
      <Navbar
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        onOpenInstantPlay={handleOpenDefaultInstantPlay}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        <ParallaxHero onOpenInstantPlay={handleOpenDefaultInstantPlay} />
        <GameShowcase onSelectGame={handleSelectGame} />
        <StudioPillars />
        <EventsRoadmap />
        <AboutUs />
        <ContactSection />
      </main>

      {/* Footer & Legal Links */}
      <Footer />

      {/* Interactive Playable Web Demo Modal */}
      <PlayModal
        game={selectedGame}
        isOpen={playModalOpen}
        onClose={() => setPlayModalOpen(false)}
      />
    </div>
  );
}

export default App;
