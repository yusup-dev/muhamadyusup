import React from 'react';
import { team, translations } from '../data/mock';
import { Linkedin, Github, Instagram, Award } from 'lucide-react';

interface TeamProps {
  lang: 'en' | 'id';
}

const Team: React.FC<TeamProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="team" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.team.title}
          </h2>
          <p className="text-lg text-gray-400">{t.team.subtitle}</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-2"
            >
              {/* Member Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Founder Badge */}
                {index === 0 && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-lg flex items-center gap-1 shadow-lg">
                    <Award className="w-3 h-3" />
                    FOUNDER
                  </div>
                )}
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-green-400 font-medium mb-4">
                  {member.role[lang]}
                </p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {member.bio[lang]}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-gray-300" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4 text-gray-300" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4 text-gray-300" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;