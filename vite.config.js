import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
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
