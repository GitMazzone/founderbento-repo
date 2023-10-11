import { Merriweather } from 'next/font/google';
import '../styles/globals.css';
import { AuthProvider, Footer, Navbar } from '@/components';
import { ReactNode } from 'react';
import cn from 'classnames';
import { baseMetadata } from '@/config';

const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = baseMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'} className={cn(merriweather.className, 'dark')}>
      <AuthProvider>
        <body className={'bg-stone-100'}>
          <Navbar />
          <main
            className={
              'min-h-screen flex flex-col items-center bg-stone-800 text-white'
            }
          >
            <div className={'pageContainer'}>{children}</div>
            <Footer />
          </main>
        </body>
      </AuthProvider>
    </html>
  );
}
