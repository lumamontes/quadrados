/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CLOUDINARY_CLOUD_NAME: string;
  readonly CLOUDINARY_API_KEY: string;
  readonly CLOUDINARY_API_SECRET: string;
  readonly CLOUDINARY_FOLDER_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
