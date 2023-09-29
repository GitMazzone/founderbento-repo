'use client';

import { FunctionComponent } from 'react';
import Link from 'next/link';
import { appConfig } from '@/config'; // Adjust the path as needed
import {
  DiscordLogo,
  Rocket,
  TwitterLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';

export const Footer: FunctionComponent = () => {
  return (
    <footer className={'bg-neutral-800 text-white py-24 w-[100vw] xPadding'}>
      <div className={'mx-auto px-4'}>
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'}>
          <div className={'text-center md:text-left'}>
            <div
              className={'flex items-center justify-center md:justify-start'}
            >
              <Rocket size={32} className={'rotate-45 flex-shrink-0'} />
              <h5>{appConfig.displayName}</h5>
            </div>
            <p className={'text-sm mt-2 md:text-xs'}>
              Copyright © 2023 - All rights reserved
            </p>
          </div>

          <div
            className={
              'text-center md:text-left lg:flex lg:flex-col lg:justify-start lg:items-center'
            }
          >
            <h5>Links</h5>
            <ul>
              <li>
                <Link className={'text-sm hover:underline'} href='#'>
                  Link 1
                </Link>
              </li>
              <li>
                <Link className={'text-sm hover:underline'} href='#'>
                  Link 2
                </Link>
              </li>
              <li>
                <Link className={'text-sm hover:underline'} href='#'>
                  Link 3
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={
              'text-center md:text-left lg:flex lg:flex-col lg:justify-start lg:items-center'
            }
          >
            <h5>Legal</h5>
            <ul>
              <li>
                <Link className={'text-sm hover:underline'} href='#'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className={'text-sm hover:underline'} href='#'>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={
              'text-center md:text-left lg:flex lg:flex-col lg:justify-start lg:items-end lg:text-right'
            }
          >
            <h5>Join Our Community</h5>
            <div className='flex justify-center md:justify-start gap-2 mt-2'>
              <Link href={'#'}>
                <DiscordLogo height={32} width={32} />
              </Link>
              <Link href={'#'}>
                <YoutubeLogo height={32} width={32} />
              </Link>
              <Link href={'#'}>
                <TwitterLogo height={32} width={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
