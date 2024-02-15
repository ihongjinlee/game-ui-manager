import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MCU CHARACTERS',
    short_name: 'MCU CHARACTERS',
    description: 'MCU 캐릭터와 레고',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/images/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/android-chrome-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
    ],
  };
}
