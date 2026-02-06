import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white relative overflow-hidden" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About Section */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gradient-secondary rounded-full flex items-center justify-center mr-2 sm:mr-3">
                <span className="text-white font-bold">CIU</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Comité Inter-Universitaire</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
              Le comité interuniversitaire est la branche universitaire des Moustarchidines Juniors du Dahiratoul Moustarchidina Wal Moustarchidaty. Il regroupe les moustarchides étudiants des universités publiques, des écoles et instituts de formation du Sénégal.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className={cn(
                  "text-gray-300 hover:text-secondary-300 transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 focus-visible:ring-2 rounded-md p-1",
                  "min-h-[44px] min-w-[44px] flex items-center justify-center"
                )}
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className={cn(
                  "text-gray-300 hover:text-secondary-300 transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 focus-visible:ring-2 rounded-md p-1",
                  "min-h-[44px] min-w-[44px] flex items-center justify-center"
                )}
                aria-label="Suivez-nous sur X"
              >
                {/* X Logo */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className={cn(
                  "text-gray-300 hover:text-secondary-300 transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 focus-visible:ring-2 rounded-md p-1",
                  "min-h-[44px] min-w-[44px] flex items-center justify-center"
                )}
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Liens Rapides</h4>
            <nav aria-label="Liens rapides">
              <ul className="space-y-1 sm:space-y-2">
                {[
                  { name: 'À Propos', to: '/about' },
                  { name: 'Universités', to: '/universities' },
                  { name: 'Actualités', to: '/news' },
                  { name: 'Ressources', to: '/resources' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className={cn(
                        "text-gray-300 hover:text-secondary-300 transition-colors duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 focus-visible:ring-2 rounded-md",
                        "block py-1 px-2 text-sm sm:text-base min-h-[44px] flex items-center"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start">
                <MapPin size={16} className="text-secondary-400 mr-2 mt-1 flex-shrink-0 sm:size-[18px]" aria-hidden="true" />
                <p className="text-gray-300 text-xs sm:text-sm">
                  Tivaouane, Sénégal
                </p>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-secondary-400 mr-2 flex-shrink-0 sm:size-[18px]" aria-hidden="true" />
                <a
                  href="mailto:comiteinteru@gmail.com"
                  className={cn(
                    "text-gray-300 hover:text-secondary-300 transition-colors duration-200 text-xs sm:text-sm",
                    "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 focus-visible:ring-2 rounded-md",
                    "py-1 px-2 min-h-[44px] flex items-center"
                  )}
                >
                  comiteinteru@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-secondary-400 mr-2 flex-shrink-0 sm:size-[18px]" aria-hidden="true" />
                <a
                  href="tel:+221774701173"
                  className={cn(
                    "text-gray-300 hover:text-secondary-300 transition-colors duration-200 text-xs sm:text-sm",
                    "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 focus-visible:ring-2 rounded-md",
                    "py-1 px-2 min-h-[44px] flex items-center"
                  )}
                >
                  77 470 11 73 / 77 830 86 39
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-700/50 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-0 text-center sm:text-left">
              © {currentYear} Comité Inter-Universitaire. Tous droits réservés.
            </p>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-6 items-center">
              <a
                href="#privacy"
                className={cn(
                  "text-gray-300 hover:text-secondary-300 transition-colors duration-200 text-xs sm:text-sm",
                  "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 focus-visible:ring-2 rounded-md",
                  "py-1 px-2 min-h-[44px] flex items-center justify-center sm:justify-start"
                )}
              >
                Politique de confidentialité
              </a>
              <a
                href="#terms"
                className={cn(
                  "text-gray-300 hover:text-secondary-300 transition-colors duration-200 text-xs sm:text-sm",
                  "focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-primary-900 focus-visible:ring-2 rounded-md",
                  "py-1 px-2 min-h-[44px] flex items-center justify-center sm:justify-start"
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
