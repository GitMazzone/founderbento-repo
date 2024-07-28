'use client';

import { Rocket } from '@phosphor-icons/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { useAuthContext } from '@/lib/auth';
import { MobileMenu } from './MobileMenu';
import { NavLink } from './Navbar.types';

const links: NavLink[] = [
  { href: '/', text: 'Pricing' },
  { href: '/', text: 'Our Menu' },
  { href: '/', text: 'FAQs' },
];

export const Navbar: FunctionComponent = () => {
  const { user, loading } = useAuthContext();

  return (
    <nav
      className={
        'sticky top-0 z-10 backdrop-blur bg-white/75 border-b border-black p-4 w-full'
      }
    >
      <div className={'flex items-center justify-between'}>
        <Link href={'/'} aria-label={'Go home'}>
          <Rocket color='#000' size={38} className={'rotate-45'} />
        </Link>

        <div className={'hidden md:flex items-center space-x-4'}>
          {links.map((link) => (
            <Link href={'/'} key={`md-${link.text}`}>
              {link.text}
            </Link>
          ))}

          <div className={'w-20 h-10 flex items-center justify-center'}>
            {loading ? (
              <Link
                className={
                  'w-full h-full flex items-center justify-center border border-[#F26419] rounded'
                }
                href={'/login'}
              >
                ...
              </Link>
            ) : user ? (
              <form action={'/auth/sign-out'} method={'post'}>
                <button className={'w-full h-full'}>Logout</button>
              </form>
            ) : (
              <Link
                className={
                  'w-full h-full flex items-center justify-center border border-[#F26419] rounded'
                }
                href={'/login'}
              >
                Login
              </Link>
            )}
          </div>
        </div>

        <MobileMenu links={links} />
      </div>
    </nav>
  );
};
