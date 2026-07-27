import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MAXWILL INDIA',
    short_name: 'MAXWILL',
    description: 'Premium Pickleball Equipment | Performance Engineering | Community Driven',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    theme_color: '#A02B2B',
    background_color: '#FFFFFF',
    categories: ['sports', 'equipment'],
    icons: [
      {
        src: '/favicon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-maskable-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/screenshot-540.png',
        sizes: '540x720',
        type: 'image/png',
        form_factor: 'narrow',
      },
      {
        src: '/screenshot-1280.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
      },
    ],
  };
}
