
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface MainContentProps {
  lang: Language;
}

const MainContent: React.FC<MainContentProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Hero Section */}
      <section className="relative py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-8">
          <div className="inline-block px-4 py-1 rounded-full bg-slate-950/10 border border-slate-950/20 text-slate-950 text-xs font-bold tracking-widest uppercase">
            {t.hero.badge}
          </div>
          <h1 className="companyword text-5xl md:text-7xl font-black text-slate-950 leading-tight">
            {t.hero.title} 
            <span className="bg-slate-950 text-sama-yellow px-2">{t.hero.titleHighlight}</span> 
            <span>{t.hero.titleEnd}</span> 
          </h1>
          <p className="text-xl text-slate-800 max-w-lg leading-relaxed">
            {t.hero.desc}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-slate-950 text-sama-yellow font-bold rounded-2xl shadow-xl shadow-black/20 hover:scale-105 transition-transform">
              {t.hero.btnPrimary}
            </button>
            <button className="px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition">
              {t.hero.btnSecondary}
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute -inset-4 bg-white/30 blur-3xl rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1559131397-f94da358f7ca?auto=format&fit=crop&q=80&w=1000" 
            alt="Modern White Luxury Car" 
            className="relative rounded-[2rem] shadow-2xl border-4 border-white animate-float object-cover h-[400px] w-full"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-950">{t.services.title}</h2>
          <div className="w-20 h-1 bg-slate-950 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { ...t.services.s1, icon: '🚕' },
            { ...t.services.s2, icon: '👩‍✈️' },
            { ...t.services.s3, icon: '📦' }
          ].map((service, i) => (
            <div key={i} className="group p-8 bg-white/50 border border-slate-950/10 rounded-[2.5rem] hover:border-slate-950 transition-all duration-500 shadow-sm">
              <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <div className="text-slate-700 text-xs font-bold mb-2 uppercase tracking-widest">{service.label}</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-950">{service.title}</h3>
              <p className="text-slate-700 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center text-sama-yellow shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-black mb-6">
          {lang === 'ar' ? 'جاهز للانطلاق معنا؟' : 'Ready to ride with us?'}
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {lang === 'ar' 
            ? 'قم بتحميل التطبيق الآن واحصل على خصم 50% على رحلتك الأولى.' 
            : 'Download the app now and get 50% off your first ride.'}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-sama-yellow text-slate-950 px-10 py-4 rounded-2xl font-black uppercase tracking-wider hover:scale-105 transition-transform">
            App Store
          </button>
          <button className="bg-sama-yellow text-slate-950 px-10 py-4 rounded-2xl font-black uppercase tracking-wider hover:scale-105 transition-transform">
            Google Play
          </button>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
