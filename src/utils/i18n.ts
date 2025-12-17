// Simple i18n utility for language management

type Language = 'en' | 'id';

const LANGUAGE_KEY = 'preferred_language';

export const getStoredLanguage = (): Language => {
  const stored = localStorage.getItem(LANGUAGE_KEY);
  return (stored === 'en' || stored === 'id') ? stored : 'id'; // Default to Indonesian
};

export const setStoredLanguage = (lang: Language): void => {
  localStorage.setItem(LANGUAGE_KEY, lang);
};

export const toggleLanguage = (currentLang: Language): Language => {
  return currentLang === 'en' ? 'id' : 'en';
};