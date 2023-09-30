'use client';

import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { NavLink } from './Navbar.types';
import { Twirl as Hamburger } from 'hamburger-react';

type MobileMenuProps = {
  links: NavLink[];
};

export const MobileMenu: FunctionComponent<MobileMenuProps> = ({ links }) => {
  return (
    <div className='md:hidden flex items-center'>
      <Menu as='div' className='relative inline-block text-left'>
        {({ open }) => (
          <>
            <Menu.Button>
              <Hamburger
                distance={'lg'}
                duration={0.25}
                label={`${open ? 'Close' : 'Open'} mobile nav menu`}
                rounded
                size={24}
                toggled={open}
              />
            </Menu.Button>
            <Menu.Items
              className={`${
                open ? 'fixed inset-0 top-24' : 'absolute right-0'
              } h-[33vh] w-11/12 mx-auto bg-white rounded-md shadow-lg focus:outline-none flex flex-col justify-center items-center gap-5`}
            >
              {links.map((link) => (
                <Menu.Item key={`mobile-${link.text}`}>
                  {({ active }) => (
                    <Link
                      className={active ? 'text-orange-400' : ''}
                      href={link.href}
                    >
                      {link.text}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
};
