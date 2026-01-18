import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, ArrowRight, Instagram, Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import ScrollToTop from '../components/ScrollToTop';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

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

    // Simulation d'envoi
    setTimeout(() => {
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
    }, 1500);
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
    <main className="pt-20 bg-slate-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Header - Premium Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            <span className="text-primary-600">Restons</span> en contact
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Une question, une suggestion ou simplement envie d'échanger ?<br />
            Notre équipe est à votre écoute pour vous répondre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Contact Info - Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Main Info Card */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

              <h2 className="text-3xl font-bold mb-8 relative z-10">Nos Coordonnées</h2>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl mr-5 flex-shrink-0 group-hover:bg-primary-600 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-primary-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:comiteinteru@gmail.com" className="text-slate-300 hover:text-white transition-colors block leading-relaxed">comiteinteru@gmail.com</a>
                    <span className="text-xs text-slate-500 uppercase tracking-wide mt-1 block">Réponse sous 24h</span>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl mr-5 flex-shrink-0 group-hover:bg-primary-600 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-primary-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Téléphone</h3>
                    <a href="tel:774701173" className="text-slate-300 hover:text-white transition-colors block leading-relaxed">+221 77 470 11 73</a>
                    <a href="tel:778308639" className="text-slate-300 hover:text-white transition-colors block leading-relaxed">+221 77 830 86 39</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl mr-5 flex-shrink-0 group-hover:bg-primary-600 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-primary-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Siège</h3>
                    <p className="text-slate-300 leading-relaxed">Chez Khalifa Ababacar Sy<br />Tivaouane, Sénégal</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  Suivez-nous
                  <span className="h-px flex-grow bg-white/10 ml-2"></span>
                </h3>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110">
                      <Icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Brochure Card */}
          </motion.div>

          {/* Right Form - Clean Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 sm:p-12 relative overflow-hidden">
              {/* Subtle Pattern */}
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-2">Envoyez-nous un message</h2>
              <p className="text-slate-500 mb-10">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Nom Complet</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary-500 focus:bg-white focus:ring-0 transition-all font-medium placeholder:text-slate-400"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary-500 focus:bg-white focus:ring-0 transition-all font-medium placeholder:text-slate-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Université</label>
                  <div className="relative">
                    <select
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary-500 focus:bg-white focus:ring-0 transition-all font-medium text-slate-600 appearance-none"
                    >
                      <option value="">Sélectionnez votre université</option>
                      {universities.map((uni) => (
                        <option key={uni} value={uni}>{uni}</option>
                      ))}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Sujet</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary-500 focus:bg-white focus:ring-0 transition-all font-medium placeholder:text-slate-400"
                    placeholder="L'objet de votre message"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-5 h-5 w-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary-500 focus:bg-white focus:ring-0 transition-all font-medium placeholder:text-slate-400 resize-none"
                      placeholder="Comment pouvons-nous vous aider aujourd'hui ?"
                    />
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 text-green-700 rounded-2xl flex items-center font-medium border border-green-100"
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-green-200 rounded-full mr-3 text-green-700 text-sm">✓</span>
                    Message envoyé avec succès !
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 text-red-700 rounded-2xl flex items-center font-medium border border-red-100"
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-red-200 rounded-full mr-3 text-red-700 text-sm">!</span>
                    Une erreur est survenue. Veuillez réessayer.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-primary-600 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                  whileHover={!isSubmitting ? { scale: 1.01, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <Send className="w-5 h-5 ml-2" />
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
