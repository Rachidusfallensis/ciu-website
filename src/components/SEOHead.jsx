import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ 
  title, 
  description, 
  keywords,
  image,
  type = 'website',
  author = 'CIU - Comité Inter-Universitaire'
}) => {
  const location = useLocation();
  const baseUrl = 'https://votre-domaine.com'; // À remplacer par votre domaine
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  const fullTitle = title ? `${title} | CIU - Comité Inter-Universitaire` : 'CIU - Comité Inter-Universitaire | Dahiratoul Moustarchidina Wal Moustarchidaty';
  const defaultDescription = "Le Comité Inter-Universitaire (CIU) unit les moustarchides étudiants des universités sénégalaises. Excellence académique, développement spirituel et fraternité.";
  const defaultKeywords = "CIU, Comité Inter-Universitaire, étudiants, universités, Sénégal, moustarchidines, DMWM, excellence académique, spiritualité, fraternité";
  const defaultImage = `${baseUrl}/background.jpg`;

  useEffect(() => {
    // Title
    document.title = fullTitle;
    
    // Meta tags de base
    updateMetaTag('description', description || defaultDescription);
    updateMetaTag('keywords', keywords || defaultKeywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'fr');
    
    // Open Graph
    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', description || defaultDescription, 'property');
    updateMetaTag('og:image', image || defaultImage, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', 'CIU - Comité Inter-Universitaire', 'property');
    updateMetaTag('og:locale', 'fr_SN', 'property');
    
    // Twitter Cards
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', fullTitle, 'name');
    updateMetaTag('twitter:description', description || defaultDescription, 'name');
    updateMetaTag('twitter:image', image || defaultImage, 'name');
    
    // Canonical URL
    updateCanonicalUrl(currentUrl);
    
    // JSON-LD Structured Data
    updateStructuredData({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Comité Inter-Universitaire (CIU)",
      "description": defaultDescription,
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`,
      "sameAs": [
        "https://facebook.com/ciu.senegal", // À remplacer par vos vrais liens
        "https://instagram.com/ciu.senegal",
        "https://linkedin.com/company/ciu-senegal"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SN",
        "addressRegion": "Dakar"
      }
    });
    
  }, [fullTitle, description, keywords, image, currentUrl, type, author]);

  const updateMetaTag = (name, content, attribute = 'name') => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateCanonicalUrl = (url) => {
    let element = document.querySelector('link[rel="canonical"]');
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'canonical');
      document.head.appendChild(element);
    }
    element.setAttribute('href', url);
  };

  const updateStructuredData = (data) => {
    let element = document.querySelector('script[type="application/ld+json"]');
    if (!element) {
      element = document.createElement('script');
      element.setAttribute('type', 'application/ld+json');
      document.head.appendChild(element);
    }
    element.textContent = JSON.stringify(data);
  };

  return null; // Ce composant ne rend rien visuellement
};

export default SEOHead;
