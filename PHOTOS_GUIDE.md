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

## 📋 Liste des Membres à Photographier

### Points Focaux
- [ ] Khalifa Ababacar Sy Traoré (UIDT)
- [ ] Mouhamed Diouf (UGB) 
- [ ] El Hadj Gaye (UCAD)

### Commission Administrative
- [ ] Mame Ousmane Sarr (UIDT)
- [ ] Mouhamadou Fadilou Chimere Diallo (UADB)
- [ ] Mademba Gueye (UAM)

### Commission d'Intelligence et de Perception Spirituelle
- [x] Arona Fall (UADB) ✅ **Photo ajoutée**
- [ ] Adama Niang (UCAD)
- [ ] Mouhamed Seck (UGB)
- [ ] El Hadj Ndiouga (UIDT)
- [ ] Cheikh Becaye (UASZ)
- [ ] El Hadj Malick (USSEIN)
- [ ] Saer Diop (UASZ)

### Commission Trésor et Capacitation
- [ ] Tallab Diop (UCAD)
- [ ] Mame Gaydel Gaye (UADB)
- [ ] Moustapha Gueye (UASZ)

### Commission Logistique
- [ ] Mbaye Samb (UGB)
- [ ] Ismaila (USSEIN)

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
- Les autres gardent leurs initiales en attendant
- Interface cohérente et professionnelle
- Facile à maintenir et étendre
