import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'offline.html'],
      strategies: 'generateSW',
      workbox: {
        // Exclure les images jpg/jpeg du précaching, elles seront gérées par runtimeCaching
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,avif,woff,woff2}'],
        // Ignorer explicitement les grandes images
        globIgnores: [
          '**/background.jpg',
          '**/becaye.jpg',
          '**/chimere.jpg',
          '**/elhadjmalick.jpg',
          '**/ismaila.jpg',
          '**/mademba.jpg'
        ],
        navigateFallback: '/offline.html',
        navigateFallbackDenylist: [/\/api\//],
        offlineGoogleAnalytics: false,
        // Augmenter la limite de taille des fichiers à mettre en cache (10 MB)
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        runtimeCaching: [
          {
            // Cache page navigations
            urlPattern: /^https:\/\/[^\/]+\/?$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 // 24 hours
              }
            }
          },
          {
            // Cache small images (png, svg, webp, avif) with stale-while-revalidate strategy
            urlPattern: /\.(?:png|svg|gif|webp|avif)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'small-images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
              }
            }
          },
          {
            // Cache large images (jpg, jpeg) with network-first strategy
            // Ces images sont généralement plus volumineuses et moins critiques
            urlPattern: /\.(?:jpg|jpeg)$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'large-images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
              },
              networkTimeoutSeconds: 3 // Timeout court pour ne pas bloquer l'UI
            }
          },
          {
            // Cache CSS/JS with stale-while-revalidate
            urlPattern: /\.(?:js|css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'assets-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
              }
            }
          },
          {
            // Cache fonts
            urlPattern: /\.(?:woff|woff2|ttf|otf|eot)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 365 * 24 * 60 * 60 // 1 year
              }
            }
          },
          {
            // Cache API responses
            urlPattern: /\/api\//,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 5 * 60 // 5 minutes
              },
              networkTimeoutSeconds: 10
            }
          }
        ]
      },
      manifest: {
        name: 'Comité Inter-Universitaire',
        short_name: 'CIU',
        description: 'Site officiel du Comité Inter-Universitaire',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  
  // Optimisations de build
  build: {
    // Code splitting manuel pour optimiser les chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks séparés
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
          ui: ['lucide-react', 'clsx', 'tailwind-merge'],
          dates: ['date-fns'],
          maps: ['leaflet', 'react-leaflet']
        }
      }
    },
    
    // Optimisations supplémentaires
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log en prod
        drop_debugger: true
      }
    },
    
    // Taille limite des chunks
    chunkSizeWarningLimit: 1000,
    
    // Optimiser les assets
    assetsInlineLimit: 4096, // Inline les assets < 4kb
  },
  
  // Optimisations de développement
  server: {
    hmr: {
      overlay: false // Désactiver l'overlay d'erreur en dev
    }
  },
  
  // Préchargement des modules
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'date-fns'
    ]
  }
})
