# CIU Website Improvements

This document outlines the improvements made to optimize performance, enhance accessibility, and add internationalization to the CIU website.

## Performance Optimization

### Code Splitting with React.lazy and Suspense

All major pages are now lazy-loaded, which significantly reduces the initial bundle size and improves the loading time:

```jsx
// App.jsx
import { lazy, Suspense } from 'react';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
// ...other pages

// Wrap routes in Suspense with a loading fallback
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
    {/* ...other routes */}
  </Routes>
</Suspense>
```

### Image Optimization

Enhanced the `OptimizedImage` component to support modern image formats with fallbacks:

```jsx
// components/ui/OptimizedImage.jsx
<picture>
  {/* AVIF format */}
  <source srcSet={avifSrc} type="image/avif" />
  {/* WebP format */}
  <source srcSet={webpSrc} type="image/webp" />
  {/* Original format fallback */}
  <img src={src} alt={alt} {...otherProps} />
</picture>
```

### Caching Strategies with Vite PWA

Implemented caching strategies for different types of assets:

- **Page navigations**: NetworkFirst strategy
- **Images**: StaleWhileRevalidate strategy with 30-day expiration
- **CSS/JS**: StaleWhileRevalidate strategy with 7-day expiration
- **Fonts**: CacheFirst strategy with 1-year expiration
- **API responses**: NetworkFirst strategy with 5-minute expiration

## Accessibility Enhancements

### Skip Links

Added a skip link at the top of the page to allow keyboard users to bypass navigation:

```jsx
<a href="#main-content" className="sr-only focus:not-sr-only ...">
  Skip to content
</a>
<main id="main-content">
  {/* Main content */}
</main>
```

### Keyboard Navigation

Improved keyboard navigation throughout the site:

- All interactive elements are now tabbable
- Clear focus states with `focus-visible` utility
- Proper tab order
- Minimum touch target size of 44x44 pixels

### ARIA Attributes

Added ARIA attributes to improve screen reader support:

- Landmarks for navigation, main content, etc.
- Labels for buttons and interactive elements
- Descriptions for complex components like carousels
- State attributes (expanded, pressed, etc.)

### Automated Accessibility Testing

Added an automated accessibility testing script using Axe and Puppeteer:

```bash
npm run test:a11y
```

## Internationalization (i18n)

### Setup with react-i18next

Integrated `react-i18next` for internationalization:

```jsx
// i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationFR from './locales/fr.json';
import translationEN from './locales/en.json';

// Configuration...
```

### Translation Files

Created JSON files for French and English translations:

```json
// fr.json
{
  "common": {
    "skipToContent": "Aller au contenu principal"
  },
  "navbar": {
    "home": "Accueil",
    "about": "À Propos"
  }
  // ...more translations
}
```

### Language Switching

Added a language toggle in the navbar:

```jsx
// components/Navbar.jsx
const { t, i18n } = useTranslation();

// Language selector button
<button onClick={() => i18n.changeLanguage('fr')}>
  Français
</button>
```

### Usage Example

Example of how to use translations in components:

```jsx
// Any component
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <h1>{t('home.hero.title')}</h1>
    <p>{t('home.hero.description')}</p>
  );
}
```

## How to Use These Improvements

### Code Splitting

- All pages are already lazy-loaded
- For heavy components, use the same pattern:
  ```jsx
  const HeavyComponent = lazy(() => import('./components/HeavyComponent'));
  ```

### Image Optimization

- Use the `OptimizedImage` component for all images
- Provide WebP and AVIF versions of images when possible

### Accessibility

- Run the accessibility test to check for issues:
  ```bash
  npm run test:a11y
  ```
- Fix any reported issues

### Internationalization

- Add new translations to the JSON files
- Use the `useTranslation` hook and `t()` function in components
- Switch languages using the toggle in the navbar

## Future Improvements

- Add more languages
- Implement automated accessibility testing in CI/CD pipeline
- Further optimize images with responsive sizes
- Add more comprehensive caching strategies
