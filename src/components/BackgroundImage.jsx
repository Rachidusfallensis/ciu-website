import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BackgroundImage({ src, alt, className = "" }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 animate-pulse" />
      )}
      
      {/* Background Image */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ 
          scale: imageLoaded ? 1 : 1.1, 
          opacity: imageLoaded ? 1 : 0 
        }}
        transition={{ duration: 2, ease: "easeOut" }}
        onLoad={() => setImageLoaded(true)}
        loading="eager"
      />
      
      {/* Gradient Overlays */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/70 to-accent-900/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      {/* Additional dark overlay for better text contrast */}
      <motion.div 
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`
        }}
      />
    </div>
  );
}
