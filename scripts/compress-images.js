import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const QUALITY_PROFILES = {
    profile: 82,      // Photos de profil
    background: 85,   // Images de fond
    logo: 90          // Logos (qualité max)
};

async function optimizeImages() {
    console.log('🚀 Démarrage de l\'optimisation des images...\n');

    let totalSizeBefore = 0;
    let totalSizeAfter = 0;

    // Créer le dossier de backup s'il n'existe pas
    const backupDir = path.join(__dirname, '../public/backup-originals');
    try {
        await fs.mkdir(backupDir, { recursive: true });
        console.log('📁 Dossier de backup créé\n');
    } catch (err) {
        console.log('📁 Dossier de backup existe déjà\n');
    }

    // Optimiser les photos de profil
    console.log('👤 Optimisation des photos de profil...');
    const profilePhotos = [
        'becaye.jpg', 'mademba.jpg', 'ismaila.jpg',
        'elhadjmalick.jpg', 'chimere.jpg', 'mbaye.jpg',
        'seck.jpg', 'diouf.jpg', 'tallab.jpg',
        'adama.jpg', 'ousmane.jpg'
    ];

    for (const photo of profilePhotos) {
        const result = await optimizeFile(`public/${photo}`, QUALITY_PROFILES.profile, backupDir);
        if (result) {
            totalSizeBefore += result.before;
            totalSizeAfter += result.after;
        }
    }

    // Optimiser le background
    console.log('\n🖼️  Optimisation du background...');
    const bgResult = await optimizeFile('public/background.jpg', QUALITY_PROFILES.background, backupDir);
    if (bgResult) {
        totalSizeBefore += bgResult.before;
        totalSizeAfter += bgResult.after;
    }

    // Optimiser les logos PNG
    console.log('\n🏛️  Optimisation des logos...');
    const logos = ['uasz.png', 'uadb.png', 'uam.png', 'ucad.png', 'ugb.png', 'isep.png'];
    for (const logo of logos) {
        const result = await optimizeFilePNG(`public/${logo}`, backupDir);
        if (result) {
            totalSizeBefore += result.before;
            totalSizeAfter += result.after;
        }
    }

    // Résumé
    const totalReduction = ((1 - totalSizeAfter / totalSizeBefore) * 100).toFixed(1);
    const savedMB = ((totalSizeBefore - totalSizeAfter) / 1024 / 1024).toFixed(2);

    console.log('\n' + '='.repeat(60));
    console.log('✅ OPTIMISATION TERMINÉE !');
    console.log('='.repeat(60));
    console.log(`📊 Taille avant  : ${(totalSizeBefore / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📊 Taille après  : ${(totalSizeAfter / 1024 / 1024).toFixed(2)} MB`);
    console.log(`💾 Économie      : ${savedMB} MB (-${totalReduction}%)`);
    console.log(`📁 Backup        : public/backup-originals/`);
    console.log('='.repeat(60));
}

async function optimizeFile(filePath, quality, backupDir) {
    try {
        const fullPath = path.join(__dirname, '..', filePath);
        const stats = await fs.stat(fullPath);
        const sizeBefore = stats.size;

        // Backup
        const filename = path.basename(filePath);
        await fs.copyFile(fullPath, path.join(backupDir, filename));

        // Optimiser
        const tempDir = path.join(__dirname, '../public/temp-optimized');
        await fs.mkdir(tempDir, { recursive: true });

        await imagemin([fullPath], {
            destination: tempDir,
            plugins: [
                imageminMozjpeg({ quality })
            ]
        });

        // Remplacer l'original
        await fs.copyFile(path.join(tempDir, filename), fullPath);
        await fs.rm(tempDir, { recursive: true });

        const statsAfter = await fs.stat(fullPath);
        const sizeAfter = statsAfter.size;
        const reduction = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);

        console.log(`  ✓ ${filename}: ${(sizeBefore / 1024 / 1024).toFixed(2)}MB → ${(sizeAfter / 1024 / 1024).toFixed(2)}MB (-${reduction}%)`);

        return { before: sizeBefore, after: sizeAfter };
    } catch (err) {
        console.log(`  ⚠️  ${path.basename(filePath)}: fichier non trouvé ou erreur`);
        return null;
    }
}

async function optimizeFilePNG(filePath, backupDir) {
    try {
        const fullPath = path.join(__dirname, '..', filePath);
        const stats = await fs.stat(fullPath);
        const sizeBefore = stats.size;

        // Backup
        const filename = path.basename(filePath);
        await fs.copyFile(fullPath, path.join(backupDir, filename));

        // Optimiser
        const tempDir = path.join(__dirname, '../public/temp-optimized');
        await fs.mkdir(tempDir, { recursive: true });

        await imagemin([fullPath], {
            destination: tempDir,
            plugins: [
                imageminPngquant({ quality: [0.85, 0.95] })
            ]
        });

        // Remplacer l'original
        await fs.copyFile(path.join(tempDir, filename), fullPath);
        await fs.rm(tempDir, { recursive: true });

        const statsAfter = await fs.stat(fullPath);
        const sizeAfter = statsAfter.size;
        const reduction = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);

        console.log(`  ✓ ${filename}: ${(sizeBefore / 1024 / 1024).toFixed(2)}MB → ${(sizeAfter / 1024 / 1024).toFixed(2)}MB (-${reduction}%)`);

        return { before: sizeBefore, after: sizeAfter };
    } catch (err) {
        console.log(`  ⚠️  ${path.basename(filePath)}: fichier non trouvé ou erreur`);
        return null;
    }
}

optimizeImages().catch(console.error);
