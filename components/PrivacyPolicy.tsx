
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface PrivacyPolicyProps {
  lang: Language;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ lang }) => {
  const t = translations[lang].privacy;

  return (
    <div className="max-w-4xl mx-auto bg-white/40 border border-black/10 rounded-[3rem] p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-5xl font-black text-black mb-8">{t.title}</h1>
      <p className="text-black/70 mb-12 flex items-center gap-2">
        <span className="w-2 h-2 bg-black rounded-full"></span>
        {t.effective}
      </p>
      
      {(t as any).fullText ? (
        <div className="text-black/80 leading-relaxed text-lg whitespace-pre-line">
          {(t as any).fullText}
        </div>
      ) : (
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">{t.sec1Title}</h2>
            <p className="text-black/80 leading-relaxed text-lg">
              {t.sec1Content}
            </p>
          </section>

          <section className="p-8 bg-black rounded-[2rem] border-l-4 rtl:border-l-0 rtl:border-r-4 border-sama-yellow text-white">
            <h3 className="text-xl font-bold text-white mb-4">{t.safetyTitle}</h3>
            <p className="text-white/80 text-md">
              {t.safetyContent}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">{t.sec2Title}</h2>
            <p className="text-black/80 leading-relaxed text-lg">
              {t.sec2Content}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">{t.sec3Title}</h2>
            <p className="text-black/80 leading-relaxed text-lg">
              {t.sec3Content}
              <br />
              <span className="font-black text-black text-2xl mt-4 block">legal@samataxi.co</span>
            </p>
          </section>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
