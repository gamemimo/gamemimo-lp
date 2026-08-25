import { useState, useEffect } from 'react';
import { Navbar, type PageId } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { GamesPage } from './pages/GamesPage';
import { GameDetailPage } from './pages/GameDetailPage';
import { EventsPage } from './pages/EventsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { PlayModal } from './components/PlayModal';
import { GAMES_CATALOG, type GameItem } from './data/gamesData';

export type ExtendedPageId = PageId | 'game-detail';

export function App() {
  const [currentPage, setCurrentPage] = useState<ExtendedPageId>('home');
  const [previousPage, setPreviousPage] = useState<PageId>('home');
  const [selectedGameForDetail, setSelectedGameForDetail] = useState<GameItem | null>(null);
  const [selectedGameForPlay, setSelectedGameForPlay] = useState<GameItem | null>(null);
  const [playModalOpen, setPlayModalOpen] = useState(false);

  useEffect(() => {
    // Locked to cheerful, sunny, clean light theme
    document.documentElement.setAttribute('data-theme', 'cupcake');
  }, []);

  // Sync hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'games', 'events', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      } else if (hash.startsWith('game/')) {
        const gameId = hash.replace('game/', '');
        const found = GAMES_CATALOG.find(g => g.id === gameId);
        if (found) {
          setSelectedGameForDetail(found);
          setCurrentPage('game-detail');
        }
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page: PageId) => {
    setPreviousPage(currentPage === 'game-detail' ? 'home' : (currentPage as PageId));
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGameForDetail = (game: GameItem) => {
    setPreviousPage(currentPage === 'game-detail' ? 'home' : (currentPage as PageId));
    setSelectedGameForDetail(game);
    setCurrentPage('game-detail');
    window.location.hash = `game/${game.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromDetail = () => {
    handlePageChange(previousPage);
  };

  const handleOpenDefaultInstantPlay = () => {
    const instantGame = GAMES_CATALOG.find(g => g.hasPlayableWeb) || GAMES_CATALOG[0];
    setSelectedGameForPlay(instantGame);
    setPlayModalOpen(true);
  };

  const handleOpenGameInstantPlay = (game: GameItem) => {
    setSelectedGameForPlay(game);
    setPlayModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-['Quicksand'] bg-base-100 text-base-content antialiased">
      {/* Top Professional Sticky Navigation */}
      <Navbar
        currentPage={currentPage === 'game-detail' ? 'games' : (currentPage as PageId)}
        setCurrentPage={handlePageChange}
        onOpenInstantPlay={handleOpenDefaultInstantPlay}
      />

      {/* Main Multi-Page Routed View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handlePageChange}
            onSelectGame={handleSelectGameForDetail}
            onOpenInstantPlay={handleOpenDefaultInstantPlay}
          />
        )}

        {currentPage === 'games' && (
          <GamesPage onSelectGame={handleSelectGameForDetail} />
        )}

        {currentPage === 'game-detail' && selectedGameForDetail && (
          <GameDetailPage
            game={selectedGameForDetail}
            onBack={handleBackFromDetail}
            onOpenInstantPlay={handleOpenGameInstantPlay}
          />
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
        game={selectedGameForPlay}
        isOpen={playModalOpen}
        onClose={() => setPlayModalOpen(false)}
      />
    </div>
  );
}

export default App;
