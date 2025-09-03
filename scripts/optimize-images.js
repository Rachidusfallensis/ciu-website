#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration d'optimisation
const OPTIMIZATION_CONFIG = {
  // Images de profil/membres
  profiles: {
    maxWidth: 400,
    maxHeight: 400,
    quality: 80,
    format: 'webp'
  },
  
  // Logos d'universités
  logos: {
    maxWidth: 200,
    maxHeight: 200,
    quality: 90,
    format: 'webp'
  },
  
  // Image de fond
  backgrounds: {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 75,
    format: 'webp'
  },
  
  // Images de galerie
  gallery: {
    maxWidth: 800,
    maxHeight: 600,
    quality: 70,
    format: 'webp'
  }
};

// Fonction pour analyser la taille des fichiers
const analyzeImageSizes = () => {
  const publicDir = path.join(__dirname, '../public');
  let totalSize = 0;
  const imageFiles = [];

  const scanDirectory = (dir) => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        scanDirectory(filePath);
      } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
        const size = stats.size;
        totalSize += size;
        imageFiles.push({
          path: filePath,
          relativePath: path.relative(publicDir, filePath),
          size: size,
          sizeKB: Math.round(size / 1024),
          sizeMB: Math.round(size / (1024 * 1024) * 100) / 100
        });
      }
    });
  };

  scanDirectory(publicDir);

  return {
    totalSize,
    totalSizeKB: Math.round(totalSize / 1024),
    totalSizeMB: Math.round(totalSize / (1024 * 1024) * 100) / 100,
    imageFiles: imageFiles.sort((a, b) => b.size - a.size)
  };
};

// Recommandations d'optimisation
const generateOptimizationReport = () => {
  const analysis = analyzeImageSizes();
  
  console.log('\n🔍 ANALYSE DES IMAGES\n');
  console.log(`📊 Total: ${analysis.imageFiles.length} images`);
  console.log(`💾 Taille totale: ${analysis.totalSizeMB} MB (${analysis.totalSizeKB} KB)`);
  
  console.log('\n📋 TOP 10 DES PLUS GROS FICHIERS:\n');
  analysis.imageFiles.slice(0, 10).forEach((file, index) => {
    const status = file.sizeKB > 500 ? '🔴' : file.sizeKB > 200 ? '🟡' : '🟢';
    console.log(`${status} ${index + 1}. ${file.relativePath} - ${file.sizeKB} KB`);
  });

  console.log('\n💡 RECOMMANDATIONS:\n');
  
  // Images trop lourdes
  const heavyImages = analysis.imageFiles.filter(img => img.sizeKB > 500);
  if (heavyImages.length > 0) {
    console.log(`🔴 ${heavyImages.length} images > 500KB nécessitent une optimisation urgente`);
  }

  // Images moyennement lourdes
  const mediumImages = analysis.imageFiles.filter(img => img.sizeKB > 200 && img.sizeKB <= 500);
  if (mediumImages.length > 0) {
    console.log(`🟡 ${mediumImages.length} images entre 200-500KB peuvent être optimisées`);
  }

  // Images optimisées
  const optimizedImages = analysis.imageFiles.filter(img => img.sizeKB <= 200);
  console.log(`🟢 ${optimizedImages.length} images déjà optimisées (< 200KB)`);

  // Économies potentielles
  const potentialSavings = heavyImages.reduce((sum, img) => sum + (img.size * 0.6), 0) +
                          mediumImages.reduce((sum, img) => sum + (img.size * 0.3), 0);
  const savingsMB = Math.round(potentialSavings / (1024 * 1024) * 100) / 100;
  
  console.log(`\n💰 Économies potentielles: ~${savingsMB} MB (${Math.round(potentialSavings / analysis.totalSize * 100)}%)`);

  return analysis;
};

// Générer les commandes d'optimisation
const generateOptimizationCommands = (analysis) => {
  console.log('\n🛠️  COMMANDES D\'OPTIMISATION RECOMMANDÉES:\n');
  
  console.log('# Installation des outils (si nécessaire):');
  console.log('npm install -g imagemin-cli imagemin-webp imagemin-mozjpeg imagemin-pngquant\n');
  
  console.log('# Optimisation des photos de profil:');
  console.log('imagemin public/*.{jpg,jpeg,JPG,JPEG} --out-dir=public/optimized/profiles --plugin=mozjpeg --plugin.mozjpeg.quality=80\n');
  
  console.log('# Optimisation des logos:');
  console.log('imagemin public/*.png --out-dir=public/optimized/logos --plugin=pngquant --plugin.pngquant.quality=0.8-0.9\n');
  
  console.log('# Conversion en WebP (recommandé):');
  console.log('imagemin public/*.{jpg,jpeg,png,JPG,JPEG,PNG} --out-dir=public/optimized/webp --plugin=webp --plugin.webp.quality=80\n');
  
  console.log('# Optimisation du background:');
  console.log('imagemin public/background.jpg --out-dir=public/optimized --plugin=mozjpeg --plugin.mozjpeg.quality=75\n');
};

// Générer le rapport complet
const generateFullReport = () => {
  console.log('🚀 RAPPORT D\'OPTIMISATION POUR LE DÉPLOIEMENT\n');
  console.log('='.repeat(60));
  
  const analysis = generateOptimizationReport();
  generateOptimizationCommands(analysis);
  
  console.log('\n📝 ÉTAPES SUIVANTES:');
  console.log('1. Exécuter les commandes d\'optimisation ci-dessus');
  console.log('2. Remplacer les images originales par les versions optimisées');
  console.log('3. Mettre à jour les chemins dans le code si nécessaire');
  console.log('4. Tester le site avec les nouvelles images');
  console.log('5. Rebuild et redéployer\n');
  
  return analysis;
};

// Exécution du script
if (import.meta.url === `file://${process.argv[1]}`) {
  generateFullReport();
}
