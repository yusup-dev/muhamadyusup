import React, { useState } from 'react';
import { education, experience, translations } from '../data/mock';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

interface EducationProps {
  lang: 'en' | 'id';
}

const Education: React.FC<EducationProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('experience');
  const t = translations[lang];

  return (
    <section id="education" className="py-20 px-6 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.education.title}
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-12 justify-center">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'experience'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <Briefcase className="w-5 h-5 inline-block mr-2" />
            {t.education.experienceTab}
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <GraduationCap className="w-5 h-5 inline-block mr-2" />
            {t.education.educationTab}
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`flex flex-col md:flex-row gap-6 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title[lang]}
                        </h3>
                        <p className="text-green-400 font-medium">{exp.company[lang]}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description[lang]}
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-4 h-4 bg-green-500 rounded-full border-4 border-gray-800 z-10 flex-shrink-0"></div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`flex flex-col md:flex-row gap-6 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {edu.degree[lang]}
                        </h3>
                        <p className="text-blue-400 font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {edu.description[lang]}
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 z-10 flex-shrink-0"></div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;