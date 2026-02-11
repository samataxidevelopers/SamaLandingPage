import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface TermsConditionsProps {
  lang: Language;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ lang }) => {
  const t = translations[lang].terms;

  return (
    <div className="max-w-4xl mx-auto bg-white/40 border border-slate-950/10 rounded-[3rem] p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-5xl font-black text-slate-950 mb-8">{t.title}</h1>
      <p className="text-slate-700 mb-12 flex items-center gap-2">
        <span className="w-2 h-2 bg-slate-950 rounded-full"></span>
        {t.intro}
      </p>

      {(t as any).fullText ? (
        <div className="text-slate-800 leading-relaxed text-lg whitespace-pre-line">
          {(t as any).fullText}
        </div>
      ) : (
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">{t.sec1Title}</h2>
            <p className="text-slate-800 leading-relaxed text-lg">
              {t.sec1Content}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">{t.sec2Title}</h2>
            <p className="text-slate-800 leading-relaxed text-lg">
              {t.sec2Content}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">{t.sec3Title}</h2>
            <p className="text-slate-800 leading-relaxed text-lg">
              {t.sec3Content}
            </p>
          </section>
        </div>
      )}
    </div>
  );
};

export default TermsConditions;

