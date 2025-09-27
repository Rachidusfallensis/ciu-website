#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Images à optimiser (identifiées dans l'erreur de build)
const LARGE_IMAGES = [
  'background.jpg',
  'becaye.jpg',
  'chimere.jpg',
  'elhadjmalick.jpg',
  'ismaila.jpg',
  'mademba.jpg'
];

// Configuration pour l'optimisation
const OPTIMIZATION_CONFIG = {
  quality: 70,
  maxWidth: 1200,
  format: 'webp' // Convertir en WebP pour une meilleure compression
};

// Fonction pour vérifier si les outils nécessaires sont installés
const checkDependencies = () => {
  try {
    execSync('which convert', { stdio: 'ignore' });
  } catch (error) {
    console.error('❌ ImageMagick n\'est pas installé. Veuillez l\'installer:');
    console.error('   macOS: brew install imagemagick');
    console.error('   Ubuntu/Debian: sudo apt-get install imagemagick');
    console.error('   Windows: Télécharger depuis https://imagemagick.org/script/download.php');
    process.exit(1);
  }
};

// Fonction pour optimiser une image
const optimizeImage = (imagePath, outputPath, config) => {
  const cmd = `convert "${imagePath}" -strip -quality ${config.quality} -resize ${config.maxWidth}x\\> "${outputPath}"`;
  
  try {
    console.log(`🔄 Optimisation de ${path.basename(imagePath)}...`);
    execSync(cmd);
    
    // Obtenir les tailles avant/après
    const originalSize = fs.statSync(imagePath).size / (1024 * 1024);
    const optimizedSize = fs.statSync(outputPath).size / (1024 * 1024);
    const savings = originalSize - optimizedSize;
    const savingsPercent = (savings / originalSize) * 100;
    
    console.log(`✅ ${path.basename(imagePath)} optimisé: ${originalSize.toFixed(2)} MB → ${optimizedSize.toFixed(2)} MB (${savingsPercent.toFixed(1)}% d'économie)`);
    
    return {
      file: path.basename(imagePath),
      originalSize,
      optimizedSize,
      savings,
      savingsPercent
    };
  } catch (error) {
    console.error(`❌ Erreur lors de l'optimisation de ${imagePath}:`, error.message);
    return null;
  }
};

// Fonction pour convertir en WebP
const convertToWebP = (imagePath, outputPath, quality = 80) => {
  const cmd = `convert "${imagePath}" -quality ${quality} "${outputPath}"`;
  
  try {
    console.log(`🔄 Conversion de ${path.basename(imagePath)} en WebP...`);
    execSync(cmd);
    
    // Obtenir les tailles avant/après
    const originalSize = fs.statSync(imagePath).size / (1024 * 1024);
    const webpSize = fs.statSync(outputPath).size / (1024 * 1024);
    const savings = originalSize - webpSize;
    const savingsPercent = (savings / originalSize) * 100;
    
    console.log(`✅ ${path.basename(imagePath)} converti en WebP: ${originalSize.toFixed(2)} MB → ${webpSize.toFixed(2)} MB (${savingsPercent.toFixed(1)}% d'économie)`);
    
    return {
      file: path.basename(outputPath),
      originalSize,
      webpSize,
      savings,
      savingsPercent
    };
  } catch (error) {
    console.error(`❌ Erreur lors de la conversion en WebP de ${imagePath}:`, error.message);
    return null;
  }
};

// Fonction principale
const optimizeLargeImages = () => {
  checkDependencies();
  
  const publicDir = path.join(__dirname, '../public');
  const optimizedDir = path.join(publicDir, 'optimized');
  
  // Créer le répertoire optimized s'il n'existe pas
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }
  
  console.log('🚀 OPTIMISATION DES GRANDES IMAGES\n');
  console.log('='.repeat(60));
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  // Optimiser chaque image
  const results = LARGE_IMAGES.map(imageName => {
    const imagePath = path.join(publicDir, imageName);
    
    // Vérifier si l'image existe
    if (!fs.existsSync(imagePath)) {
      console.warn(`⚠️ Image non trouvée: ${imageName}`);
      return null;
    }
    
    // Chemin pour l'image optimisée (même format)
    const optimizedPath = path.join(optimizedDir, imageName);
    
    // Chemin pour la version WebP
    const webpPath = path.join(optimizedDir, `${path.parse(imageName).name}.webp`);
    
    // Optimiser l'image
    const result = optimizeImage(imagePath, optimizedPath, OPTIMIZATION_CONFIG);
    
    // Convertir en WebP
    const webpResult = convertToWebP(optimizedPath, webpPath, OPTIMIZATION_CONFIG.quality);
    
    if (result) {
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
    }
    
    return { ...result, webp: webpResult };
  }).filter(Boolean);
  
  // Afficher le résumé
  console.log('\n📊 RÉSUMÉ DE L\'OPTIMISATION:');
  console.log(`🖼️  ${results.length} images optimisées`);
  console.log(`📦 Taille originale totale: ${totalOriginalSize.toFixed(2)} MB`);
  console.log(`📦 Taille optimisée totale: ${totalOptimizedSize.toFixed(2)} MB`);
  console.log(`💰 Économie totale: ${(totalOriginalSize - totalOptimizedSize).toFixed(2)} MB (${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%)`);
  
  console.log('\n📝 ÉTAPES SUIVANTES:');
  console.log('1. Vérifiez les images optimisées dans le dossier public/optimized');
  console.log('2. Remplacez les images originales par les versions optimisées ou WebP');
  console.log('3. Mettez à jour les références dans le code pour utiliser les versions WebP avec fallback');
  console.log('4. Reconstruisez et redéployez le site');
};

// Exécution du script
if (import.meta.url === `file://${process.argv[1]}`) {
  optimizeLargeImages();
}

export { optimizeLargeImages };
