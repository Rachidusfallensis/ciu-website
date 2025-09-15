import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../SEO';

// Mock i18n
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      language: 'fr'
    }
  })
}));

// Mock window.location
Object.defineProperty(window, 'location', {
  value: {
    href: 'https://ciu-senegal.com/test-page'
  },
  writable: true
});

// Mock import.meta.env
import.meta.env = {
  VITE_SITE_URL: 'https://ciu-senegal.com'
};

describe('SEO Component', () => {
  // Helper function to render the component with HelmetProvider
  const renderSEO = (props) => {
    const helmetContext = {};
    render(
      <HelmetProvider context={helmetContext}>
        <SEO {...props} />
      </HelmetProvider>
    );
    return helmetContext;
  };

  it('renders basic meta tags correctly', () => {
    const helmetContext = renderSEO({
      title: 'Test Title',
      description: 'Test description',
    });
    
    // Get the helmet data
    const { helmet } = helmetContext;
    
    // Check title
    expect(helmet.title.toString()).toContain('Test Title');
    
    // Check meta tags
    const metaTags = helmet.meta.toString();
    expect(metaTags).toContain('name="description" content="Test description"');
    expect(metaTags).toContain('property="og:title" content="Test Title"');
    expect(metaTags).toContain('property="og:description" content="Test description"');
  });
  
  it('renders with custom image and canonical URL', () => {
    const helmetContext = renderSEO({
      title: 'Test Title',
      description: 'Test description',
      image: '/custom-image.jpg',
      canonicalUrl: '/custom-path',
    });
    
    const { helmet } = helmetContext;
    
    // Check image and canonical URL
    const metaTags = helmet.meta.toString();
    const linkTags = helmet.link.toString();
    
    expect(metaTags).toContain('property="og:image" content="https://ciu-senegal.com/custom-image.jpg"');
    expect(linkTags).toContain('rel="canonical" href="https://ciu-senegal.com/custom-path"');
  });
  
  it('renders with absolute image URL', () => {
    const helmetContext = renderSEO({
      title: 'Test Title',
      description: 'Test description',
      image: 'https://example.com/image.jpg',
    });
    
    const { helmet } = helmetContext;
    const metaTags = helmet.meta.toString();
    
    expect(metaTags).toContain('property="og:image" content="https://example.com/image.jpg"');
  });
  
  it('renders with keywords', () => {
    const helmetContext = renderSEO({
      title: 'Test Title',
      description: 'Test description',
      keywords: ['test', 'seo', 'keywords'],
    });
    
    const { helmet } = helmetContext;
    const metaTags = helmet.meta.toString();
    
    expect(metaTags).toContain('name="keywords" content="test, seo, keywords"');
  });
  
  it('renders with structured data', () => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Test Page',
    };
    
    const helmetContext = renderSEO({
      title: 'Test Title',
      description: 'Test description',
      structuredData,
    });
    
    const { helmet } = helmetContext;
    const scriptTags = helmet.script.toString();
    
    expect(scriptTags).toContain('type="application/ld+json"');
    expect(scriptTags).toContain(JSON.stringify(structuredData));
  });
  
  it('renders alternate language links', () => {
    const helmetContext = renderSEO({
      title: 'Test Title',
      description: 'Test description',
    });
    
    const { helmet } = helmetContext;
    const linkTags = helmet.link.toString();
    
    expect(linkTags).toContain('rel="alternate" hrefLang="fr"');
    expect(linkTags).toContain('rel="alternate" hrefLang="en"');
  });
});
