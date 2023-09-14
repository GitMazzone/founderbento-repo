'use client';

import { CtaLink } from '@/components';
import styles from './page.module.css';
import { ArrowRight } from '@phosphor-icons/react';

const Tutorial = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome aboard</h1>
      <p>
        Strap in! You're not gonna believe how fast you launch this product.
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
