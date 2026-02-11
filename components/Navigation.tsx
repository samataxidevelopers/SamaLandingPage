
import React, { useState } from 'react';
import { TabType, Language } from '../types';
import { translations } from '../translations';

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab, lang, setLang }) => {
  const t = translations[lang].nav;
  const tabs = [
    { type: TabType.MAIN, label: t.main },
    { type: TabType.PRIVACY, label: t.privacy },
    { type: TabType.TERMS, label: t.terms }
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div
          className="flex items-center space-x-3 rtl:space-x-reverse group cursor-pointer"
          onClick={() => {
            setActiveTab(TabType.MAIN);
            setMenuOpen(false);
          }}
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
             <img src="assets/images/Sama Taxi-01.png" alt="Sama Taxi" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tighter text-slate-950 leading-none">
              SAMA <span className="text-slate-800">TAXI</span>
            </span>
            <span className="text-[10px] text-slate-700 font-medium tracking-[0.2em] uppercase">{t.slogan}</span>
          </div>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-4 rtl:space-x-reverse">
          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center space-x-1 sm:space-x-2 rtl:space-x-reverse">
            {tabs.map((tab) => (
              <button
                key={tab.type}
                onClick={() => setActiveTab(tab.type)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.type
                    ? 'bg-slate-950 text-sama-yellow shadow-lg shadow-black/20'
                    : 'text-slate-800 hover:text-slate-950 hover:bg-black/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="h-8 w-px bg-slate-950/10 mx-2 hidden sm:block"></div>

          {/* Language switch (always visible) */}
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white/50 hover:bg-white text-slate-950 transition border border-slate-950/10 uppercase"
          >
            {lang === 'ar' ? 'English' : 'عربي'}
          </button>

          {/* Desktop download button */}
          <button className="hidden md:block bg-slate-950 text-sama-yellow px-6 py-2 rounded-xl text-sm font-bold hover:bg-black transition-all duration-300 transform active:scale-95">
            {t.download}
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white/70 text-slate-900 hover:bg-white transition"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-slate-900 transition-transform ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
              <span className={`block h-0.5 w-5 bg-slate-900 transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-5 bg-slate-900 transition-transform ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile / tablet slide-down menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {tabs.map((tab) => (
              <button
                key={tab.type}
                onClick={() => {
                  setActiveTab(tab.type);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.type
                    ? 'bg-slate-950 text-sama-yellow shadow-lg shadow-black/20'
                    : 'text-slate-800 hover:text-slate-950 hover:bg-black/5'
                }`}
              >
                {tab.label}
              </button>
            ))}

            <button
              className="w-full mt-2 bg-slate-950 text-sama-yellow px-4 py-3 rounded-2xl text-sm font-bold hover:bg-black transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {t.download}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
