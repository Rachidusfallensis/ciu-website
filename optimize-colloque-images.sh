#!/bin/bash

# Script d'optimisation des images du colloque CIU
# Auteur: Assistant IA
# Date: $(date)

set -e  # Arrêter en cas d'erreur

# Vérifier la version de bash pour les tableaux associatifs
if [ "${BASH_VERSION%%.*}" -lt 4 ]; then
    echo "Ce script nécessite Bash 4.0 ou supérieur pour les tableaux associatifs"
    echo "Votre version: $BASH_VERSION"
    echo "Sur macOS, installez une version plus récente avec: brew install bash"
fi

# Configuration
SOURCE_DIR="public/colloque"
OPTIMIZED_DIR="public/colloque-optimized"
THUMBS_DIR="${OPTIMIZED_DIR}/thumbs"
GALLERY_DIR="${OPTIMIZED_DIR}/gallery"
HERO_DIR="${OPTIMIZED_DIR}/hero"

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction pour afficher des messages colorés
log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Vérifier si ImageMagick est installé
if ! command -v convert &> /dev/null; then
    log_error "ImageMagick n'est pas installé. Installez-le avec: brew install imagemagick"
    exit 1
fi

log_info "🚀 Démarrage de l'optimisation des images du colloque..."

# Créer les dossiers de destination
log_info "📁 Création des dossiers de destination..."
mkdir -p "$THUMBS_DIR" "$GALLERY_DIR" "$HERO_DIR"

# Compteurs pour les statistiques
total_files=0
processed_files=0
total_size_before=0
total_size_after=0

# Fonction pour optimiser une image
optimize_image() {
    local input_file="$1"
    local output_file="$2"
    local max_width="$3"
    local max_height="$4"
    local quality="$5"
    
    log_info "   Traitement: $(basename "$input_file")"
    
    # Obtenir la taille avant
    size_before=$(stat -f%z "$input_file" 2>/dev/null || echo 0)
    total_size_before=$((total_size_before + size_before))
    
    # Optimiser l'image
    convert "$input_file" \
        -resize "${max_width}x${max_height}>" \
        -quality "$quality" \
        -strip \
        -auto-orient \
        "$output_file"
    
    # Obtenir la taille après
    size_after=$(stat -f%z "$output_file" 2>/dev/null || echo 0)
    total_size_after=$((total_size_after + size_after))
    
    # Calculer la réduction
    if [ "$size_before" -gt 0 ]; then
        reduction=$(( (size_before - size_after) * 100 / size_before ))
        log_success "   ✅ $(basename "$output_file"): $(numfmt --to=iec $size_before) → $(numfmt --to=iec $size_after) (-${reduction}%)"
    fi
    
    processed_files=$((processed_files + 1))
}

# Fonction pour traiter un dossier
process_directory() {
    local source_subdir="$1"
    local category_name="$2"
    
    log_info "🎯 Traitement du dossier: $category_name"
    
    # Créer les sous-dossiers pour cette catégorie
    mkdir -p "${THUMBS_DIR}/${category_name}"
    mkdir -p "${GALLERY_DIR}/${category_name}"
    mkdir -p "${HERO_DIR}/${category_name}"
    
    # Compter les fichiers dans ce dossier
    local file_count=$(find "$source_subdir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l)
    log_info "   📊 ${file_count} images trouvées"
    
    # Traiter chaque image
    find "$source_subdir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r image_file; do
        total_files=$((total_files + 1))
        
        # Obtenir le nom de base du fichier
        filename=$(basename "$image_file")
        name_without_ext="${filename%.*}"
        
        # Générer les différentes versions
        log_info "   🔄 Génération des versions pour: $filename"
        
        # Vignette (300x200, qualité 80, <100KB)
        thumb_output="${THUMBS_DIR}/${category_name}/${name_without_ext}_thumb.jpg"
        optimize_image "$image_file" "$thumb_output" 300 200 80
        
        # Galerie (800x600, qualité 85, <500KB)
        gallery_output="${GALLERY_DIR}/${category_name}/${name_without_ext}_gallery.jpg"
        optimize_image "$image_file" "$gallery_output" 800 600 85
        
        # Hero/Bannière (1920x1080, qualité 90, <1MB)
        hero_output="${HERO_DIR}/${category_name}/${name_without_ext}_hero.jpg"
        optimize_image "$image_file" "$hero_output" 1920 1080 90
    done
}

# Traitement principal
log_info "📂 Analyse de la structure du dossier source..."

if [ ! -d "$SOURCE_DIR" ]; then
    log_error "Le dossier source '$SOURCE_DIR' n'existe pas!"
    exit 1
fi

# Fonction pour mapper les noms de dossiers
map_folder_name() {
    local folder_name="$1"
    case "$folder_name" in
        "day1") echo "ceremonie-ouverture" ;;
        "day 2") echo "panels-debats" ;;
        "day 3") echo "ateliers" ;;
        "ceremonie_cloture") echo "ceremonie-cloture" ;;
        *) echo "$folder_name" ;;
    esac
}

# Traiter chaque sous-dossier
for source_folder in "$SOURCE_DIR"/*; do
    if [ -d "$source_folder" ]; then
        folder_name=$(basename "$source_folder")
        
        # Ignorer les fichiers système
        if [[ "$folder_name" == .* ]]; then
            continue
        fi
        
        # Utiliser le mapping
        category_name=$(map_folder_name "$folder_name")
        
        process_directory "$source_folder" "$category_name"
    fi
done

# Calculer les statistiques finales
if [ "$total_size_before" -gt 0 ]; then
    total_reduction=$(( (total_size_before - total_size_after) * 100 / total_size_before ))
else
    total_reduction=0
fi

# Afficher le résumé
log_success "🎉 Optimisation terminée!"
echo
echo "📊 STATISTIQUES:"
echo "   • Images traitées: $processed_files"
echo "   • Taille avant: $(numfmt --to=iec $total_size_before)"
echo "   • Taille après: $(numfmt --to=iec $total_size_after)"
echo "   • Réduction totale: ${total_reduction}%"
echo "   • Économie d'espace: $(numfmt --to=iec $((total_size_before - total_size_after)))"
echo
echo "📁 STRUCTURE CRÉÉE:"
echo "   • $THUMBS_DIR/ (vignettes 300x200)"
echo "   • $GALLERY_DIR/ (galerie 800x600)"
echo "   • $HERO_DIR/ (bannières 1920x1080)"
echo
log_success "✨ Les images optimisées sont prêtes à être utilisées!"

# Générer un fichier de mapping JSON pour l'intégration
log_info "📝 Génération du fichier de mapping..."
cat > "${OPTIMIZED_DIR}/image-mapping.json" << EOF
{
  "colloque": {
    "ceremonie-ouverture": {
      "title": "Cérémonie d'ouverture",
      "description": "Discours inaugural et présentation officielle",
      "folder": "ceremonie-ouverture"
    },
    "panels-debats": {
      "title": "Panels et débats",
      "description": "Échanges entre experts et participants",
      "folder": "panels-debats"
    },
    "ateliers": {
      "title": "Ateliers thématiques",
      "description": "Travaux de groupe et réflexions",
      "folder": "ateliers"
    },
    "ceremonie-cloture": {
      "title": "Cérémonie de clôture",
      "description": "Restitutions et perspectives d'avenir",
      "folder": "ceremonie-cloture"
    }
  }
}
EOF

log_success "📄 Fichier de mapping créé: ${OPTIMIZED_DIR}/image-mapping.json"
echo
log_info "🚀 Prochaines étapes:"
echo "   1. Vérifiez les images optimisées dans $OPTIMIZED_DIR"
echo "   2. Intégrez les nouvelles images dans ColloquePage.jsx"
echo "   3. Supprimez l'ancien dossier si tout fonctionne bien"
echo
log_success "🎯 Optimisation complète!"
