import React from 'react';
import { services, translations } from '../data/mock';
import { Store, Building2, Code2, Settings } from 'lucide-react';

interface ServicesProps {
  lang: 'en' | 'id';
}

const iconMap: Record<string, any> = {
  Store: Store,
  Building2: Building2,
  Code2: Code2,
  Settings: Settings
};

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="services" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-400">{t.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-green-400" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title[lang]}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;