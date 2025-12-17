import React, { useState } from 'react';
import { portfolio, translations } from '../data/mock';
import { ExternalLink } from 'lucide-react';

interface PortfolioProps {
  lang: 'en' | 'id';
}

const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const [filter, setFilter] = useState('All');
  const t = translations[lang];

  const categories = ['All', 'E-Commerce', 'Business', 'Company Profile', 'Education', 'Healthcare', 'Marketing'];
  
  const filteredProjects = filter === 'All'
    ? portfolio
    : portfolio.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-gray-400">{t.portfolio.subtitle}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.name[lang]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Overlay Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-green-400" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-lg mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {project.name[lang]}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description[lang]}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;