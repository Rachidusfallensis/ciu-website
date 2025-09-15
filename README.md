<div align="center">

# Comité Inter-Universitaire (CIU) Website

[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF)](https://www.framer.com/motion/)
[![i18n](https://img.shields.io/badge/i18n-Multilingual-green)](https://react.i18next.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8)](https://web.dev/progressive-web-apps/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_AA-green)](https://www.w3.org/WAI/standards-guidelines/wcag/)

</div>

## 📋 À propos

Site officiel du Comité Inter-Universitaire (CIU), la branche universitaire des Moustarchidines Juniors du Dahiratoul Moustarchidina Wal Moustarchidaty. Cette plateforme sert de point central d'information et de ressources pour les étudiants moustarchidines des universités publiques, écoles et instituts de formation du Sénégal.

## 🚀 Technologies

### Frontend
- **Framework**: React 19
- **Routeur**: React Router 7
- **Animations**: Framer Motion 12
- **CSS**: TailwindCSS 3
- **Icônes**: Lucide React

### Build & Performance
- **Bundler**: Vite 7
- **PWA**: Vite PWA Plugin
- **Optimisation**: Code splitting, lazy loading, images optimisées

### Qualité & Tests
- **Tests unitaires**: Jest, React Testing Library
- **Accessibilité**: Tests automatisés avec Axe
- **Linting**: ESLint

### Internationalisation
- **i18n**: react-i18next
- **Langues**: Français, Anglais

## ✨ Fonctionnalités

### Expérience utilisateur
- **Design responsive**: Mobile-first, optimisé pour tous les appareils
- **Transitions fluides**: Animations entre les pages avec Framer Motion
- **Mode sombre/clair**: Détection automatique des préférences système
- **Support tactile**: Gestion des événements tactiles pour les carousels et galeries

### Performance
- **PWA**: Installation sur l'écran d'accueil et fonctionnalités hors ligne
- **Lazy loading**: Chargement à la demande des composants et images
- **Optimisation des images**: Support des formats modernes (WebP, AVIF)
- **Mise en cache intelligente**: Stratégies de cache pour les ressources statiques

### Accessibilité
- **WCAG AA**: Conformité aux directives d'accessibilité
- **Navigation au clavier**: Focus visibles et skip links
- **ARIA**: Attributs pour les lecteurs d'écran
- **Réduction des mouvements**: Support de prefers-reduced-motion

### Internationalisation
- **Multilingue**: Support complet français et anglais
- **Détection automatique**: Détection de la langue du navigateur
- **SEO multilingue**: Balises hreflang et alternates

## 🛠️ Démarrage rapide

### Prérequis
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/ciu-website.git
cd ciu-website

# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev
```

### Développement

Le serveur de développement sera accessible à l'adresse http://localhost:5173/

### Production

```bash
# Construction pour la production avec optimisations
npm run build:prod

# Prévisualisation de la version de production
npm run serve
```

## 📜 Scripts disponibles

### Développement
- `npm run dev` : Démarre le serveur de développement
- `npm run lint` : Vérifie le code avec ESLint

### Tests
- `npm run test` : Lance les tests unitaires
- `npm run test:watch` : Lance les tests en mode watch
- `npm run test:coverage` : Lance les tests avec couverture
- `npm run test:a11y` : Lance les tests d'accessibilité

### Optimisation
- `npm run optimize-images` : Optimise les images pour la production
- `npm run generate-sitemap` : Génère le sitemap dynamique
- `npm run analyze` : Analyse la taille du bundle

### Sécurité
- `npm run security:audit` : Analyse les dépendances pour les vulnérabilités
- `npm run security:fix` : Corrige les vulnérabilités automatiquement

### Production
- `npm run build` : Construit le projet pour la production
- `npm run build:prod` : Construction complète avec optimisations
- `npm run preview` : Prévisualise la version de production
- `npm run serve` : Construction et prévisualisation

## 📂 Structure du projet

```
/
├── public/                  # Fichiers statiques
│   ├── _headers             # En-têtes de sécurité
│   ├── offline.html         # Page hors ligne
│   ├── manifest.json        # Manifest PWA
│   └── ...                  # Images et autres ressources
├── src/
│   ├── components/          # Composants React
│   │   ├── ui/              # Composants UI réutilisables
│   │   │   ├── Carousel.jsx # Composant de carousel
│   │   │   ├── HeroSection.jsx # Section héro réutilisable
│   │   │   └── ...         # Autres composants UI
│   │   ├── sections/        # Sections de page
│   │   ├── Navbar.jsx       # Barre de navigation
│   │   ├── Footer.jsx       # Pied de page
│   │   └── SEO.jsx          # Composant SEO
│   ├── hooks/               # Hooks personnalisés
│   │   ├── useMotionVariants.js # Hook pour animations
│   │   ├── useCarousel.js   # Hook pour carousels
│   │   └── useResponsive.js # Hook pour responsive design
│   ├── i18n/                # Configuration et fichiers de traduction
│   │   ├── i18n.js          # Configuration i18next
│   │   └── locales/         # Fichiers JSON de traduction
│   │       ├── fr.json      # Traductions françaises
│   │       └── en.json      # Traductions anglaises
│   ├── pages/               # Pages de l'application
│   │   ├── HomePage.jsx     # Page d'accueil
│   │   ├── AboutPage.jsx    # Page à propos
│   │   └── ...              # Autres pages
│   └── utils/               # Utilitaires
│       ├── cn.js            # Utilitaire de classe conditionnelle
│       └── structuredData.js # Générateurs de données structurées
├── scripts/                 # Scripts utilitaires
│   ├── optimize-images.js   # Optimisation d'images
│   ├── generate-sitemap.js  # Génération de sitemap
│   └── security-audit.js    # Audit de sécurité
├── __tests__/               # Tests
└── __mocks__/               # Mocks pour tests
```

## 🔍 Implémentations techniques

### Architecture

- **Architecture par composants**: Composants réutilisables et modulaires
- **Lazy loading**: Chargement à la demande des pages et composants lourds
- **Hooks personnalisés**: Logique métier encapsulée dans des hooks réutilisables
- **Context API**: Gestion d'état global pour les préférences utilisateur

### Performance

- **Lighthouse score > 90**: Performance, accessibilité, SEO et bonnes pratiques
- **Core Web Vitals**: Optimisation pour LCP, FID et CLS
- **Code splitting**: Chargement à la demande des modules JavaScript
- **Optimisation des images**: Formats modernes, dimensionnement approprié, lazy loading
- **Mise en cache**: Stratégies avancées avec workbox

### SEO

- **React Helmet Async**: Gestion dynamique des méta-tags
- **Données structurées**: JSON-LD pour une meilleure indexation
- **Sitemap dynamique**: Génération automatique du sitemap.xml
- **Canonical URLs**: Gestion des URL canoniques
- **Balises hreflang**: Support multilingue pour le référencement

### Accessibilité

- **WCAG AA**: Conformité aux directives d'accessibilité
- **Tests automatisés**: Vérification avec Axe
- **Sémantique HTML5**: Utilisation appropriée des balises sémantiques
- **Gestion du focus**: Navigation au clavier améliorée
- **ARIA**: Support des lecteurs d'écran
- **Réduction des mouvements**: Respect de prefers-reduced-motion

### Sécurité

- **Content Security Policy**: Protection contre les injections XSS
- **HSTS**: Forcer HTTPS
- **X-Content-Type-Options**: Protection contre le MIME sniffing
- **Referrer-Policy**: Contrôle des informations de référence
- **Permissions-Policy**: Restriction des API sensibles
- **Audit des dépendances**: Vérification automatique des vulnérabilités

## 🤝 Contribuer

### Processus de contribution

1. Forker le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Committer vos changements (`git commit -m 'feat: Add amazing feature'`)
4. Pousser sur la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

### Standards de code

- Suivre les conventions de nommage existantes
- Écrire des tests pour les nouvelles fonctionnalités
- Assurer la compatibilité avec les navigateurs modernes
- Maintenir l'accessibilité WCAG AA
- Utiliser les hooks et composants existants

## 📱 Compatibilité

- **Navigateurs**: Chrome, Firefox, Safari, Edge (2 dernières versions)
- **Mobile**: iOS 14+, Android 8+
- **Desktop**: Windows 10+, macOS 10.15+, Linux modernes

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

Pour toute question ou suggestion, veuillez contacter l'équipe à [comiteinteru@gmail.com](mailto:comiteinteru@gmail.com).

---

<div align="center">

**Comité Inter-Universitaire** - Unir les étudiants pour l'excellence académique et spirituelle

</div>