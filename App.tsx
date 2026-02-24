
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Language } from './types';
import MainContent from './components/MainContent';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className={`min-h-screen flex flex-col ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <Navigation lang={lang} setLang={setLang} />
      
      <main className="flex-grow pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<MainContent lang={lang} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy lang={lang} />} />
            <Route path="/terms" element={<TermsConditions lang={lang} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default App;
