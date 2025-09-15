/**
 * Utility functions for generating structured data (JSON-LD)
 */

/**
 * Generate structured data for the organization
 * @returns {Object} Organization structured data
 */
export const getOrganizationData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Comité Inter-Universitaire',
  alternateName: 'CIU',
  url: 'https://ciu-senegal.com',
  logo: 'https://ciu-senegal.com/logo.jpg',
  sameAs: [
    'https://www.facebook.com/comiteinteruniversitaire',
    'https://twitter.com/CIUSenegal',
    'https://www.instagram.com/ciusenegal/'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+221-77-470-11-73',
    contactType: 'customer service',
    email: 'comiteinteru@gmail.com',
    areaServed: 'SN',
    availableLanguage: ['French', 'English']
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tivaouane',
    addressRegion: 'Thiès',
    addressCountry: 'SN'
  }
});

/**
 * Generate structured data for a webpage
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @param {string} url - Page URL
 * @returns {Object} WebPage structured data
 */
export const getWebPageData = (title, description, url) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description: description,
  url: url,
  isPartOf: {
    '@type': 'WebSite',
    name: 'Comité Inter-Universitaire',
    url: 'https://ciu-senegal.com'
  }
});

/**
 * Generate structured data for an article
 * @param {Object} article - Article data
 * @param {string} article.title - Article title
 * @param {string} article.description - Article description
 * @param {string} article.url - Article URL
 * @param {string} article.image - Article image URL
 * @param {string} article.datePublished - Publication date (ISO format)
 * @param {string} article.dateModified - Modification date (ISO format)
 * @param {string} article.authorName - Author name
 * @returns {Object} Article structured data
 */
export const getArticleData = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = 'Comité Inter-Universitaire'
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description: description,
  image: image,
  datePublished: datePublished,
  dateModified: dateModified || datePublished,
  author: {
    '@type': 'Organization',
    name: authorName
  },
  publisher: {
    '@type': 'Organization',
    name: 'Comité Inter-Universitaire',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ciu-senegal.com/logo.jpg'
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url
  }
});

/**
 * Generate structured data for an event
 * @param {Object} event - Event data
 * @param {string} event.name - Event name
 * @param {string} event.description - Event description
 * @param {string} event.url - Event URL
 * @param {string} event.image - Event image URL
 * @param {string} event.startDate - Start date (ISO format)
 * @param {string} event.endDate - End date (ISO format)
 * @param {string} event.location - Event location
 * @returns {Object} Event structured data
 */
export const getEventData = ({
  name,
  description,
  url,
  image,
  startDate,
  endDate,
  location
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: name,
  description: description,
  image: image,
  startDate: startDate,
  endDate: endDate || startDate,
  url: url,
  location: {
    '@type': 'Place',
    name: location,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location,
      addressCountry: 'SN'
    }
  },
  organizer: {
    '@type': 'Organization',
    name: 'Comité Inter-Universitaire',
    url: 'https://ciu-senegal.com'
  }
});
