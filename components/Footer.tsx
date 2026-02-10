
import React from 'react';
import { Language, TabType } from '../types';
import { translations } from '../translations';

interface FooterProps {
  lang: Language;
  setActiveTab: (tab: TabType) => void;
}

const Footer: React.FC<FooterProps> = ({ lang, setActiveTab }) => {
  const t = translations[lang].footer;
  const navT = translations[lang].nav;

  return (
    <footer className="bg-slate-950 py-16 px-4">
      <div className="max-w-7xl mx-auto text-sama-yellow">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-sama-yellow rounded-xl flex items-center justify-center text-slate-950 font-black text-xl">S</div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">Sama Taxi</span>
            </div>
            <p className="text-slate-400 max-w-xs leading-relaxed">
              {t.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">{lang === 'ar' ? 'السياسات' : 'Policies'}</h4>
              <nav className="flex flex-col space-y-2 text-slate-400 text-sm">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab(TabType.PRIVACY);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left rtl:text-right hover:text-sama-yellow transition cursor-pointer"
                >
                  {navT.privacy}
                </button>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex space-x-6 rtl:space-x-reverse">
             <a href="https://twitter.com/samataxi" className="text-slate-500 hover:text-white transition">Twitter</a>
             <a href="https://instagram.com/samataxi" className="text-slate-500 hover:text-white transition">Instagram</a>
             <a href="https://facebook.com/samataxi" className="text-slate-500 hover:text-white transition">Facebook</a>
          </div>
          <div className="text-slate-500 text-xs font-medium text-center md:text-right rtl:md:text-left">
            <p>samataxi.app | +966 50 884 2002</p>
            <p className="mt-2">© {new Date().getFullYear()} Sama Taxi Inc. {t.copy}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
