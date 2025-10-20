import { v2 as cloudinary } from 'cloudinary';
import { config } from './config';

// Configure Cloudinary
cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
});

export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
}

export interface CloudinaryResponse {
  resources: CloudinaryImage[];
  next_cursor?: string;
}

/**
 * Fetch images from a specific Cloudinary folder
 */
export async function getImagesFromFolder(folderName: string): Promise<CloudinaryImage[]> {
  try {
    const result = await cloudinary.search
      .expression(`folder:${folderName}`)
      .max_results(50)
      .execute() as CloudinaryResponse;

    return result.resources || [];
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return [];
  }
}

/**
 * Generate optimized image URL with specific transformations
 */
export function getOptimizedImageUrl(
  publicId: string,
  width?: number,
  height?: number,
  quality: string = 'auto'
): string {
  return cloudinary.url(publicId, {
    width,
    height,
    quality,
    fetch_format: 'auto',
    crop: 'scale',
  });
}

/**
 * Generate responsive image URLs for different screen sizes
 */
export function getResponsiveImageUrls(publicId: string, originalWidth: number, originalHeight: number) {
  const aspectRatio = originalWidth / originalHeight;
  
  return {
    small: getOptimizedImageUrl(publicId, 400, Math.round(400 / aspectRatio)),
    medium: getOptimizedImageUrl(publicId, 800, Math.round(800 / aspectRatio)),
    large: getOptimizedImageUrl(publicId, 1200, Math.round(1200 / aspectRatio)),
    original: getOptimizedImageUrl(publicId, originalWidth, originalHeight),
  };
}
