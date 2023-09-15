'use client';

import { CtaLink } from '@/components';
import { ArrowRight } from '@phosphor-icons/react';

const Tutorial = () => {
  return (
    <div className={'pageContainer gap-10'}>
      <h1>Welcome aboard</h1>
      <p>
        Strap in! You&apos;re not gonna believe how fast you launch this
        product.
      </p>
      <CtaLink href='/tutorial/overview'>
        <>
          Blastoff
          <ArrowRight size={24} />
        </>
      </CtaLink>
    </div>
  );
};

export default Tutorial;
