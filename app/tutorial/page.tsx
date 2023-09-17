'use client';

import { CtaLink } from '@/components';
import { ArrowRight } from '@phosphor-icons/react';

const Tutorial = () => {
  return (
    <div className={'flex flex-col items-center gap-10'}>
      <h1>Welcome aboard</h1>
      <p>Ready to launch your MVP faster than ever?</p>
      <CtaLink href='/tutorial/overview'>
        <>
          See how it works
          <ArrowRight size={24} />
        </>
      </CtaLink>
    </div>
  );
};

export default Tutorial;
