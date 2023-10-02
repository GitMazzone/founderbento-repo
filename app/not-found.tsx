'use client';

import { CtaLink } from '@/components';
import { House } from '@phosphor-icons/react';

export default function NotFound() {
  return (
    <div
      className={'flex flex-col gap-5 items-center justify-center min-h-screen'}
    >
      <h2>This page doesn&apos;t exist</h2>
      <p>Head back home</p>
      <CtaLink href={'/'}>
        <House size={24} weight={'fill'} />
        Home
      </CtaLink>
    </div>
  );
}
