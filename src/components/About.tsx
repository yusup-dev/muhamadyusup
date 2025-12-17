import React from 'react';
import { personalInfo, techStack, translations } from '../data/mock';
import { Code2, Database, Layout, Server } from 'lucide-react';

interface AboutProps {
  lang: 'en' | 'id';
}

const categoryIcons: Record<string, any> = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  DevOps: Code2
};

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="about" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-400">{t.about.subtitle}</p>
        </div>

        {/* Bio */}
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-16 border border-gray-700 shadow-xl">
          <p className="text-lg text-gray-300 leading-relaxed">
            {personalInfo.bio[lang]}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            {t.about.techTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => {
              const IconComponent = categoryIcons[tech.category] || Code2;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                    <p className="text-sm text-gray-400">{tech.category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;