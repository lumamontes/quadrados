// Server-side configuration
export const config = {
  cloudinary: {
    cloudName: import.meta.env.CLOUDINARY_CLOUD_NAME || 'your-cloud-name',
    apiKey: import.meta.env.CLOUDINARY_API_KEY || 'your-api-key',
    apiSecret: import.meta.env.CLOUDINARY_API_SECRET || 'your-api-secret',
    folderName: import.meta.env.CLOUDINARY_FOLDER_NAME || 'gallery',
  },
} as const;
