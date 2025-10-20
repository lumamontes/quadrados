// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://quadrados.netlify.app',
  // Enable environment variables
  env: {
    schema: {
      CLOUDINARY_CLOUD_NAME: {
        type: 'string',
        context: 'server',
        access: 'secret',
      },
      CLOUDINARY_API_KEY: {
        type: 'string',
        context: 'server',
        access: 'secret',
      },
      CLOUDINARY_API_SECRET: {
        type: 'string',
        context: 'server',
        access: 'secret',
      },
      CLOUDINARY_FOLDER_NAME: {
        type: 'string',
        context: 'server',
        access: 'secret',
      },
    },
  },
});
