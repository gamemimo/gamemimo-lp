import { useState, useEffect } from 'react';
import { Navbar, type PageId } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { GamesPage } from './pages/GamesPage';
import { EventsPage } from './pages/EventsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { PlayModal } from './components/PlayModal';
import { GAMES_CATALOG, type GameItem } from './data/gamesData';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentTheme, setCurrentTheme] = useState('pastel');
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [playModalOpen, setPlayModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  // Sync hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'games', 'events', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

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
      {/* Top Professional Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        onOpenInstantPlay={handleOpenDefaultInstantPlay}
      />

      {/* Main Multi-Page Routed View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handlePageChange}
            onSelectGame={handleSelectGame}
            onOpenInstantPlay={handleOpenDefaultInstantPlay}
          />
        )}

        {currentPage === 'games' && (
          <GamesPage onSelectGame={handleSelectGame} />
        )}

        {currentPage === 'events' && (
          <EventsPage />
        )}

        {currentPage === 'about' && (
          <AboutPage />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer & Connected Brand Domains */}
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
