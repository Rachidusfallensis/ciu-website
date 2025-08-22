#  CIU - Comité Inter-Universitaire

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.0-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF.svg)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.12-FF0055.svg)](https://www.framer.com/motion/)

Site web moderne et responsive du **Comité Inter-Universitaire**, structure estudiantine sous l'égide de **Dahiratoul Moustarchidina Wal Moustarchidaty**, regroupant les étudiants moustarchidines de toutes les universités publiques du Sénégal.

##  Aperçu

Le CIU unit plus de **500 étudiants** à travers **8 universités publiques** du Sénégal dans une communauté dédiée à l'équilibre harmonieux entre excellence académique et épanouissement spirituel.

### 🎯 Mission
Accompagner les étudiants moustarchidines dans leur parcours universitaire tout en préservant et enrichissant leurs valeurs spirituelles et morales.

## 🚀 Fonctionnalités

### 📱 **Interface Moderne**
-  Design responsive mobile-first
-  Animations fluides avec Framer Motion
-  Thème professionnel bleu et jaune
-  Navigation multi-pages avec React Router
-  Accessibilité WCAG conforme

###  **Sections Principales**
1. **🏠 Accueil** - Page d'atterrissage avec mission et services
2. **👥 À Propos** - Histoire, équipe dirigeante et valeurs
3. **🎓 Universités** - Carte interactive des 8 universités partenaires
4. **📅 Activités** - Calendrier d'événements et galerie
5. **📚 Ressources** - Bibliothèque et outils éducatifs
6. **📰 Actualités** - Dernières nouvelles et newsletter
7. **📞 Contact** - Formulaires et informations d'adhésion

### 🎨 **Design System**
- **Couleurs**: Gradients professionnels bleu/jaune
- **Typographie**: Inter font avec hiérarchie claire
- **Composants**: Buttons, cards, modals réutilisables
- **Animations**: Micro-interactions et transitions fluides

## 🛠️ Stack Technique

### **Frontend**
- **React 19.1.1** - Framework JavaScript moderne
- **TailwindCSS 3.4.0** - Framework CSS utility-first
- **Vite 7.1.2** - Build tool ultra-rapide
- **React Router DOM** - Navigation côté client

### **UI/UX**
- **Framer Motion** - Animations et transitions
- **Lucide React** - Icônes modernes et cohérentes
- **date-fns** - Gestion des dates pour le calendrier

### **Outils de Développement**
- **ESLint** - Linting du code
- **PostCSS** - Traitement CSS avancé
- **Autoprefixer** - Compatibilité navigateurs

## 🏃‍♂ Démarrage Rapide

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/aronafall/ciu-website.git
cd ciu-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173/`

### Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualisation du build
npm run lint     # Vérification du code
```

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── sections/       # Sections de pages
│   ├── Navbar.jsx      # Navigation principale
│   └── Footer.jsx      # Pied de page
├── pages/              # Pages de l'application
│   ├── HomePage.jsx    # Page d'accueil
│   ├── AboutPage.jsx   # À propos
│   ├── UniversitiesPage.jsx  # Universités
│   ├── ActivitiesPage.jsx    # Activités
│   ├── ResourcesPage.jsx     # Ressources
│   ├── NewsPage.jsx          # Actualités
│   └── ContactPage.jsx       # Contact
├── utils/              # Utilitaires
│   └── cn.js          # Classe utility merger
└── index.css          # Styles globaux
```


## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

**Comité Inter-Universitaire**
- 📧 Email: comiteinteru@gmail.com
- 📍 Adresse: Dakar, Sénégal


---

<div align="center">

**Fait avec ❤️ pour la communauté estudiantine moustarchidine du Sénégal**

</div>
