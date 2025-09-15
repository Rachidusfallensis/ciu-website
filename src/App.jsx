import { BrowserRouter as Router } from 'react-router-dom';
import { lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NetworkStatus from './components/ui/NetworkStatus';
import AnimatedRoutes from './components/ui/AnimatedRoutes';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const UniversitiesPage = lazy(() => import('./pages/UniversitiesPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ColloquePage = lazy(() => import('./pages/ColloquePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NouveauxBacheliersPage = lazy(() => import('./pages/NouveauxBacheliersPage'));

// Define routes with their transition types
const routes = [
  { path: '/', component: HomePage, transitionType: 'fade' },
  { path: '/about', component: AboutPage, transitionType: 'slideUp' },
  { path: '/universities', component: UniversitiesPage, transitionType: 'slide' },
  { path: '/resources', component: ResourcesPage, transitionType: 'slide' },
  { path: '/news', component: NewsPage, transitionType: 'scale' },
  { path: '/colloque', component: ColloquePage, transitionType: 'scale' },
  { path: '/contact', component: ContactPage, transitionType: 'slideUp' },
  { path: '/nouveaux-bacheliers', component: NouveauxBacheliersPage, transitionType: 'slide' },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <NetworkStatus />
        <div className="flex-1">
          {/* Skip link for accessibility */}
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md">
            Aller au contenu principal
          </a>
          <main id="main-content">
            <AnimatedRoutes routes={routes} />
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;