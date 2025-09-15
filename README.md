# Comité Inter-Universitaire (CIU) Website

Site officiel du Comité Inter-Universitaire, la branche universitaire des Moustarchidines Juniors du Dahiratoul Moustarchidina Wal Moustarchidaty.

## Technologies

- **Frontend**: React 19, React Router 7, Framer Motion, TailwindCSS
- **Build**: Vite 7
- **PWA**: Vite PWA Plugin
- **Internationalisation**: react-i18next
- **Tests**: Jest, React Testing Library

## Fonctionnalités

- Site responsive (mobile-first)
- Support multilingue (Français, Anglais)
- Animations et transitions fluides
- Mode hors ligne
- Optimisation SEO
- Accessibilité améliorée

## Démarrage rapide

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Construction pour la production
npm run build:prod

# Prévisualisation de la version de production
npm run serve
```

## Scripts disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Construit le projet pour la production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint
- `npm run test` : Lance les tests unitaires
- `npm run test:watch` : Lance les tests en mode watch
- `npm run test:coverage` : Lance les tests avec couverture
- `npm run test:a11y` : Lance les tests d'accessibilité
- `npm run optimize-images` : Optimise les images
- `npm run generate-sitemap` : Génère le sitemap
- `npm run security:audit` : Analyse les dépendances pour les vulnérabilités
- `npm run security:fix` : Corrige les vulnérabilités automatiquement

## Structure du projet

```
/
├── public/              # Fichiers statiques
│   ├── _headers         # En-têtes de sécurité
│   ├── offline.html     # Page hors ligne
│   └── ...
├── src/
│   ├── components/      # Composants React
│   │   ├── ui/          # Composants UI réutilisables
│   │   └── ...
│   ├── hooks/           # Hooks personnalisés
│   ├── i18n/            # Configuration et fichiers de traduction
│   │   └── locales/     # Fichiers JSON de traduction
│   ├── pages/           # Pages de l'application
│   └── utils/           # Utilitaires
├── scripts/             # Scripts utilitaires
└── tests/               # Tests
```

## Optimisations

### Performance

- **Code splitting** : Chargement paresseux des pages et composants lourds
- **Optimisation des images** : Support des formats modernes (WebP, AVIF)
- **Mise en cache** : Stratégies de mise en cache pour les ressources statiques
- **PWA** : Support hors ligne et installation sur l'écran d'accueil

### Accessibilité

- **Skip links** : Permet aux utilisateurs de clavier de sauter la navigation
- **ARIA** : Attributs ARIA pour les composants interactifs
- **Contraste** : Respect des ratios de contraste WCAG
- **Tests automatisés** : Tests d'accessibilité avec Axe

### Internationalisation

- **Traductions** : Support du français et de l'anglais
- **Détection de langue** : Détection automatique de la langue du navigateur
- **Sélecteur de langue** : Interface pour changer de langue

### Sécurité

- **En-têtes HTTP** : En-têtes de sécurité (CSP, HSTS, etc.)
- **Audit des dépendances** : Vérification des vulnérabilités
- **Protection CSRF** : Protection contre les attaques CSRF

## Contribuer

1. Forker le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Committer vos changements (`git commit -m 'Add some amazing feature'`)
4. Pousser sur la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.