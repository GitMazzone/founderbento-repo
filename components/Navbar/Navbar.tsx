'use client';

import { Rocket } from '@phosphor-icons/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { useAuthContext } from '../AuthProvider';
import { MobileMenu } from './MobileMenu';
import { NavLink } from './Navbar.types';

const links: NavLink[] = [
  { href: '/', text: 'Home' },
  { href: '/', text: 'Pricing' },
  { href: '/', text: 'Contact' },
];

export const Navbar: FunctionComponent = () => {
  const { user, loading } = useAuthContext();

  return (
    <nav className='sticky top-0 z-10 backdrop-blur bg-white/75 border-b border-black p-4 w-full'>
      <div className='flex items-center justify-between'>
        <Rocket color='#000' size={38} className='rotate-45' />

        {/* Links for medium screens and up */}
        <div className={'hidden md:flex space-x-4'}>
          {links.map((link) => (
            <Link href={'/'} key={`md-${link.text}`}>
              {link.text}
            </Link>
          ))}

          {!loading &&
            (user ? (
              <form action={'/auth/sign-out'} method={'post'}>
                <button>Logout</button>
              </form>
            ) : (
              <Link href='/login'>Login</Link>
            ))}
        </div>

        <MobileMenu links={links} />
      </div>
    </nav>
  );
};
