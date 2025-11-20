import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * SEO component for managing meta tags, structured data and other SEO-related elements
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.image - URL to the page's featured image
 * @param {string} props.canonicalUrl - Canonical URL for the page
 * @param {string} props.type - Page type (website, article, etc.)
 * @param {Object} props.structuredData - Structured data for the page (JSON-LD)
 * @param {Array} props.keywords - Keywords for the page
 */
const SEO = ({
  title,
  description,
  image = '/logo.jpg',
  canonicalUrl,
  type = 'website',
  structuredData = null,
  keywords = [],
}) => {
  const currentLanguage = 'fr';
  
  // Build the full URL for the image
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://ciu-senegal.com';
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  // Build the full canonical URL
  const fullCanonicalUrl = canonicalUrl ? 
    (canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`) : 
    window.location.href;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="image" content={fullImageUrl} />
      <link rel="canonical" href={fullCanonicalUrl} />
      <meta name="language" content={currentLanguage} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Comité Inter-Universitaire" />
      <meta property="og:locale" content={currentLanguage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  canonicalUrl: PropTypes.string,
  type: PropTypes.string,
  structuredData: PropTypes.object,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

export default SEO;
