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
    <section id="about" className="px-6 py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-400">{t.about.subtitle}</p>
        </div>

        {/* Bio */}
        <div className="p-8 mb-16 bg-gray-800 border border-gray-700 shadow-xl rounded-2xl md:p-12">
          <p className="text-lg leading-relaxed text-gray-300">
            {personalInfo.bio[lang]}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="mb-8 text-2xl font-bold text-center text-white md:text-3xl">
            {t.about.techTitle}
          </h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {techStack.map((tech, index) => {
              const IconComponent = categoryIcons[tech.category] || Code2;
              return (
                <div
                  key={index}
                  className="p-6 transition-all duration-300 bg-gray-800 border border-gray-700 rounded-2xl hover:border-green-500/50 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 transition-transform duration-300 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="mb-1 font-semibold text-white">{tech.name}</h4>
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