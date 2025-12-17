import React, { useState, FormEvent } from 'react';
import { personalInfo, translations } from '../data/mock';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

interface ContactProps {
  lang: 'en' | 'id';
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const t = translations[lang];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission (prepare for future backend integration)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      lang === 'en'
        ? 'Hello! I would like to discuss a project with you.'
        : 'Halo! Saya ingin mendiskusikan proyek dengan Anda.'
    );
    window.open(`https://wa.me/${personalInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-400">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{t.contact.info.email}</h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{t.contact.info.phone}</h3>
              <p className="text-gray-400 text-sm">{personalInfo.phone}</p>
            </div>

            {/* Location */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{t.contact.info.location}</h3>
              <p className="text-gray-400 text-sm">{personalInfo.location[lang]}</p>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={openWhatsApp}
              className="w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/30 hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp
            </button>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-sm">
                  {t.contact.success}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800 border ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    } rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800 border ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    } rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800 border ${
                    errors.subject ? 'border-red-500' : 'border-gray-700'
                  } rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300`}
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-gray-800 border ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  } rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-green-500 hover:bg-green-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/30 hover:scale-105 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>{t.contact.form.sending}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t.contact.form.send}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;