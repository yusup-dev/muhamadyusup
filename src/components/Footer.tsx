import React from 'react';
import { personalInfo, translations } from '../data/mock';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'id';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {personalInfo.tagline[lang]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['about', 'services', 'portfolio', 'team', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    const element = document.getElementById(section);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm capitalize"
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {personalInfo.name}. {lang === 'en' ? 'All rights reserved.' : 'Hak cipta dilindungi.'}
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              {t.footer.builtWith} <Heart className="w-4 h-4 text-green-500 fill-green-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;