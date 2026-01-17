import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import ScrollToTop from '../components/ScrollToTop';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulation d'envoi d'email (remplacer par votre service d'email)
      const mailtoLink = `mailto:comiteinteru@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\nUniversité: ${formData.university || 'Non spécifiée'}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      setFormData({
        name: '',
        email: '',
        university: '',
        subject: '',
        message: ''
      });

      setSubmitStatus('success');
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const universities = [
    'Université Cheikh Anta Diop (UCAD)',
    'Université Gaston Berger (UGB)',
    'Université Assane Seck (UASZ)',
    'Université Alioune Diop (UADB)',
    'Université du Sine Saloum (USSEIN)',
    'Université Iba Der Thiam (UIDT)',
    'Université Amadou Mahtar Mbow (UAM)',
    'Institut Supérieur d\'ensignements profesionnels (ISEP)',
    'Université Numérique Cheikh Hamidou Kane (UNCHK)',
    'Autre'
  ];

  return (
    <main className="pt-20 bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Une question ? Une suggestion ? N'hésitez pas à nous écrire.
            Notre équipe est là pour vous répondre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="bg-primary-900 rounded-3xl p-8 text-white shadow-xl overflow-hidden relative">
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-primary-800 opacity-50 blur-3xl"></div>

              <h2 className="text-2xl font-bold mb-8 relative z-10">Nos Coordonnées</h2>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mr-4 flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/90 mb-1">Email</h3>
                    <p className="text-primary-100 text-sm">comiteinteru@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mr-4 flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/90 mb-1">Téléphone</h3>
                    <p className="text-primary-100 text-sm">77 470 11 73</p>
                    <p className="text-primary-100 text-sm">77 830 86 39</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mr-4 flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/90 mb-1">Adresse</h3>
                    <p className="text-primary-100 text-sm">Chez Khalifa Ababacar Sy<br />Tivaouane, Sénégal</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                <h3 className="font-semibold mb-4">Rejoignez-nous</h3>
                <button className="w-full flex items-center justify-center space-x-2 bg-white text-primary-900 py-3 rounded-xl font-bold hover:bg-primary-50 transition-colors">
                  <span>Télécharger la Brochure</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Envoyez un message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom Complet</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 transition-all placeholder:text-gray-400 font-medium"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 transition-all placeholder:text-gray-400 font-medium"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Université</label>
                  <select
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 transition-all font-medium text-gray-600"
                  >
                    <option value="">Sélectionnez votre université</option>
                    {universities.map((uni) => (
                      <option key={uni} value={uni}>{uni}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 transition-all placeholder:text-gray-400 font-medium"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 transition-all placeholder:text-gray-400 font-medium resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center">
                    <span className="mr-2">✓</span> Message envoyé avec succès (simulation).
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center">
                    <span className="mr-2">⚠</span> Une erreur est survenue.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                >
                  {isSubmitting ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>

      <ScrollToTop />
    </main>
  );
}
