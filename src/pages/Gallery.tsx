// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
// import springfestival from '../assets/spring turkey.jpeg';
// import together from '../assets/supportive moments2.JPG';
// import cheers from '../assets/enjoy2.jpg';
// import springCollective from '../assets/spring collective.jpg';
// import enjoy from '../assets/enjoy.jpg';
// import flag from '../assets/flag love.jpg';
// import kamawal from '../assets/kamawal.jpg';
// import lovetoflag from '../assets/love to flag.jpg';
// import mashal from '../assets/5.jpg';
// import qandari from '../assets/qandahari.jpg';
// import award from '../assets/award.jpg';
// import trip from '../assets/vip/triptogether.jpeg';
// import sport from '../assets/vip/sport2.jpeg';
// import mzkhqu from '../assets/vip/mzkhqu.jpeg';
// import nature from '../assets/vip/onlyme1.jpeg';
// import azkh  from '../assets/vip/azkh.jpeg';


// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const featuredImages = [
//     {
//       id: 1,
//       title: 'Culture Exhibition',
//       image: springfestival,
//       description: 'Annual celebration of Afghan culture featuring traditional music, poetry recitations, and authentic cuisine prepared by our community members.',
//       category: 'Cultural Events',
//     },
//     {
//       id: 2,
//       title: 'Academic Excellence Workshop',
//       image: together,
//       description: 'Interactive workshop on study techniques, research methodologies, and academic success strategies for Afghan students at NUML.',
//       category: 'Academic',
//     },
//     {
//       id: 3,
//       title: 'Enjoying the moment after the ceremony',
//       image: cheers,
//       description: 'Council members participating in graduation ceremony and enjoying after the ceremony.',
//       category: 'Council Service',
//     },
//     {
//       id: 4,
//       title: 'Graduation Ceremony 2025',
//       image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200',
//       description: 'Celebrating the achievements of our graduating Afghan students, marking their successful completion of studies at NUML.',
//       category: 'Graduation',
//     },
//     {
//       id: 5,
//       title: 'Spring Festival',
//       image: springCollective,
//       description: 'Enjoying the Spring Festival with friends and guests.',
//       category: 'Sessional Events',
//     },
//      {
//       id: 6,
//       title: 'Trip',
//       image: trip,
//       description: 'Enjoying the top of Mashpori.',
//       category: 'Trip',
//     },
//     //  {
//     //   id: 7,
//     //   title: 'Nature',
//     //   image: nature,
//     //   description: 'Enjoying the Sport Festival.',
//     //   category: 'Sessional Events',
//     // },
//   ];

//   const galleryItems = [
//     {
//       id: 1,
//       title: 'Graduation Ceremony',
//       image: enjoy,
//       category: 'Graduate',
//       description: "Soft Ware Engineering Students",
//     },
//     {
//       id: 2,
//       title: 'Graduation Ceremony',
//       image: mashal,
//       category: 'Graduate',
//       description: 'After Ceremony Kamawal 🥳✨ '},
//     {
//       id: 3,
//       title: '',
//       image: kamawal,
//       category: 'members',
//       description: 'During the event Junior Kamawal 🥳✨ ',
//     },
//     {
//       id: 4,
//       title: 'Graduation Ceremony',
//       image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'Graduation',
//       description: 'Celebrating academic achievements of Afghan graduates',
//     },
//     {
//       id: 5,
//       title: '',
//       image: qandari,
//       category: 'President',
//       description: 'Enjoying the Event  🥳✨ ',
//     },
//     {
//       id: 6,
//       title: '',
//       image: flag,
//       category: 'Celebrations',
//       description: 'Afghanistan Independence Day flag ceremony',
//     },
//     {
//       id: 7,
//       title: '',
//       image: lovetoflag,
//       category: 'Celebration',
//       description: 'Just Love !',
//     },
//     {
//       id: 8,
//       title: 'Award Receiving',
//       image:award,
//       category: 'Graduation',
//       description: 'Receiving Award from Afghan Students Council NUML (ASCN)',
//     },
//     {
//       id: 9,
//       title: 'Sport Festival',
//       image: sport,
//       category: 'sport',
//       description: 'Enjoying the Sport Festival.',
//     },
//     {
//       id: 10,
//       title: 'Together with the community',
//       image: mzkhqu,
//       category: 'Community',
//       description: '',
//     },
//     {
//       id: 11,
//       title: 'Nature',
//       image: nature,
//       category: 'Nature',
//       description: 'Enjoying the Nature.',
//     },
//     {
//       id: 12,
//       title: "Azkh",
//       image: azkh,
//       category: 'Event',
//       description: 'Enjoying the Event.',
//     },
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, featuredImages.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + featuredImages.length) % featuredImages.length);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="min-h-screen bg-black pt-16"
//     >
//       {/* Hero Section */}
//       <section className="relative py-20">
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(217, 70, 239, 0.3), transparent 70%), #000000",
//           }}
//         />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//               Gallery
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Capturing memories and moments from our vibrant community
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Carousel */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-8"
//           >
//             <h2 className="text-3xl font-bold text-white mb-4">Featured Highlights</h2>
//             <p className="text-gray-400">Our most memorable moments and achievements</p>
//           </motion.div>

//           <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
//             {/* Carousel Container */}
//             <div className="relative h-96 md:h-[500px] overflow-hidden">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ opacity: 0, x: 300 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -300 }}
//                   transition={{ duration: 0.5 }}
//                   className="absolute inset-0"
//                 >
//                   <img
//                     src={featuredImages[currentSlide].image}
//                     alt={featuredImages[currentSlide].title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
//                   {/* Image Description */}
//                   <div className="absolute bottom-0 left-0 right-0 p-8">
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.6, delay: 0.2 }}
//                       className="max-w-4xl"
//                     >
//                       <div className="flex items-center space-x-2 mb-2">
//                         <span className="px-3 py-1 bg-purple-500/30 text-purple-300 text-sm rounded-full">
//                           {featuredImages[currentSlide].category}
//                         </span>
//                       </div>
//                       <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
//                         {featuredImages[currentSlide].title}
//                       </h3>
//                       <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">
//                         {featuredImages[currentSlide].description}
//                       </p>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* Navigation Controls */}
//             <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
//               <button
//                 onClick={prevSlide}
//                 className="p-3 bg-black/50 backdrop-blur-lg rounded-full text-white hover:bg-black/70 transition-all duration-300"
//               >
//                 <ChevronLeft className="h-6 w-6" />
//               </button>
//             </div>
            
//             <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
//               <button
//                 onClick={nextSlide}
//                 className="p-3 bg-black/50 backdrop-blur-lg rounded-full text-white hover:bg-black/70 transition-all duration-300"
//               >
//                 <ChevronRight className="h-6 w-6" />
//               </button>
//             </div>

//             {/* Auto-play Control */}
//             <div className="absolute top-4 right-4">
//               <button
//                 onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//                 className="p-2 bg-black/50 backdrop-blur-lg rounded-full text-white hover:bg-black/70 transition-all duration-300"
//               >
//                 {isAutoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
//               </button>
//             </div>

//             {/* Slide Indicators */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//               <div className="flex space-x-2">
//                 {featuredImages.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentSlide 
//                         ? 'bg-purple-500 shadow-lg shadow-purple-500/50' 
//                         : 'bg-white/30 hover:bg-white/50'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Grid */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-white mb-4">Complete Gallery</h2>
//             <p className="text-gray-400">Browse through all our events and activities</p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {galleryItems.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="group cursor-pointer"
//                 onClick={() => setSelectedImage(item.image)}
//               >
//                 <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
//                   {/* Image Info Overlay */}
//                   <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <div className="space-y-2">
//                       <div className="flex items-center justify-between">
//                         <span className="px-2 py-1 bg-purple-500/30 text-purple-300 text-xs rounded-full">
//                           {item.category}
//                         </span>
//                       </div>
//                       <h3 className="text-white font-semibold text-lg">{item.title}</h3>
//                       <p className="text-gray-300 text-sm">{item.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modal for Image Preview */}
//       {selectedImage && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             className="relative max-w-4xl max-h-[90vh]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img
//               src={selectedImage}
//               alt="Gallery preview"
//               className="w-full h-full object-contain rounded-lg"
//             />
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
//             >
//               <X className="h-6 w-6" />
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Gallery;
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import LazyImage from '../components/LazyImage';


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Dynamic image loading function
  const getImagePath = (imageName: string) => {
    try {
      return new URL(`../assets/${imageName}`, import.meta.url).href;
    } catch {
      return `/src/assets/${imageName}`;
    }
  };

  // Memoized image data to prevent unnecessary re-renders
  const featuredImages = useMemo(() => [
    {
      id: 1,
      title: 'Culture Exhibition',
      image: getImagePath('spring turkey.jpeg'),
      description: 'Annual celebration of Afghan culture featuring traditional music, poetry recitations, and authentic cuisine prepared by our community members.',
      category: 'Cultural Events',
    },
    {
      id: 2,
      title: 'Academic Excellence Workshop',
      image: getImagePath('supportive moments2.JPG'),
      description: 'Interactive workshop on study techniques, research methodologies, and academic success strategies for Afghan students at NUML.',
      category: 'Academic',
    },
    {
      id: 3,
      title: 'Enjoying the moment after the ceremony',
      image: getImagePath('enjoy2.jpg'),
      description: 'Council members participating in graduation ceremony and enjoying after the ceremony.',
      category: 'Council Service',
    },
    {
      id: 4,
      title: 'Graduation Ceremony 2025',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Celebrating the achievements of our graduating Afghan students, marking their successful completion of studies at NUML.',
      category: 'Graduation',
    },
    {
      id: 5,
      title: 'Spring Festival',
      image: getImagePath('spring collective.JPG'),
      description: 'Enjoying the Spring Festival with friends and guests.',
      category: 'Sessional Events',
    },
     {
      id: 6,
      title: 'Trip',
      image: getImagePath('vip/triptogether.jpeg'),
      description: 'Enjoying the top of Mashpori.',
      category: 'Trip',
    },
  ], []);

  const galleryItems = useMemo(() => [
    {
      id: 1,
      title: 'Graduation Ceremony',
      image: getImagePath('enjoy.jpg'),
      category: 'Graduate',
      description: "Soft Ware Engineering Students",
    },
    {
      id: 2,
      title: 'Graduation Ceremony',
      image: getImagePath('5.jpg'),
      category: 'Graduate',
      description: 'After Ceremony Kamawal 🥳✨ '},
    {
      id: 3,
      title: '',
      image: getImagePath('kamawal.JPG'),
      category: 'members',
      description: 'During the event Junior Kamawal 🥳✨ ',
    },
    {
      id: 4,
      title: 'Graduation Ceremony',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Graduation',
      description: 'Celebrating academic achievements of Afghan graduates',
    },
    {
      id: 5,
      title: '',
      image: getImagePath('qandahari.JPG'),
      category: 'President',
      description: 'Enjoying the Event  🥳✨ ',
    },
    {
      id: 6,
      title: '',
      image: getImagePath('flag love.JPG'),
      category: 'Celebrations',
      description: 'Afghanistan Independence Day flag ceremony',
    },
    {
      id: 7,
      title: '',
      image: getImagePath('love to flag.JPG'),
      category: 'Celebration',
      description: 'Just Love !',
    },
    {
      id: 8,
      title: 'Award Receiving',
      image: getImagePath('award.jpg'),
      category: 'Graduation',
      description: 'Receiving Award from Afghan Students Council NUML (ASCN)',
    },
    {
      id: 9,
      title: 'Sport Festival',
      image: getImagePath('vip/sport2.jpeg'),
      category: 'sport',
      description: 'Enjoying the Sport Festival.',
    },
    {
      id: 10,
      title: 'Together with the community',
      image: getImagePath('vip/mzkhqu.jpeg'),
      category: 'Community',
      description: '',
    },
    {
      id: 11,
      title: 'Nature',
      image: getImagePath('vip/onlyme1.jpeg'),
      category: 'Nature',
      description: 'Enjoying the Nature.',
    },
    {
      id: 12,
      title: "Azkh",
      image: getImagePath('vip/azkh.jpeg'),
      category: 'Event',
      description: 'Enjoying the Event.',
    },
  ], []);

  // Track loaded images for performance
  const handleImageLoad = (imageSrc: string) => {
    setLoadedImages(prev => new Set(prev).add(imageSrc));
  };

  // Preload next and previous carousel images for smooth transitions
  useEffect(() => {
    const preloadCarouselImages = () => {
      const nextIndex = (currentSlide + 1) % featuredImages.length;
      const prevIndex = (currentSlide - 1 + featuredImages.length) % featuredImages.length;
      
      // Preload next and previous images
      [nextIndex, prevIndex].forEach(index => {
        const img = new Image();
        img.src = featuredImages[index].image;
      });
    };

    preloadCarouselImages();
  }, [currentSlide, featuredImages]);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredImages.length) % featuredImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black pt-16"
    >
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(217, 70, 239, 0.3), transparent 70%), #000000",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Capturing memories and moments from our vibrant community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Highlights</h2>
            <p className="text-gray-400">Our most memorable moments and achievements</p>
          </motion.div>

          <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
            {/* Carousel Container */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <LazyImage
                    src={featuredImages[currentSlide].image}
                    alt={featuredImages[currentSlide].title}
                    className="w-full h-full"
                    onLoad={() => handleImageLoad(featuredImages[currentSlide].image)}
                    priority={currentSlide === 0}
                    responsive={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Image Description */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="max-w-4xl"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-3 py-1 bg-purple-500/30 text-purple-300 text-sm rounded-full">
                          {featuredImages[currentSlide].category}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {featuredImages[currentSlide].title}
                      </h3>
                      <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">
                        {featuredImages[currentSlide].description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                onClick={prevSlide}
                className="p-3 bg-black/50 backdrop-blur-lg rounded-full text-white hover:bg-black/70 transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                onClick={nextSlide}
                className="p-3 bg-black/50 backdrop-blur-lg rounded-full text-white hover:bg-black/70 transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Auto-play Control */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 bg-black/50 backdrop-blur-lg rounded-full text-white hover:bg-black/70 transition-all duration-300"
              >
                {isAutoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {featuredImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-purple-500 shadow-lg shadow-purple-500/50' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Complete Gallery</h2>
            <p className="text-gray-400">Browse through all our events and activities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <LazyImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 transition-transform duration-300 group-hover:scale-110"
                    onLoad={() => handleImageLoad(item.image)}
                    priority={index < 3} // Priority load first 3 images
                    responsive={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-1 bg-purple-500/30 text-purple-300 text-xs rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <LazyImage
              src={selectedImage}
              alt="Gallery preview"
              className="w-full h-full rounded-lg"
              onLoad={() => handleImageLoad(selectedImage)}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Gallery;
