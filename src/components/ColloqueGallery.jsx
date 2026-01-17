import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Image as ImageIcon, Play, ExternalLink, Film } from 'lucide-react';
import { cn } from '../utils/cn';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
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
      damping: 15
    }
  }
};

// Configuration des albums
const albums = [
  {
    id: 'videos-colloque',
    title: 'Vidéos du Colloque',
    description: 'Revivez les moments forts et interventions.',
    gradient: 'from-red-500 to-rose-600',
    coverImage: 'https://img.youtube.com/vi/WzC89HTMPSw/maxresdefault.jpg',
    type: 'videos',
    icon: Film
  },
  {
    id: 'ceremonie-ouverture',
    title: 'Cérémonie d\'ouverture',
    description: 'Discours inaugural et présentation.',
    gradient: 'from-blue-500 to-indigo-600',
    coverImage: '/colloque-optimized/thumbs/ceremonie-ouverture/1_thumb.jpg',
    type: 'photos',
    icon: ImageIcon
  },
  {
    id: 'panels-debats',
    title: 'Panels et débats',
    description: 'Échanges entre experts et participants.',
    gradient: 'from-green-500 to-teal-600',
    coverImage: '/colloque-optimized/thumbs/panels-debats/1_thumb.jpg',
    type: 'photos',
    icon: ImageIcon
  },
  {
    id: 'ateliers',
    title: 'Ateliers thématiques',
    description: 'Travaux de groupe et réflexions.',
    gradient: 'from-purple-500 to-pink-600',
    coverImage: '/colloque-optimized/thumbs/ateliers/1_thumb.jpg',
    type: 'photos',
    icon: ImageIcon
  },
  {
    id: 'ceremonie-cloture',
    title: 'Cérémonie de clôture',
    description: 'Restitutions et perspectives d\'avenir.',
    gradient: 'from-orange-500 to-amber-600',
    coverImage: '/colloque-optimized/thumbs/ceremonie-cloture/1_thumb.jpg',
    type: 'photos',
    icon: ImageIcon
  }
];

// Configuration des vidéos YouTube
const youtubeVideos = [
  {
    id: 'ouverture',
    title: 'Cérémonie d\'Ouverture',
    description: 'Ouverture officielle du colloque',
    url: 'https://www.youtube.com/embed/WzC89HTMPSw',
    thumbnail: 'https://img.youtube.com/vi/WzC89HTMPSw/maxresdefault.jpg',
    duration: 'Live',
    type: 'ceremony'
  },
  {
    id: 'khalifa-traore',
    title: 'Allocution d\'Ouverture ',
    description: 'Discours d\'ouverture par Khalifa Traoré',
    url: 'https://www.youtube.com/embed/I6h8AA1Ru9s',
    thumbnail: 'https://img.youtube.com/vi/I6h8AA1Ru9s/maxresdefault.jpg',
    duration: 'Vidéo',
    type: 'speech'
  },
  {
    id: 'djiby-diakhate',
    title: 'Conférence Inaugurale',
    description: 'Conférence inaugurale du Professeur Djiby Diakhaté',
    url: 'https://www.youtube.com/embed/z23xR_DkSzw',
    thumbnail: 'https://img.youtube.com/vi/z23xR_DkSzw/maxresdefault.jpg',
    duration: 'Vidéo',
    type: 'conference'
  },
  {
    id: 'capitaine-ouverture',
    title: 'Discours Capitaine Ouverture',
    description: 'Intervention du Capitaine lors de l\'ouverture',
    url: 'https://www.youtube.com/embed/m4XullXc8Fc',
    thumbnail: 'https://img.youtube.com/vi/m4XullXc8Fc/maxresdefault.jpg',
    duration: 'Vidéo',
    type: 'keynote'
  },
  {
    id: 'itv-press',
    title: 'Interview à la presse',
    description: 'Interview de Dr Adama Niang pour la presse',
    url: 'https://www.youtube.com/embed/N7b05CEcMd0',
    thumbnail: 'https://img.youtube.com/vi/N7b05CEcMd0/maxresdefault.jpg',
    duration: 'Vidéo',
    type: 'interview'
  },
  {
    id: 'cloture',
    title: 'Cérémonie de Clôture',
    description: 'Cérémonie de clôture du colloque',
    url: 'https://www.youtube.com/embed/zRq4rFoRtGM',
    thumbnail: 'https://img.youtube.com/vi/zRq4rFoRtGM/maxresdefault.jpg',
    duration: 'Vidéo',
    type: 'ceremony'
  },
  {
    id: 'capitaine-cloture',
    title: 'Discours Capitaine Clôture',
    description: 'Discours de clôture du Capitaine',
    url: 'https://www.youtube.com/embed/n0mpq1KTNEU',
    thumbnail: 'https://img.youtube.com/vi/n0mpq1KTNEU/maxresdefault.jpg',
    duration: 'Vidéo',
    type: 'keynote'
  }
];

export default function ColloqueGallery() {
  const galleryRef = useRef(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albumImages, setAlbumImages] = useState({});
  const [selectedMedia, setSelectedMedia] = useState(null); // Image or Video
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.2 });

  // Fonction pour découvrir les images d'un album
  const discoverAlbumImages = async (albumId) => {
    setIsLoading(true);

    // Si c'est l'album vidéos, retourner les vidéos
    if (albumId === 'videos-colloque') {
      const videoItems = youtubeVideos.map(video => ({
        ...video,
        isVideo: true
      }));
      setAlbumImages(prev => ({ ...prev, [albumId]: videoItems }));
      setIsLoading(false);
      return videoItems;
    }

    const images = [];
    const basePath = `/colloque-optimized/thumbs/${albumId}/`;

    // Listes des images réelles par album (SIMULATION - À adapter avec les vraies données)
    // Pour la démo, je génère quelques placeholders si les images n'existent pas
    const realImages = {
      'ceremonie-ouverture': Array.from({ length: 12 }, (_, i) => `${i + 1}`),
      'panels-debats': Array.from({ length: 8 }, (_, i) => `${i + 1}`),
      'ateliers': Array.from({ length: 8 }, (_, i) => `${i + 1}`),
      'ceremonie-cloture': Array.from({ length: 8 }, (_, i) => `${i + 1}`)
    };

    const albumImageList = realImages[albumId] || [];

    // Simulation de chargement
    setTimeout(() => {
      const dummyImages = albumImageList.map((name) => ({
        id: name,
        thumb: `/colloque-optimized/thumbs/${albumId}/${name}_thumb.jpg`,
        gallery: `/colloque-optimized/gallery/${albumId}/${name}_gallery.jpg`, // HQ path
        hero: `/colloque-optimized/hero/${albumId}/${name}_hero.jpg`, // Very HQ path
        alt: `${albumId} - ${name}`,
        isVideo: false
      }));
      setAlbumImages(prev => ({ ...prev, [albumId]: dummyImages }));
      setIsLoading(false);
    }, 500);

    return [];
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
    setSelectedMedia(null);
    setCurrentMediaIndex(0);
  };

  // Ouvrir le media (lightbox ou video modal)
  const openMedia = (media, index) => {
    setSelectedMedia(media);
    setCurrentMediaIndex(index);
  };

  // Fermer le media
  const closeMedia = () => {
    setSelectedMedia(null);
    setCurrentMediaIndex(0);
  };

  // Navigation
  const nextMedia = () => {
    const currentList = albumImages[selectedAlbum.id] || [];
    const nextIndex = (currentMediaIndex + 1) % currentList.length;
    setCurrentMediaIndex(nextIndex);
    setSelectedMedia(currentList[nextIndex]);
  };

  const prevMedia = () => {
    const currentList = albumImages[selectedAlbum.id] || [];
    const prevIndex = currentMediaIndex === 0 ? currentList.length - 1 : currentMediaIndex - 1;
    setCurrentMediaIndex(prevIndex);
    setSelectedMedia(currentList[prevIndex]);
  };

  // Keyboard Navigation
  useEffect(() => {
    if (!selectedMedia) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextMedia();
      if (e.key === 'ArrowLeft') prevMedia();
      if (e.key === 'Escape') closeMedia();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, currentMediaIndex, selectedAlbum]); // Dependencies to ensure state is fresh

  const currentList = selectedAlbum ? (albumImages[selectedAlbum.id] || []) : [];

  return (
    <section
      ref={galleryRef}
      className="section-padding bg-slate-50 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl -ml-20 -mb-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Gallery Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            <span className="text-primary-600">Galerie</span> du Colloque
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'ambiance unique de cet événement à travers nos albums photos et vidéos exclusifs.
          </p>
        </motion.div>

        {/* Albums Grid (Selection View) */}
        {!selectedAlbum && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isGalleryInView ? "visible" : "hidden"}
          >
            {albums.map((album) => (
              <motion.div
                key={album.id}
                variants={itemVariants}
                onClick={() => openAlbum(album)}
                className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = 'https://placehold.co/600x400'; }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${album.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 text-white">
                      <album.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{album.title}</h3>
                    <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                      {album.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold">
                      <span>{album.type === 'videos' ? 'Regarder' : 'Explorer'}</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Selected Album View */}
        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {/* Album Nav Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <button
                onClick={closeAlbum}
                className="flex items-center text-slate-500 hover:text-primary-600 transition-colors font-medium group"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-3 group-hover:border-primary-200 shadow-sm">
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </div>
                Retour aux albums
              </button>

              <div className="text-right">
                <h3 className="text-2xl font-bold text-slate-900">{selectedAlbum.title}</h3>
                <p className="text-slate-500 text-sm">{selectedAlbum.description}</p>
              </div>
            </div>

            {/* Grid Content */}
            {isLoading ? (
              <div className="flex justify-center py-20">
                <div className="w-10 h-10 border-4 border-primary-100 border-t-primary-600 rounded-full animate-spin" />
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {currentList.map((media, index) => (
                  <motion.div
                    key={media.id}
                    variants={itemVariants}
                    onClick={() => openMedia(media, index)}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-300">
                      <img
                        src={media.thumb || media.thumbnail} // Handle both types
                        alt="Media"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => { e.target.src = 'https://placehold.co/400x300'; }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                          {media.isVideo ? (
                            <Play className="w-6 h-6 text-primary-600 ml-1" />
                          ) : (
                            <ImageIcon className="w-6 h-6 text-slate-800" />
                          )}
                        </div>
                      </div>

                      {/* Video Badge */}
                      {media.isVideo && (
                        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded truncate">
                          Video
                        </div>
                      )}
                    </div>
                    {media.isVideo && (
                      <h4 className="mt-3 text-slate-900 font-bold leading-tight group-hover:text-primary-600 transition-colors">
                        {media.title}
                      </h4>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Media Modal (Lightbox / Video Player) */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
              onClick={closeMedia}
            >
              <button
                onClick={closeMedia}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>

              <div
                className="relative w-full max-w-6xl max-h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedMedia.isVideo ? (
                  <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={selectedMedia.url} // Embed URL
                      title={selectedMedia.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <img
                    src={selectedMedia.gallery || selectedMedia.hero || selectedMedia.thumb}
                    alt="Full View"
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  />
                )}

                {/* Navigation */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); prevMedia(); }}
                    className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextMedia(); }}
                    className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Footer Info */}
                <div className="mt-6 text-center text-white">
                  {selectedMedia.isVideo ? (
                    <h3 className="text-xl font-bold">{selectedMedia.title}</h3>
                  ) : (
                    <p className="text-white/70">
                      Image {currentMediaIndex + 1} sur {currentList.length}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}