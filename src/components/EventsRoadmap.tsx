import React from 'react';
import { Calendar, Gift, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

export const EventsRoadmap: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const events = [
    {
      season: "🎃 October 2026",
      title: "Halloween Night: Spooky Sweets Festival",
      game: "Halloween Night: Spooky Match 3D",
      desc: "Collect ghost plushies, brew colorful bubbling potion vials, and unlock limited-edition Pumpkin Lantern avatar frames.",
      badge: "Halloween Special",
      badgeColor: "badge-warning",
      rewards: "Exclusive Bat Wings & 500 Candy Coins"
    },
    {
      season: "🎄 December 2026",
      title: "Santa's North Pole Gift Merge Festival",
      game: "Christmas Wonder: Santa's Gift Merge",
      desc: "Rebuild the gingerbread toy factory, bake holiday cookies, and complete the 24-Day Advent Calendar for daily surprises.",
      badge: "Holiday Festival",
      badgeColor: "badge-error",
      rewards: "Golden Sleigh Deco & 24 Daily Gifts"
    },
    {
      season: "🌸 Q1 2027",
      title: "Celestial Dragon Sanctuary Hatching Gala",
      game: "Magic Merge: Dragon Sanctuary",
      desc: "Explore newly unveiled floating cloud islands, discover celestial dragon eggs, and compete in global breeding tournaments.",
      badge: "2027 Premiere",
      badgeColor: "badge-primary",
      rewards: "Legendary Starfall Dragon Companion"
    }
  ];

  return (
    <section id="events" className="py-16 sm:py-24 bg-base-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-warning/15 text-warning-content font-bold text-xs uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Seasonal LiveOps</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Fredoka'] text-base-content tracking-tight">
            Upcoming Holiday & Seasonal Events
          </h2>
          <p className="mt-4 text-base sm:text-lg text-base-content/70 font-['Nunito']">
            Join millions of players celebrating Halloween, Christmas, and festive seasonal festivals across the GameMimo universe.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((ev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-base-200/60 border border-base-300 shadow-md hover:shadow-xl hover:bg-base-100 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-base-content/60">
                    {ev.season}
                  </span>
                  <span className={`badge ${ev.badgeColor} badge-sm font-extrabold shadow-sm`}>
                    {ev.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-['Fredoka'] text-base-content group-hover:text-primary transition-colors mb-1">
                  {ev.title}
                </h3>
                <div className="text-xs font-bold text-primary mb-3">
                  In: {ev.game}
                </div>

                <p className="text-sm text-base-content/70 font-['Nunito'] leading-relaxed mb-6">
                  {ev.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-base-300 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-success">
                  <Gift className="w-4 h-4 shrink-0" />
                  <span className="line-clamp-1">{ev.rewards}</span>
                </div>
                <button
                  onClick={triggerConfetti}
                  className="btn btn-circle btn-xs btn-ghost text-primary hover:scale-110"
                  title="Celebrate!"
                >
                  <PartyPopper className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
