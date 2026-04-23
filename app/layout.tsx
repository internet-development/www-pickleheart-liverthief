import '@root/global.css';

import type { Viewport } from 'next';

export const metadata = {
  icons: {
    apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    icon: '/favicon-32x32.png',
    other: [{ rel: 'apple-touch-icon-precomposed', url: '/apple-touch-icon-precomposed.png' }],
    shortcut: '/favicon-16x16.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
