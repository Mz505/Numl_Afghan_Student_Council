// Image optimization utilities for better performance

export interface ImageSizes {
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  original: string;
}

export interface OptimizedImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  blur?: boolean;
}

/**
 * Generate responsive image URLs for different screen sizes
 */
export const getResponsiveImageUrl = (
  imagePath: string,
  options: OptimizedImageOptions = {}
): string => {
  const { width, height, quality = 80, format = 'webp' } = options;
  
  // For external URLs (like Pexels), add optimization parameters
  if (imagePath.startsWith('http')) {
    const url = new URL(imagePath);
    
    // Add optimization parameters for supported services
    if (url.hostname.includes('pexels.com')) {
      if (width) url.searchParams.set('w', width.toString());
      if (height) url.searchParams.set('h', height.toString());
      url.searchParams.set('auto', 'compress');
      url.searchParams.set('cs', 'tinysrgb');
    }
    
    return url.toString();
  }
  
  // For local images, return the path as-is (Vite will handle optimization)
  return imagePath;
};

/**
 * Generate multiple sizes for responsive images
 */
export const generateImageSizes = (imagePath: string): ImageSizes => {
  return {
    thumbnail: getResponsiveImageUrl(imagePath, { width: 150, height: 150 }),
    small: getResponsiveImageUrl(imagePath, { width: 400, height: 300 }),
    medium: getResponsiveImageUrl(imagePath, { width: 800, height: 600 }),
    large: getResponsiveImageUrl(imagePath, { width: 1200, height: 900 }),
    original: imagePath,
  };
};

/**
 * Get the appropriate image size based on container dimensions
 */
export const getOptimalImageSize = (
  containerWidth: number,
  containerHeight: number,
  imageSizes: ImageSizes
): string => {
  const area = containerWidth * containerHeight;
  
  if (area <= 90000) return imageSizes.thumbnail; // 300x300
  if (area <= 240000) return imageSizes.small;    // 400x600
  if (area <= 480000) return imageSizes.medium;   // 800x600
  if (area <= 1080000) return imageSizes.large;   // 1200x900
  
  return imageSizes.original;
};

/**
 * Preload critical images for better performance
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload multiple images with priority
 */
export const preloadImages = async (
  imagePaths: string[],
  maxConcurrent: number = 3
): Promise<void> => {
  const chunks = [];
  for (let i = 0; i < imagePaths.length; i += maxConcurrent) {
    chunks.push(imagePaths.slice(i, i + maxConcurrent));
  }
  
  for (const chunk of chunks) {
    await Promise.allSettled(chunk.map(preloadImage));
  }
};

/**
 * Generate blur placeholder for images
 */
export const generateBlurPlaceholder = (imagePath: string): string => {
  // For external URLs, try to get a very small version
  if (imagePath.startsWith('http')) {
    return getResponsiveImageUrl(imagePath, { width: 10, height: 10, blur: true });
  }
  
  // For local images, return a data URL placeholder
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMzMzIi8+Cjwvc3ZnPgo=';
};

/**
 * Check if WebP is supported by the browser
 */
export const isWebPSupported = (): boolean => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

/**
 * Get the best image format for the browser
 */
export const getBestImageFormat = (originalFormat: string): string => {
  if (isWebPSupported() && originalFormat !== 'gif') {
    return 'webp';
  }
  return originalFormat;
};