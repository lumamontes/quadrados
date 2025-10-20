# Quadrados Gallery

A minimalist black and white photography gallery built with Astro and Cloudinary.

## Features

- **Responsive Gallery**: Images maintain their original aspect ratios
- **Cloudinary Integration**: Automatic image optimization and delivery
- **Minimalist Design**: Clean black and white aesthetic with Azeret Mono font
- **Performance Optimized**: Lazy loading and responsive images
- **Mobile Friendly**: Fully responsive design

## Setup

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Configure Cloudinary**:
   Create a `.env` file in the root directory with your Cloudinary credentials:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   CLOUDINARY_FOLDER_NAME=your_folder_name
   ```

3. **Upload images to Cloudinary**:
   - Create a folder in your Cloudinary account
   - Upload your images to that folder
   - Update the `CLOUDINARY_FOLDER_NAME` in your `.env` file

4. **Run the development server**:
   ```bash
   pnpm dev
   ```

## Project Structure

```
/
├── src/
│   ├── components/
│   │   └── Gallery.astro          # Gallery component
│   ├── layouts/
│   │   └── Layout.astro           # Base layout with navigation
│   ├── lib/
│   │   └── cloudinary.ts          # Cloudinary integration
│   ├── pages/
│   │   ├── index.astro            # Home page with gallery
│   │   └── about.astro            # About page
│   └── styles/
│       └── global.css             # Global styles
├── astro.config.mjs               # Astro configuration
└── package.json
```

## Customization

- **Font**: The site uses Azeret Mono from Google Fonts
- **Colors**: Black and white theme can be modified in the CSS files
- **Gallery Layout**: Adjust grid settings in `Gallery.astro`
- **Image Sizes**: Modify responsive breakpoints in the Cloudinary service

## Deployment

The site can be deployed to any static hosting service that supports Astro:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Make sure to set your environment variables in your hosting platform's dashboard.