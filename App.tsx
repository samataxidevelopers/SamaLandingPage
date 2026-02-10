
import React, { useState, useEffect } from 'react';
import { TabType, Language } from './types';
import MainContent from './components/MainContent';
import PrivacyPolicy from './components/PrivacyPolicy';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.MAIN);
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const renderContent = () => {
    switch (activeTab) {
      case TabType.MAIN:
        return <MainContent lang={lang} />;
      case TabType.PRIVACY:
        return <PrivacyPolicy lang={lang} />;
      default:
        return <MainContent lang={lang} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} lang={lang} setLang={setLang} />
      
      <main className="flex-grow pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>

      <Footer lang={lang} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
