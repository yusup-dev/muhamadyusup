import React, { useState, useEffect } from 'react';
import './App.css';
import { getStoredLanguage, setStoredLanguage, toggleLanguage } from './utils/i18n';
import LanguageSwitcher from './components/LanguageSwitcher';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Language = 'en' | 'id';

function App() {
  const [lang, setLang] = useState<Language>(getStoredLanguage());

  useEffect(() => {
    // Set HTML lang attribute for accessibility
    document.documentElement.lang = lang;
  }, [lang]);

  const handleLanguageToggle = () => {
    const newLang = toggleLanguage(lang);
    setLang(newLang);
    setStoredLanguage(newLang);
  };

  return (
    <div className="App">
      {/* Language Switcher */}
      <LanguageSwitcher currentLang={lang} onToggle={handleLanguageToggle} />

      {/* Main Content */}
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Education lang={lang} />
        <Services lang={lang} />
        <Portfolio lang={lang} />
        <Team lang={lang} />
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}

export default App;