// Type definitions for the personal website

export interface LocalizedText {
  en: string;
  id: string;
}

export interface PersonalInfo {
  name: string;
  role: LocalizedText;
  tagline: LocalizedText;
  bio: LocalizedText;
  email: string;
  phone: string;
  whatsapp: string;
  location: LocalizedText;
  social: {
    github: string;
    linkedin: string;
    instagram: string;
  };
}

export interface TechStack {
  name: string;
  icon: string;
  category: string;
}

export interface Education {
  id: number;
  degree: LocalizedText;
  institution: string;
  period: string;
  description: LocalizedText;
}

export interface Experience {
  id: number;
  title: LocalizedText;
  company: LocalizedText;
  period: string;
  description: LocalizedText;
}

export interface Service {
  id: number;
  title: LocalizedText;
  description: LocalizedText;
  icon: string;
}

export interface Portfolio {
  id: number;
  name: LocalizedText;
  description: LocalizedText;
  image: string;
  techStack: string[];
  category: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: LocalizedText;
  image: string;
  bio: LocalizedText;
  social: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export interface Translations {
  en: TranslationContent;
  id: TranslationContent;
}

export interface TranslationContent {
  nav: {
    about: string;
    services: string;
    portfolio: string;
    team: string;
    contact: string;
  };
  hero: {
    greeting: string;
    cta1: string;
    cta2: string;
  };
  about: {
    title: string;
    subtitle: string;
    techTitle: string;
  };
  education: {
    title: string;
    educationTab: string;
    experienceTab: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    viewAll: string;
    filter: {
      all: string;
      ecommerce: string;
      business: string;
      companyProfile: string;
      education: string;
      healthcare: string;
      marketing: string;
    };
  };
  team: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
    };
    info: {
      email: string;
      phone: string;
      location: string;
    };
    success: string;
    error: string;
  };
  footer: {
    copyright: string;
    builtWith: string;
  };
}
