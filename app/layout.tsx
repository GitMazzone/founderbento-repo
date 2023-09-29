import { Merriweather } from 'next/font/google';
import '../styles/globals.css';
import { AuthProvider, Navbar } from '@/components';
import { ReactNode } from 'react';
import cn from 'classnames';
import { baseMetadata } from '@/config';

// TODO: move font to fonts.ts, pick global default & move MW to heading only
// https://nextjs.org/docs/app/building-your-application/optimizing/fonts
// TODO: font picker
const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// This was the <Head> tag in the pages router
// To add route-specific metadata, export metadata from a route's layout.tsx
// and specify the fields you want to differ
// More info: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata = baseMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={cn(merriweather.className, 'light')}>
      <AuthProvider>
        <body>
          <main className='min-h-screen flex flex-col items-center bg-light-primary dark:bg-dark-primary transition-colors duration-300'>
            <Navbar />
            {children}
          </main>
        </body>
      </AuthProvider>
    </html>
  );
}
