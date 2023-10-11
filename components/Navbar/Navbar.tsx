'use client';

import Link from 'next/link';
import { FunctionComponent } from 'react';
import { useAuthContext } from '../AuthProvider';
import { MobileMenu } from './MobileMenu';
import { NavLink } from './Navbar.types';
import { Logo } from '../Logo';

const links: NavLink[] = [{ href: '/', text: 'How it works' }];

export const Navbar: FunctionComponent = () => {
  const { user, loading } = useAuthContext();

  return (
    <nav className='sticky top-0 z-10 text-stone-800 backdrop-blur bg-stone-100 bg-opacity-75 border-b border-black px-4 w-full'>
      <div className='flex items-center justify-between'>
        <Link href={'/'} aria-label={'Go home'}>
          <Logo />
        </Link>

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
