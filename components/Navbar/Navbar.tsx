'use client';

import { Menu } from '@headlessui/react';
import { List, Rocket, X } from '@phosphor-icons/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

export const Navbar: FunctionComponent = () => {
  return (
    <nav className='bg-orange-300 text-black p-4 w-full'>
      <div className='flex items-center justify-between'>
        <Rocket color='#000' size={38} className='rotate-45' />
        {/* Links for medium screens and up */}
        <div className='hidden md:flex space-x-4 text-white'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </div>
        {/* Hamburger menu and optional Sign Up CTA for mobile */}
        <div className='md:hidden flex items-center'>
          <Menu as='div' className='relative inline-block text-left'>
            {({ open }) => (
              <>
                <Menu.Button>
                  {open ? <X size={32} /> : <List size={32} />}
                </Menu.Button>
                <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='px-1 py-1 '>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={active ? 'text-red-400' : ''}
                          href={'/tutorials/overview'}
                        >
                          Home
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={active ? 'text-red-400' : ''}
                          href={'/tutorials/overview'}
                        >
                          About
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={active ? 'text-red-400' : ''}
                          href={'/tutorials/overview'}
                        >
                          Contact
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  );
};
