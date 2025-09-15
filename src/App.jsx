import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const UniversitiesPage = lazy(() => import('./pages/UniversitiesPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ColloquePage = lazy(() => import('./pages/ColloquePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NouveauxBacheliersPage = lazy(() => import('./pages/NouveauxBacheliersPage'));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          {/* Skip link for accessibility */}
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md">
            Aller au contenu principal
          </a>
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-16 w-16 bg-primary-200 rounded-full mb-4"></div>
                <div className="h-4 w-32 bg-primary-100 rounded"></div>
              </div>
            </div>
          }>
            <main id="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/universities" element={<UniversitiesPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/colloque" element={<ColloquePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/nouveaux-bacheliers" element={<NouveauxBacheliersPage />} />
              </Routes>
            </main>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;