#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '../public');

// Configuration
const CONFIG = {
  jpeg: { quality: 75 },
  png: { quality: [0.6, 0.8] },
  ignore: ['generated/**'] // Example
};

async function optimizeImages() {
  console.log('🚀 Démarrage de l\'optimisation des images...');

  // Analyze before
  const beforeSizes = getDirSize(PUBLIC_DIR);
  console.log(`📊 Taille initiale: ${formatSize(beforeSizes)}`);

  try {
    const files = await imagemin([`${PUBLIC_DIR}/*.{jpg,jpeg,png}`], {
      destination: PUBLIC_DIR,
      plugins: [
        imageminMozjpeg(CONFIG.jpeg),
        imageminPngquant(CONFIG.png)
      ]
    });

    // Analyze after
    const afterSizes = getDirSize(PUBLIC_DIR);
    console.log(`✅ Optimisé ${files.length} images.`);
    console.log(`📊 Nouvelle taille: ${formatSize(afterSizes)}`);
    console.log(`💰 Gain: ${formatSize(beforeSizes - afterSizes)}`);

  } catch (error) {
    console.error('❌ Erreur lors de l\'optimisation:', error);
    process.exit(1);
  }
}

function getDirSize(dir) {
  let size = 0;
  if (!fs.existsSync(dir)) return 0;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (!stats.isDirectory()) {
      if (/\.(jpg|jpeg|png)$/i.test(file)) {
        size += stats.size;
      }
    }
  }
  return size;
}

function formatSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

optimizeImages();
