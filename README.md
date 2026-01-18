<div align="center">

# Comité Inter-Universitaire (CIU) Website

[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF)](https://www.framer.com/motion/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8)](https://web.dev/progressive-web-apps/)

</div>

## 📋 À propos

Site officiel du **Comité Inter-Universitaire (CIU)**, la branche universitaire de la Dahiratoul Moustarchidina Wal Moustarchidat. Cette plateforme moderne et immersive sert de point de convergence pour les étudiants, offrant des ressources, des informations sur les événements et un guide d'orientation pour les nouveaux bacheliers.

Le site a été entièrement repensé pour offrir une expérience fluide et centrée sur l'utilisateur, reflétant l'excellence et le dynamisme de la communauté.

## 🚀 Technologies

### Frontend
- **Framework**: React 19
- **Routing**: React Router 7
- **Styling**: TailwindCSS 3
- **Animations**: Framer Motion 12 (Transitions fluides, scroll animations)
- **Cartographie**: Leaflet / React-Leaflet
- **Composants**: Lucide React (Icônes)

### Performance & Build
- **Bundler**: Vite 7
- **PWA**: Vite PWA Plugin (Installable, support hors-ligne)
- **SEO**: React Helmet Async
- **Tests**: Jest, React Testing Library

## ✨ Fonctionnalités Clés

### 🎨 Design & Expérience Utilisateur
- **Interface Premium**: Design épuré, typographie soignée, effets de verre (Glassmorphism) et cartes interactives.
- **Micro-interactions**: Animations subtiles au survol et au défilement pour une immersion totale.
- **Totalement Responsive**: Optimisé pour mobile, tablette et desktop (Layouts adaptatifs).

### 📚 Sections Principales
- **Accueil**: Hero section vidéo/animée, présentation de la mission.
- **Colloque Interuniversitaire**: Page événementielle complète avec galerie fluide, programme détaillé et modal vidéo.
- **Nouveaux Bacheliers**: Guide d'orientation interactif et carrousel des conseils universitaires.
- **Ressources**: Bibliothèque numérique avec filtres dynamiques (Académique, Spirituelle, Administrative).
- **Contact**: Formulaire de contact moderne avec validation en temps réel.

### ⚡ Performance
- **Lazy Loading**: Chargement différé des images et composants lourds.
- **Optimisation d'Images**: Scripts automatisés pour la conversion et la compression.
- **Accessibilité (a11y)**: Respect des normes WCAG AA (focus, contraste, sémantique).

## 🛠️ Installation et Démarrage

### Prérequis
- Node.js 18+
- npm 9+

### Étapes

1.  **Cloner le projet**
    ```bash
    git clone https://github.com/votre-username/ciu-website.git
    cd ciu-website
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```
    Le site sera accessible sur `http://localhost:5173`.

## 📜 Scripts Disponibles

- `npm run dev`: Lance le serveur de développement.
- `npm run build`: Compile le projet pour la production.
- `npm run preview`: Prévisualise le build de production localement.
- `npm run lint`: Analyse le code pour détecter les erreurs.
- `npm run test`: Lance les tests unitaires via Jest.
- `npm run optimize-images`: Optimise les images du dossier assets.

## 📂 Structure du Projet

```bash
/
├── public/                  # Fichiers statiques (favicon, robots.txt)
├── scripts/                 # Scripts utilitaires (images, sitemap, audit)
├── src/
│   ├── components/
│   │   ├── sections/        # Sections spécifiques (About, Universities...)
│   │   ├── ui/              # Composants UI réutilisables
│   │   ├── Navbar.jsx       # Navigation principale
│   │   └── Footer.jsx       # Pied de page
│   ├── pages/               # Composants de page (HomePage, ContactPage...)
│   ├── utils/               # Fonctions utilitaires (helpers, constantes)
│   ├── hooks/               # Custom React Hooks
│   ├── App.jsx              # Point d'entrée principal
│   └── main.jsx             # Montage de l'application
└── ...
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour proposer des modifications :

1.  Forkez le dépôt.
2.  Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalite`).
3.  Commitez vos changements (`git commit -m 'feat: ajout de ma fonctionnalité'`).
4.  Poussez vers la branche (`git push origin feature/ma-fonctionnalite`).
5.  Ouvrez une Pull Request.

## 📄 Licence

Ce projet est distribué sous la licence [MIT](LICENSE).

---

<div align="center">
  <strong>Comité Inter-Universitaire (CIU)</strong><br/>
  <em>Synergie Pluridisciplinaire, Horizons Multiples</em>
</div>
