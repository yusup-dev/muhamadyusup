import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: 'en' | 'id';
  onToggle: () => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-700/80 transition-all duration-300 text-white shadow-lg hover:shadow-xl group"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
      <span className="text-sm font-medium">
        {currentLang === 'en' ? 'EN' : 'ID'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;