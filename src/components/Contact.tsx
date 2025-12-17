import React from 'react';
import { personalInfo, translations } from '../data/mock';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

interface ContactProps {
  lang: 'en' | 'id';
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang];

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      lang === 'en'
        ? 'Hello! I would like to discuss a project with you.'
        : 'Halo! Saya ingin mendiskusikan proyek dengan Anda.'
    );
    window.open(`https://wa.me/${personalInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="px-6 py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-400">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-1">
            {/* Email */}
            <div className="p-6 transition bg-gray-900 border border-gray-700 rounded-2xl hover:border-green-500/50">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl">
                <Mail className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="mb-2 font-semibold text-white">
                {t.contact.info.email}
              </h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-gray-400 break-all transition hover:text-green-400"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone */}
            <div className="p-6 transition bg-gray-900 border border-gray-700 rounded-2xl hover:border-green-500/50">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="mb-2 font-semibold text-white">
                {t.contact.info.phone}
              </h3>
              <p className="text-sm text-gray-400">{personalInfo.phone}</p>
            </div>

            {/* Location */}
            <div className="p-6 transition bg-gray-900 border border-gray-700 rounded-2xl hover:border-green-500/50">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl">
                <MapPin className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="mb-2 font-semibold text-white">
                {t.contact.info.location}
              </h3>
              <p className="text-sm text-gray-400">
                {personalInfo.location[lang]}
              </p>
            </div>
          </div>

          {/* CTA Section (Replace Form) */}
          <div className="flex items-center justify-center p-10 text-center bg-gray-900 border border-gray-700 rounded-2xl lg:col-span-2">
            <div>
              <h3 className="mb-4 text-3xl font-semibold text-white">
                {lang === 'en' ? 'Let’s Work Together' : 'Mari Bekerja Sama'}
              </h3>
              <p className="mb-8 text-gray-400">
                {lang === 'en'
                  ? 'For faster response and better discussion, please contact me directly via WhatsApp.'
                  : 'Untuk respon lebih cepat dan diskusi yang lebih nyaman, silakan hubungi saya langsung melalui WhatsApp.'}
              </p>

              <button
                onClick={openWhatsApp}
                className="inline-flex items-center gap-2 px-10 py-4 font-medium text-white transition bg-green-500 shadow-lg rounded-xl hover:bg-green-600 hover:scale-105 hover:shadow-green-500/30"
              >
                <MessageSquare className="w-5 h-5" />
                Contact via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
