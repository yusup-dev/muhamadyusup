import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, translations } from '../data/mock';

interface HeroProps {
  lang: 'en' | 'id';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Greeting */}
        <p className="text-lg md:text-xl text-gray-400 mb-4 animate-fade-in">
          {t.hero.greeting}
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up">
          {personalInfo.name}
        </h1>

        {/* Role with gradient */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            {personalInfo.role[lang]}
          </span>
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {personalInfo.tagline[lang]}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-green-500/30 hover:scale-105 min-w-[200px] justify-center"
          >
            {t.hero.cta1}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg hover:scale-105 min-w-[200px]"
          >
            {t.hero.cta2}
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-gray-300" />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-300" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-gray-300" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;