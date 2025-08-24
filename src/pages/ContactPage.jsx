import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
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
      // Exemple avec mailto (ouverture du client email local)
      const mailtoLink = `mailto:comiteinteru@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\nUniversité: ${formData.university || 'Non spécifiée'}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      // Réinitialiser le formulaire après succès
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

  // Effacer automatiquement les messages de feedback après 5 secondes
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
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50/30 via-white to-accent-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Rejoignez</span> Notre Communauté
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
              Nous sommes là pour vous accompagner. Contactez-nous pour toute question 
              ou pour rejoindre le Comité Inter-Universitaire dans votre université.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom Complet *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                          placeholder="Votre nom complet"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                          placeholder="votre.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">
                      Université
                    </label>
                    <select
                      id="university"
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    >
                      <option value="">Sélectionnez votre université</option>
                      {universities.map((uni) => (
                        <option key={uni} value={uni}>{uni}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Objet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                        placeholder="Décrivez votre demande ou question..."
                      />
                    </div>
                  </div>

                  {/* Messages de feedback */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-xl"
                    >
                      <p className="text-green-800 font-medium">✓ Votre client email va s'ouvrir pour envoyer le message</p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-xl"
                    >
                      <p className="text-red-800 font-medium">✗ Erreur lors de l'envoi. Veuillez réessayer.</p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        Envoyer le Message
                      </div>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-2xl mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Principal</h3>
                      <p className="text-gray-600">comiteinteru@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-2xl mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                      <p className="text-gray-600"> 77 470 11 73 / 77 830 86 39</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-2xl mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Siège Social</h3>
                      <p className="text-gray-600">Chez Khalifa Ababacar Sy, Tivaouane</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Membership Benefits */}


              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.button
                  className="btn-secondary text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Télécharger la Brochure
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
