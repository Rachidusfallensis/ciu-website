#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration de déploiement
const DEPLOY_CONFIG = {
  domain: 'votre-domaine.com', // À remplacer
  buildDir: 'dist',
  backupDir: 'backup',
  optimizationsEnabled: true
};

// Couleurs pour les logs
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

const log = (message, color = 'reset') => {
  console.log(`${colors[color]}${message}${colors.reset}`);
};

// Vérifications pré-déploiement
const preDeploymentChecks = () => {
  log('\n🔍 VÉRIFICATIONS PRÉ-DÉPLOIEMENT', 'cyan');
  log('='.repeat(50), 'cyan');

  const checks = [];

  // 1. Vérifier que le build fonctionne
  try {
    log('\n✅ Test du build...', 'yellow');
    execSync('npm run build', { stdio: 'pipe' });
    checks.push({ name: 'Build', status: 'OK', color: 'green' });
  } catch (error) {
    checks.push({ name: 'Build', status: 'ÉCHEC', color: 'red', error: error.message });
  }

  // 2. Vérifier la taille des bundles
  try {
    const distPath = path.join(__dirname, '../dist');
    if (fs.existsSync(distPath)) {
      const stats = fs.statSync(distPath);
      const files = fs.readdirSync(distPath);
      const jsFiles = files.filter(f => f.endsWith('.js'));
      const cssFiles = files.filter(f => f.endsWith('.css'));
      
      log(`\n📦 Analyse des bundles:`, 'yellow');
      log(`   - ${jsFiles.length} fichiers JS`);
      log(`   - ${cssFiles.length} fichiers CSS`);
      
      checks.push({ name: 'Bundle Analysis', status: 'OK', color: 'green' });
    }
  } catch (error) {
    checks.push({ name: 'Bundle Analysis', status: 'ÉCHEC', color: 'red' });
  }

  // 3. Vérifier les fichiers SEO
  const seoFiles = ['robots.txt', 'sitemap.xml', 'manifest.json'];
  seoFiles.forEach(file => {
    const filePath = path.join(__dirname, '../public', file);
    if (fs.existsSync(filePath)) {
      checks.push({ name: `SEO: ${file}`, status: 'OK', color: 'green' });
    } else {
      checks.push({ name: `SEO: ${file}`, status: 'MANQUANT', color: 'yellow' });
    }
  });

  // 4. Vérifier les images
  try {
    const publicPath = path.join(__dirname, '../public');
    const imageFiles = fs.readdirSync(publicPath).filter(f => 
      /\.(jpg|jpeg|png|webp|gif)$/i.test(f)
    );
    
    let totalSize = 0;
    imageFiles.forEach(file => {
      const stats = fs.statSync(path.join(publicPath, file));
      totalSize += stats.size;
    });
    
    const totalMB = Math.round(totalSize / (1024 * 1024) * 100) / 100;
    log(`\n🖼️  Images: ${imageFiles.length} fichiers, ${totalMB} MB total`);
    
    if (totalMB > 10) {
      checks.push({ name: 'Images Size', status: 'ATTENTION', color: 'yellow', note: `${totalMB}MB - Optimisation recommandée` });
    } else {
      checks.push({ name: 'Images Size', status: 'OK', color: 'green', note: `${totalMB}MB` });
    }
  } catch (error) {
    checks.push({ name: 'Images Check', status: 'ERREUR', color: 'red' });
  }

  // Afficher le résumé
  log('\n📋 RÉSUMÉ DES VÉRIFICATIONS:', 'cyan');
  checks.forEach(check => {
    const icon = check.status === 'OK' ? '✅' : check.status === 'ATTENTION' ? '⚠️' : '❌';
    log(`${icon} ${check.name}: ${check.status}${check.note ? ` (${check.note})` : ''}`, check.color);
  });

  const errors = checks.filter(c => c.status === 'ÉCHEC');
  const warnings = checks.filter(c => c.status === 'ATTENTION' || c.status === 'MANQUANT');

  if (errors.length > 0) {
    log(`\n❌ ${errors.length} erreur(s) critique(s) détectée(s). Déploiement non recommandé.`, 'red');
    return false;
  }

  if (warnings.length > 0) {
    log(`\n⚠️  ${warnings.length} avertissement(s). Le déploiement peut continuer mais des optimisations sont recommandées.`, 'yellow');
  } else {
    log('\n🎉 Tous les contrôles sont passés ! Prêt pour le déploiement.', 'green');
  }

  return true;
};

// Générer les recommandations de déploiement
const generateDeploymentGuide = () => {
  log('\n📚 GUIDE DE DÉPLOIEMENT', 'magenta');
  log('='.repeat(50), 'magenta');

  log('\n🌐 HÉBERGEMENT RECOMMANDÉ:', 'cyan');
  log('• Vercel (Recommandé pour React)');
  log('• Netlify (Excellent pour les sites statiques)');
  log('• GitHub Pages (Gratuit)');
  log('• Firebase Hosting');
  log('• AWS S3 + CloudFront');

  log('\n⚡ OPTIMISATIONS AVANT DÉPLOIEMENT:', 'cyan');
  log('1. Optimiser les images (exécuter: node scripts/optimize-images.js)');
  log('2. Configurer la compression gzip/brotli');
  log('3. Activer le cache des assets statiques');
  log('4. Configurer les headers de sécurité');
  log('5. Tester sur différents appareils');

  log('\n🔧 CONFIGURATION SERVEUR:', 'cyan');
  log('• Redirection HTTPS obligatoire');
  log('• Compression gzip/brotli activée');
  log('• Cache des assets: 1 an');
  log('• Cache HTML: 1 heure');
  log('• Headers de sécurité (CSP, HSTS, etc.)');

  log('\n📊 MONITORING POST-DÉPLOIEMENT:', 'cyan');
  log('• Google PageSpeed Insights');
  log('• GTmetrix');
  log('• WebPageTest');
  log('• Lighthouse CI');

  log('\n🚀 COMMANDES DE DÉPLOIEMENT RAPIDE:', 'cyan');
  log('\n# Vercel:');
  log('npm install -g vercel');
  log('vercel --prod');
  
  log('\n# Netlify:');
  log('npm install -g netlify-cli');
  log('netlify deploy --prod --dir=dist');
  
  log('\n# GitHub Pages:');
  log('npm install -g gh-pages');
  log('gh-pages -d dist');

  log('\n📝 FICHIERS À PERSONNALISER AVANT DÉPLOIEMENT:', 'yellow');
  log('• public/sitemap.xml (remplacer votre-domaine.com)');
  log('• src/components/SEOHead.jsx (baseUrl)');
  log('• public/robots.txt (URL du sitemap)');
  log('• public/manifest.json (URLs et icônes)');
};

// Script principal
const main = () => {
  log('🚀 ASSISTANT DE DÉPLOIEMENT CIU', 'magenta');
  log('='.repeat(60), 'magenta');

  // Vérifications
  const checksPass = preDeploymentChecks();

  // Guide de déploiement
  generateDeploymentGuide();

  // Conclusion
  if (checksPass) {
    log('\n✅ PRÊT POUR LE DÉPLOIEMENT !', 'green');
    log('Suivez les étapes du guide ci-dessus pour déployer votre site.', 'green');
  } else {
    log('\n❌ CORRECTIONS NÉCESSAIRES', 'red');
    log('Corrigez les erreurs identifiées avant de déployer.', 'red');
  }

  log('\n📞 SUPPORT:', 'cyan');
  log('En cas de problème, vérifiez les logs et la documentation de votre hébergeur.');
};

// Exécution
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
