
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface AboutContentProps {
  lang: Language;
}

const AboutContent: React.FC<AboutContentProps> = ({ lang }) => {
  const t = translations[lang].about;

  return (
    <div className="space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-6xl font-black text-slate-950">{t.title}</h1>
        <p className="text-xl text-slate-800 leading-relaxed">
          {t.desc}
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-950/20 hidden md:block"></div>
        
        <div className="space-y-12 relative">
          {t.timeline.map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 p-8">
                <div className={`bg-white/40 border border-slate-950/10 p-8 rounded-[2rem] hover:border-slate-950/30 transition-all group ${idx % 2 === 0 ? (lang === 'ar' ? 'text-left' : 'text-right') : (lang === 'ar' ? 'text-right' : 'text-left')} shadow-sm`}>
                  <div className="text-5xl font-black text-slate-950 mb-2 opacity-30 group-hover:opacity-100 transition-opacity">{item.year}</div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-4">{item.event}</h3>
                  <p className="text-slate-800 leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center text-2xl z-10 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-4 border-sama-yellow">
                🚕
              </div>
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-950 text-sama-yellow p-16 rounded-[3rem] text-center shadow-xl">
        <h2 className="text-4xl font-black mb-6 italic">{t.quote}</h2>
        {lang === 'en' && <p className="text-lg font-bold opacity-80 uppercase tracking-widest">{t.arabicQuote}</p>}
      </div>
    </div>
  );
};

export default AboutContent;
