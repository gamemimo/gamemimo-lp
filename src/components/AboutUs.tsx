import React from 'react';
import { Building2, Globe2, ExternalLink, MapPin } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const timeline = [
    {
      year: "2015",
      city: "Hanoi, Vietnam",
      title: "Founding & Casual Roots",
      desc: "SG Games was founded in Hanoi's vibrant tech hub with a player-first philosophy, building engaging casual mobile games and pioneering interactive TV experiences."
    },
    {
      year: "2019",
      city: "Los Angeles, USA",
      title: "Global Expansion",
      desc: "Transitioned to Los Angeles, California, tapping into the global entertainment industry's pulse and expanding our creative storytelling pipeline."
    },
    {
      year: "2020 — 2026",
      city: "Atlanta, GA, USA",
      title: "Headquarters & Multi-Division Growth",
      desc: "Established studio headquarters in Atlanta, Georgia. Scaled our operations into specialized divisions: SGGame, GameMimo, UMindGame, and BBKidGame."
    }
  ];

  const networkDomains = [
    { name: "sggame.us", label: "SGGame Corporate & Core", url: "https://www.sggame.us", color: "badge-primary" },
    { name: "gamemimo.com", label: "GameMimo Casual Arcade", url: "https://gamemimo.com", color: "badge-secondary" },
    { name: "umindchannel.com", label: "UMind Mystery & HOG", url: "https://umindchannel.com", color: "badge-accent" },
    { name: "bintv.us", label: "BinTV Gaming Media", url: "https://bintv.us", color: "badge-warning" },
    { name: "binbontv.com", label: "BinBonTV Kids Education", url: "https://binbontv.com", color: "badge-info" }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-base-200/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-info/15 text-info-content font-bold text-xs uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Our Studio Story</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Fredoka'] text-base-content tracking-tight">
            Bridging Innovation Across the Globe
          </h2>
          <p className="mt-4 text-base sm:text-lg text-base-content/70 font-['Nunito']">
            From our beginnings in Hanoi to our creative expansion in Los Angeles and our studio headquarters in Atlanta, GA.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-base-100 border border-base-200 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none"></div>
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-black text-2xl sm:text-3xl font-['Fredoka'] text-primary">
                    {item.year}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-base-content/60 bg-base-200 px-2.5 py-1 rounded-full">
                    <MapPin className="w-3 h-3 text-red-500" />
                    <span>{item.city}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-['Fredoka'] text-base-content mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-base-content/70 font-['Nunito'] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SGGame Multi-Domain Network Strip */}
        <div className="p-8 rounded-3xl bg-base-100 border border-base-200 shadow-md">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold font-['Fredoka'] text-base-content">
              The SGGame Connected Brand Network
            </h3>
            <p className="text-xs sm:text-sm text-base-content/60 font-['Nunito'] mt-1">
              Explore the specialized platforms and media hubs powered by SGGame.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {networkDomains.map((dom, idx) => (
              <a
                key={idx}
                href={dom.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-base-200/80 hover:bg-base-200 border border-base-300 hover:scale-105 transition-all text-sm font-bold text-base-content"
              >
                <Globe2 className="w-4 h-4 text-primary" />
                <span>{dom.name}</span>
                <span className={`badge ${dom.color} badge-xs font-semibold`}>
                  {dom.label.split(' ')[0]}
                </span>
                <ExternalLink className="w-3 h-3 opacity-40 ml-1" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
