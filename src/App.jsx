import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UniversitiesPage from './pages/UniversitiesPage';
import ResourcesPage from './pages/ResourcesPage';
import NewsPage from './pages/NewsPage';
import ColloquePage from './pages/ColloquePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/universities" element={<UniversitiesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/colloque" element={<ColloquePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;