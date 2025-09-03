import { lazy } from 'react';

// Pages principales avec lazy loading
export const HomePage = lazy(() => import('../pages/HomePage'));
export const AboutPage = lazy(() => import('../pages/AboutPage'));
export const UniversitiesPage = lazy(() => import('../pages/UniversitiesPage'));
export const NewsPage = lazy(() => import('../pages/NewsPage'));
export const ResourcesPage = lazy(() => import('../pages/ResourcesPage'));
export const ContactPage = lazy(() => import('../pages/ContactPage'));

// Pages spécialisées
export const NouveauxBacheliersPage = lazy(() => import('../pages/NouveauxBacheliersPage'));
export const ColloquePage = lazy(() => import('../pages/ColloquePage'));

// Sections avec lazy loading (pour les gros composants)
export const Universities = lazy(() => import('../components/sections/Universities'));
export const About = lazy(() => import('../components/sections/About'));
export const Activities = lazy(() => import('../components/sections/Activities'));
