# Guide d'Ajout des Photos des Membres

## 📸 Comment ajouter une photo de membre

### 1. Ajouter la photo dans le dossier public
```bash
# Placez la photo dans le dossier public/
# Format recommandé: nom-prenom.jpeg ou nom-prenom.jpg
public/
├── arona.jpeg ✅ (déjà ajouté)
├── khalifa.jpeg (à ajouter)
├── mouhamed-diouf.jpeg (à ajouter)
└── ...
```

### 2. Mettre à jour le fichier About.jsx

Dans `src/components/sections/About.jsx`, ajoutez le champ `photo` au membre correspondant :

```javascript
// Exemple - Arona Fall (déjà fait)
{
  name: "Arona Fall",
  university: "UADB",
  commission: "Commission d'Intelligence et de Perception Spirituelle",
  photo: "/arona.jpeg" // ✅ Ajouté
},

// Exemple - Pour ajouter Khalifa Ababacar Sy Traoré
{
  name: "Khalifa Ababacar Sy Traoré",
  university: "UIDT",
  commission: "Point Focal",
  photo: "/khalifa.jpeg" // À ajouter quand la photo sera disponible
},
```
## Utiliser le script pour optimiser la taille des photos pour réduire le temps de chargement des photos. 

## 🎨 Spécifications Techniques

### Format des Photos
- **Taille recommandée** : 200x200px minimum
- **Format** : JPEG ou PNG
- **Ratio** : Carré (1:1) de préférence
- **Qualité** : Bonne résolution pour l'affichage web

### Naming Convention
```bash
# Format: prenom-nom.jpeg (en minuscules, avec tirets)
arona-fall.jpeg
khalifa-traore.jpeg
mouhamed-diouf.jpeg
el-hadj-gaye.jpeg
```

### Affichage Final
- **Cercle** : 64x64px dans l'interface
- **Effet hover** : Agrandissement léger (scale 1.1)
- **Fallback** : Initiales sur fond dégradé si pas de photo
- **Accessibilité** : Alt text automatique

## 🚀 Déploiement

Après ajout de nouvelles photos :

```bash
# 1. Ajouter les fichiers
git add .

# 2. Commiter
git commit -m "📸 Add photos for [noms des membres]"

# 3. Pousser vers GitHub
git push origin main
```

## ✨ Résultat

- Les membres avec photos apparaissent avec leur vraie photo
- Interface cohérente et professionnelle
- Facile à maintenir et étendre
