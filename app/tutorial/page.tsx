'use client';

import { CtaLink } from '@/components';
import { ArrowRight } from '@phosphor-icons/react';

const Tutorial = () => {
  return (
    <div className={'flex flex-col items-center gap-10'}>
      <h1>Welcome aboard!</h1>
      <p>This is the start of something wonderful. And fast.</p>
      <CtaLink href='/tutorial/overview'>
        <>
          Jump right in
          <ArrowRight size={24} />
        </>
      </CtaLink>
    </div>
  );
};

export default Tutorial;
