import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Image as ImageIcon, Play, ExternalLink } from 'lucide-react';
import { cn } from '../utils/cn';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

// Configuration des albums
const albums = [
  {
    id: 'ceremonie-ouverture',
    title: 'Cérémonie d\'ouverture',
    description: 'Discours inaugural et présentation officielle',
    gradient: 'from-blue-500 to-indigo-600',
    coverImage: '1_thumb.jpg',
    type: 'photos'
  },
  {
    id: 'panels-debats',
    title: 'Panels et débats',
    description: 'Échanges entre experts et participants',
    gradient: 'from-green-500 to-teal-600',
    coverImage: '1_thumb.jpg',
    type: 'photos'
  },
  {
    id: 'ateliers',
    title: 'Ateliers thématiques',
    description: 'Travaux de groupe et réflexions',
    gradient: 'from-purple-500 to-pink-600',
    coverImage: '1_thumb.jpg',
    type: 'photos'
  },
  {
    id: 'ceremonie-cloture',
    title: 'Cérémonie de clôture',
    description: 'Restitutions et perspectives d\'avenir',
    gradient: 'from-orange-500 to-red-600',
    coverImage: '1_thumb.jpg',
    type: 'photos'
  },
  {
    id: 'videos-colloque',
    title: 'Vidéos du Colloque',
    description: 'Moments clés et interventions en vidéo',
    gradient: 'from-red-500 to-pink-600',
    coverImage: null,
    type: 'videos'
  }
];

// Configuration des vidéos YouTube
const youtubeVideos = [
  {
    id: 'ouverture',
    title: 'Cérémonie d\'Ouverture',
    description: 'Ouverture officielle du colloque',
    url: 'https://www.youtube.com/live/WzC89HTMPSw?si=R_QwKHg4uZSa_ieD',
    thumbnail: 'https://img.youtube.com/vi/WzC89HTMPSw/maxresdefault.jpg',
    duration: 'Live',
    type: 'ceremony'
  },
  {
    id: 'khalifa-traore',
    title: 'Allocution d\'Ouverture par Khalifa Traoré',
    description: 'Discours d\'ouverture par Khalifa Traoré',
    url: 'https://youtu.be/I6h8AA1Ru9s?si=LeEE6uWzPtJkXohp',
    thumbnail: 'https://img.youtube.com/vi/I6h8AA1Ru9s/maxresdefault.jpg',
    duration: 'Vidéo',
    type: 'speech'
  },
  {
    id: 'djiby-diakhate',
    title: 'Conférence Inaugurale Djiby Diakhaté',
    description: 'Conférence inaugurale du Professeur Djiby Diakhaté',
    url: 'https://youtu.be/z23xR_DkSzw?si=Gc0P1Bu3gx5Ia_52',
    thumbnail: 'https://img.youtube.com/vi/z23xR_DkSzw/maxresdefault.jpg',
    duration: 'Vidéo',
    type: 'conference'
  },
  {
    id: 'capitaine-ouverture',
    title: 'Discours Capitaine Ouverture Colloque',
    description: 'Intervention du Capitaine lors de l\'ouverture',
    url: 'https://youtu.be/m4XullXc8Fc?si=kMlwNL9qSKxDqZ0Y',
    thumbnail: 'https://img.youtube.com/vi/m4XullXc8Fc/maxresdefault.jpg',
    duration: 'Vidéo',
    type: 'keynote'
  },
  {
    id: 'itv-seneweb',
    title: 'Interview Seneweb - Adama Niang',
    description: 'Interview d\'Adama Niang pour Seneweb',
    url: 'https://youtu.be/N7b05CEcMd0?si=QkXcOEUYwoogzaBX',
    thumbnail: 'https://img.youtube.com/vi/N7b05CEcMd0/maxresdefault.jpg',
    duration: 'Vidéo',
    type: 'interview'
  },
  {
    id: 'cloture',
    title: 'Cérémonie de Clôture',
    description: 'Cérémonie de clôture du colloque',
    url: 'https://youtu.be/zRq4rFoRtGM?si=nmjFzJJP8P0RyVum',
    thumbnail: 'https://img.youtube.com/vi/zRq4rFoRtGM/maxresdefault.jpg',
    duration: 'Vidéo',
    type: 'ceremony'
  },
  {
    id: 'capitaine-cloture',
    title: 'Discours Capitaine Clôture',
    description: 'Discours de clôture du Capitaine',
    url: 'https://youtu.be/n0mpq1KTNEU?si=zv6cJrqrhWeh00Y2',
    thumbnail: 'https://img.youtube.com/vi/n0mpq1KTNEU/maxresdefault.jpg',
    duration: 'Vidéo',
    type: 'keynote'
  }
];

export default function ColloqueGallery() {
  const galleryRef = useRef(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albumImages, setAlbumImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.2 });

  // Fonction pour découvrir les images d'un album
  const discoverAlbumImages = async (albumId) => {
    setIsLoading(true);
    
    // Si c'est l'album vidéos, retourner directement les vidéos YouTube
    if (albumId === 'videos-colloque') {
      const videoItems = youtubeVideos.map(video => ({
        id: video.id,
        title: video.title,
        description: video.description,
        url: video.url,
        thumbnail: video.thumbnail,
        duration: video.duration,
        type: video.type,
        isVideo: true
      }));
      setAlbumImages(prev => ({ ...prev, [albumId]: videoItems }));
      setIsLoading(false);
      return videoItems;
    }
    
    const images = [];
    const basePath = `/colloque-optimized/thumbs/${albumId}/`;
    
    // Listes des images réelles par album
    const realImages = {
      'ceremonie-ouverture': [
        'capitaine', 'djiby_diakhate', 'babacar_diop_maire', 'dr_mamadou_djite_maire', 'responsables_dmwm',
        '1', '2', '3', '4', '5', '7', '8', '9', '10', '12', '13', '14', '16', '17', '18', '19', '20', '21'
      ],
      'panels-debats': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      'ateliers': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
      'ceremonie-cloture': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']
    };
    
    const albumImageList = realImages[albumId] || [];
    
    for (const imageName of albumImageList) {
      const imagePath = `${basePath}${imageName}_thumb.jpg`;
      try {
        const response = await fetch(imagePath, { method: 'HEAD' });
        if (response.ok) {
          images.push({
            id: imageName,
            thumb: imagePath,
            gallery: `/colloque-optimized/gallery/${albumId}/${imageName}_gallery.jpg`,
            hero: `/colloque-optimized/hero/${albumId}/${imageName}_hero.jpg`,
            alt: `${albums.find(a => a.id === albumId)?.title} - ${imageName}`,
            isVideo: false
          });
        }
      } catch (error) {
        // Image n'existe pas, on continue
      }
    }
    
    setAlbumImages(prev => ({ ...prev, [albumId]: images }));
    setIsLoading(false);
    return images;
  };

  // Ouvrir un album
  const openAlbum = async (album) => {
    setSelectedAlbum(album);
    if (!albumImages[album.id]) {
      await discoverAlbumImages(album.id);
    }
  };

  // Fermer l'album
  const closeAlbum = () => {
    setSelectedAlbum(null);
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  // Ouvrir le lightbox
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  // Fermer le lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  // Navigation dans le lightbox
  const nextImage = () => {
    const currentImages = albumImages[selectedAlbum.id] || [];
    const nextIndex = (currentImageIndex + 1) % currentImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(currentImages[nextIndex]);
  };

  const prevImage = () => {
    const currentImages = albumImages[selectedAlbum.id] || [];
    const prevIndex = currentImageIndex === 0 ? currentImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(currentImages[prevIndex]);
  };

  // Obtenir l'image de couverture d'un album
  const getAlbumCover = (album) => {
    if (album.type === 'videos') {
      // Pour l'album vidéos, utiliser la première vidéo comme couverture
      return youtubeVideos[0]?.thumbnail || '/api/placeholder/400/300';
    }
    return `/colloque-optimized/thumbs/${album.id}/${album.coverImage}`;
  };

  const currentImages = selectedAlbum ? (albumImages[selectedAlbum.id] || []) : [];

  return (
    <section 
      ref={galleryRef}
      className="section-padding bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Galerie</span> du Colloque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revivez les moments forts du premier colloque interuniversitaire du CIU
          </p>
        </motion.div>

        {!selectedAlbum ? (
          /* Albums Grid */
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isGalleryInView ? "visible" : "hidden"}
          >
            {albums.map((album, index) => (
              <motion.div
                key={album.id}
                variants={itemVariants}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                onClick={() => openAlbum(album)}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Album Cover */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={getAlbumCover(album)}
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback si l'image de couverture n'existe pas
                      e.target.src = '/api/placeholder/400/300';
                    }}
                  />
                  
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      {album.type === 'videos' ? (
                        <Play className="h-8 w-8 text-white" />
                      ) : (
                        <ImageIcon className="h-8 w-8 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Album Number */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full font-semibold">
                    {album.type === 'videos' ? 'Vidéos' : `Album ${index + 1}`}
                  </div>
                </div>

                {/* Album Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {album.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {album.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300">
                    {album.type === 'videos' ? (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        <span>Voir les vidéos</span>
                      </>
                    ) : (
                      <>
                        <Camera className="h-4 w-4 mr-2" />
                        <span>Parcourir les photos</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Album View */
          <div>
            {/* Album Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between mb-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedAlbum.title}
                </h3>
                <p className="text-gray-600">
                  {selectedAlbum.description} • {currentImages.length} {selectedAlbum.type === 'videos' ? 'vidéos' : 'photos'}
                </p>
              </div>
              <button
                onClick={closeAlbum}
                className="bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 p-3 rounded-full transition-all duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>

            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                <p className="mt-4 text-gray-600">Chargement...</p>
              </div>
            )}

            {/* Images/Videos Grid */}
            {!isLoading && (
              <motion.div
                className={cn(
                  "grid gap-6",
                  selectedAlbum.type === 'videos' 
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                )}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {currentImages.length > 0 ? (
                  currentImages.map((item, index) => (
                    <motion.div
                      key={`${selectedAlbum.id}-${item.id}`}
                      variants={itemVariants}
                      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                      onClick={() => item.isVideo ? window.open(item.url, '_blank') : openLightbox(item, index)}
                      whileHover={{ y: -5 }}
                    >
                      <div className={cn(
                        "relative overflow-hidden",
                        item.isVideo ? "aspect-video" : "aspect-[4/3]"
                      )}>
                        <img
                          src={item.isVideo ? item.thumbnail : item.thumb}
                          alt={item.isVideo ? item.title : item.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                              {item.isVideo ? (
                                <Play className="h-6 w-6 text-gray-800" />
                              ) : (
                                <Camera className="h-6 w-6 text-gray-800" />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Item Number/Duration */}
                        <div className="absolute top-3 left-3 bg-black/70 text-white text-sm px-2 py-1 rounded-full">
                          {item.isVideo ? item.duration : (index + 1)}
                        </div>

                        {/* External Link Icon for Videos */}
                        {item.isVideo && (
                          <div className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-full">
                            <ExternalLink className="h-4 w-4" />
                          </div>
                        )}
                      </div>

                      {/* Video Info */}
                      {item.isVideo && (
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    {selectedAlbum.type === 'videos' ? (
                      <>
                        <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Aucune vidéo disponible pour cette catégorie</p>
                      </>
                    ) : (
                      <>
                        <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Aucune image disponible pour cette catégorie</p>
                      </>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {/* Back to Albums Button */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={closeAlbum}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Retour aux albums
              </button>
            </motion.div>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && !selectedImage.isVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.hero}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                <h4 className="text-lg font-semibold">{selectedAlbum?.title}</h4>
                <p className="text-sm opacity-90">
                  Image {currentImageIndex + 1} sur {currentImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}