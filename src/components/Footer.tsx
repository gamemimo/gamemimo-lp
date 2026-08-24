import React from 'react';
import { Heart, Globe2, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const networkDomains = [
    { name: "sggame.us", label: "SGGame Corporate & Flagship", url: "https://www.sggame.us" },
    { name: "gamemimo.com", label: "GameMimo Casual Arcade Hub", url: "https://gamemimo.com" },
    { name: "umindchannel.com", label: "UMind Mystery & Detective", url: "https://umindchannel.com" },
    { name: "bintv.us", label: "BinTV Gaming Media & Video", url: "https://bintv.us" },
    { name: "binbontv.com", label: "BinBonTV Kids Education (COPPA)", url: "https://binbontv.com" }
  ];

  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-amber-300 p-0.5 shadow-md">
                <img src="/branding/gamemimo_icon_mark.svg" alt="GameMimo Icon" className="w-full h-full object-contain" />
              </div>
              <div className="flex items-center gap-1 font-extrabold text-2xl font-['Fredoka']">
                <span>Game</span>
                <span className="bg-gradient-to-r from-pink-500 to-amber-400 bg-clip-text text-transparent">Mimo</span>
              </div>
            </a>

            <p className="text-sm text-base-content/70 font-['Nunito'] max-w-sm leading-relaxed">
              Joyful, cozy, and family-friendly casual games. A proud division of <strong>SGGame</strong>, creating digital happiness across iOS, Android, and Instant Web.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-base-content/60">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>COPPA Compliant &bull; Safe for All Ages</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-base-content font-['Fredoka']">
              Explore Games
            </h4>
            <ul className="space-y-2 text-sm font-semibold font-['Nunito'] text-base-content/70">
              <li><a href="#games" className="hover:text-primary transition-colors">Farming Simulators</a></li>
              <li><a href="#games" className="hover:text-primary transition-colors">3D Goods Sorting (ASMR)</a></li>
              <li><a href="#games" className="hover:text-primary transition-colors">Fairytale Merge-2</a></li>
              <li><a href="#games" className="hover:text-primary transition-colors">Teen Fashion & Dress-Up</a></li>
              <li><a href="#games" className="hover:text-primary transition-colors">Instant Web Arcade</a></li>
            </ul>
          </div>

          {/* Studio & LiveOps */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-base-content font-['Fredoka']">
              LiveOps & Studio
            </h4>
            <ul className="space-y-2 text-sm font-semibold font-['Nunito'] text-base-content/70">
              <li><a href="#events" className="hover:text-primary transition-colors">🎃 Halloween 2026</a></li>
              <li><a href="#events" className="hover:text-primary transition-colors">🎄 Christmas 2026</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Our Global Journey</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Player Support</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Publishing Inquiries</a></li>
            </ul>
          </div>

          {/* Connected Network Domains */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-base-content font-['Fredoka']">
              SGGame Network
            </h4>
            <ul className="space-y-2 text-sm font-semibold font-['Nunito'] text-base-content/70">
              {networkDomains.map((d, i) => (
                <li key={i}>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <Globe2 className="w-3.5 h-3.5 text-primary" />
                    <span>{d.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-base-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Nunito'] text-base-content/60">
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by GameMimo &bull; SGGame Group</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="/policy/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-base-content font-semibold">
              Privacy Policy
            </a>
            <span>&bull;</span>
            <a href="/policy/terms-of-service.html" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-base-content font-semibold">
              Terms of Service
            </a>
            <span>&bull;</span>
            <a href="https://www.sggame.us/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-base-content font-semibold">
              SGGame Corporate Legal
            </a>
          </div>

          <div>
            &copy; {new Date().getFullYear()} GameMimo / SGGame. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
