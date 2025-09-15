import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Hooks personnalisés
import useMotionVariants from '../hooks/useMotionVariants';

// Composants UI réutilisables
import HeroSection from '../components/ui/HeroSection';
import SectionContainer from '../components/ui/SectionContainer';
import Carousel from '../components/ui/Carousel';
import { Heading, GradientText, Paragraph, Badge } from '../components/ui/Typography';

// Composant ScrollToTop existant
import ScrollToTop from '../components/ScrollToTop';

/**
 * Page d'exemple montrant comment utiliser les composants réutilisables
 */
export default function ResponsiveComponentsExample() {
  // Références pour les sections avec animation au défilement
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  
  // Utilisation du hook pour les variants d'animation
  const { containerVariants, itemVariants } = useMotionVariants();

  // Données d'exemple pour le carousel
  const carouselItems = [
    <div key="slide1" className="h-full relative bg-primary-700">
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Slide 1</h3>
          <p className="text-lg">Description du premier élément</p>
        </div>
      </div>
    </div>,
    <div key="slide2" className="h-full relative bg-secondary-700">
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Slide 2</h3>
          <p className="text-lg">Description du deuxième élément</p>
        </div>
      </div>
    </div>,
    <div key="slide3" className="h-full relative bg-accent-700">
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Slide 3</h3>
          <p className="text-lg">Description du troisième élément</p>
        </div>
      </div>
    </div>,
  ];

  return (
    <main className="pt-20">
      {/* Section Héro utilisant le composant réutilisable */}
      <HeroSection
        backgroundImage="/background.jpg"
        backgroundAlt="Image d'arrière-plan"
        id="hero"
        ariaLabelledby="hero-heading"
      >
        <div className="text-center">
          <Badge variant="primary" className="mb-6">Exemple</Badge>
          
          <Heading as="h1" size="3xl" id="hero-heading">
            Comité <GradientText>Inter-Universitaire</GradientText>
          </Heading>
          
          <Paragraph size="lg" className="text-primary-200 max-w-4xl mx-auto text-center mb-12">
            Unir les étudiants moustarchidines de toutes les universités du Sénégal 
            pour un équilibre harmonieux entre excellence académique et Tarbiya implicatif.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              to="/about"
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-700 font-semibold rounded-xl sm:rounded-2xl hover:bg-secondary-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 min-h-[44px] text-sm sm:text-base"
            >
              Découvrir le CIU
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              to="/nouveaux-bacheliers"
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-white hover:text-primary-700 transition-all duration-300 backdrop-blur-sm min-h-[44px] text-sm sm:text-base"
            >
              Nouveaux Bacheliers
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* Section avec SectionContainer */}
      <SectionContainer
        background="bg-gradient-to-br from-gray-50 to-primary-50/30"
        sectionRef={featuresRef}
        inView={isFeaturesInView}
        id="features"
        ariaLabelledby="features-heading"
      >
        <div className="text-center mb-10 sm:mb-16">
          <Badge>Fonctionnalités</Badge>
          <Heading as="h2" size="xl" id="features-heading">
            <GradientText>Composants</GradientText> Réutilisables
          </Heading>
          <Paragraph size="lg" className="max-w-3xl mx-auto text-gray-600">
            Ces composants vous permettent de construire rapidement des interfaces cohérentes et responsives.
          </Paragraph>
        </div>
        
        {/* Grille de fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Responsive",
              description: "Optimisés pour tous les appareils, du mobile au desktop",
            },
            {
              title: "Accessible",
              description: "Conformes aux normes d'accessibilité WCAG",
            },
            {
              title: "Performant",
              description: "Optimisés pour des performances maximales",
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Section avec Carousel */}
      <SectionContainer background="bg-white">
        <div className="text-center mb-10 sm:mb-16">
          <Badge variant="secondary">Carousel</Badge>
          <Heading as="h2" size="lg">
            Exemple de <GradientText>Carousel</GradientText>
          </Heading>
          <Paragraph>
            Un carousel responsive avec support tactile et navigation accessible.
          </Paragraph>
        </div>
        
        <Carousel 
          items={carouselItems}
          autoPlayInterval={5000}
          ariaLabel="Exemple de carousel"
        />
      </SectionContainer>

      {/* ScrollToTop Button */}
      <ScrollToTop />
    </main>
  );
}
