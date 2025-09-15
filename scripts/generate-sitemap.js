import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL of the website
const BASE_URL = 'https://ciu-senegal.com';

// Routes to include in the sitemap
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/universities', priority: '0.8', changefreq: 'monthly' },
  { path: '/news', priority: '0.9', changefreq: 'daily' },
  { path: '/resources', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'yearly' },
  { path: '/nouveaux-bacheliers', priority: '0.9', changefreq: 'monthly' },
  { path: '/colloque', priority: '0.8', changefreq: 'monthly' },
];

// Languages supported
const languages = ['fr', 'en'];

// Generate the sitemap XML
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  // Add each route to the sitemap
  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
`;

    // Add alternate language versions
    languages.forEach(lang => {
      sitemap += `    <xhtml:link 
      rel="alternate" 
      hreflang="${lang}" 
      href="${BASE_URL}${route.path}?lng=${lang}" 
    />
`;
    });

    sitemap += `  </url>
`;
  });

  sitemap += `</urlset>`;
  
  // Write the sitemap to the public directory
  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  
  console.log(`Sitemap generated at ${outputPath}`);
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

  const outputPath = path.resolve(__dirname, '../public/robots.txt');
  fs.writeFileSync(outputPath, robotsTxt);
  
  console.log(`robots.txt generated at ${outputPath}`);
}

// Run the generation
generateSitemap();
generateRobotsTxt();
