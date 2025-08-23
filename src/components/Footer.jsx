import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { cn } from '../utils/cn';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white relative overflow-hidden" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-gradient-secondary rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">CIU</span>
              </div>
              <h3 className="text-xl font-bold">Comité Inter-Universitaire</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
            Le comité interuniversitaire est la branche universitaire des Moustarchidines Juniors du Dahiratoul Moustarchidina Wal Moustarchidaty. Il regroupe les étudiants moustarchidines des universités publiques, des écoles et instituts de formation du Sénégal.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className={cn(
                  "text-gray-300 hover:text-secondary-300 transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 rounded-md p-1"
                )}
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className={cn(
                  "text-gray-300 hover:text-secondary-300 transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 rounded-md p-1"
                )}
                aria-label="Suivez-nous sur Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className={cn(
                  "text-gray-300 hover:text-secondary-300 transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 rounded-md p-1"
                )}
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <nav aria-label="Liens rapides">
              <ul className="space-y-2">
                {[
                  { name: 'À Propos', href: '#about' },
                  { name: 'Universités', href: '#universities' },
                  { name: 'Activités', href: '#activities' },
                  { name: 'Ressources', href: '#resources' },
                  { name: 'Actualités', href: '#news' },
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className={cn(
                        "text-gray-300 hover:text-secondary-300 transition-colors duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 rounded-md"
                      )}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="text-secondary-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-gray-300 text-sm">
                  Dakar, Sénégal
                </p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-secondary-400 mr-2 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:comiteinteru@gmail.com"
                  className={cn(
                    "text-gray-300 hover:text-secondary-300 transition-colors duration-200 text-sm",
                    "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 rounded-md"
                  )}
                >
                  comiteinteru@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-secondary-400 mr-2 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+221774701173"
                  className={cn(
                    "text-gray-300 hover:text-secondary-300 transition-colors duration-200 text-sm",
                    "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 rounded-md"
                  )}
                >
                  77 470 11 73 / 77 830 86 39
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-700/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Comité Inter-Universitaire. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#privacy"
                className={cn(
                  "text-gray-300 hover:text-secondary-300 transition-colors duration-200 text-sm",
                  "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 rounded-md"
                )}
              >
                Politique de confidentialité
              </a>
              <a 
                href="#terms"
                className={cn(
                  "text-gray-300 hover:text-secondary-300 transition-colors duration-200 text-sm",
                  "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 rounded-md"
                )}
              >
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
