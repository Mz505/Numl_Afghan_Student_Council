import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  getResponsiveImageUrl, 
  generateImageSizes, 
  getOptimalImageSize,
  generateBlurPlaceholder 
} from '../utils/imageOptimization';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  responsive?: boolean;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  onLoad,
  onError,
  responsive = true,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Load immediately if priority
  const [hasError, setHasError] = useState(false);
  const [optimizedSrc, setOptimizedSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate optimized image sources
  useEffect(() => {
    if (responsive && containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const imageSizes = generateImageSizes(src);
      const optimalSrc = getOptimalImageSize(width, height, imageSizes);
      setOptimizedSrc(optimalSrc);
    } else {
      setOptimizedSrc(getResponsiveImageUrl(src, { quality: 85 }));
    }
  }, [src, responsive]);

  useEffect(() => {
    // Skip intersection observer for priority images
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px', // Increased for better UX
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-800/50 animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 animate-pulse">
            <div className="flex items-center justify-center h-full">
              <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      )}

      {/* Blur Placeholder */}
      {!isLoaded && !hasError && isInView && (
        <img
          src={generateBlurPlaceholder(src)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 opacity-50"
        />
      )}

      {/* Actual Image */}
      {isInView && optimizedSrc && (
        <motion.img
          ref={imgRef}
          src={optimizedSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.05
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          loading={priority ? "eager" : "lazy"}
        />
      )}
    </div>
  );
};

export default LazyImage;