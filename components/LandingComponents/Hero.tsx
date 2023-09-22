'use client';

import { FunctionComponent } from 'react';
import { CtaLink } from '../Buttons';
import { Megaphone } from '@phosphor-icons/react';

export const Hero: FunctionComponent = () => {
  return (
    <div className={'flex flex-col items-center gap-5 text-center'}>
      <h1>A unique value proposition for an easy YES</h1>
      <p>Dream outcome X while avoiding pain point Y, all in time frame Z.</p>
      {/* TODO: use theme colors */}
      <CtaLink href='#'>Enticing CTA</CtaLink>
      {/* Benefit callout */} {/* TODO: replace mt-10 with spacer */}
      <div className={'flex justify-between w-full mt-10'}>
        <div className={'flex items-center gap-2'}>
          <Megaphone className={'bg-gray-200 rounded-md p-2 h-10 w-10'} />
          <p>Benefit A</p>
        </div>
        <div className={'flex items-center gap-2'}>
          <Megaphone className={'bg-gray-200 rounded-md p-2 h-10 w-10'} />
          <p>Good Thing B</p>
        </div>
        <div className={'flex items-center gap-2'}>
          <Megaphone className={'bg-gray-200 rounded-md p-2 h-10 w-10'} />
          <p>Bonus C</p>
        </div>
      </div>
    </div>
  );
};
