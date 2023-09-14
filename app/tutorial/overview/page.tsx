'use client';

import { Card } from '@/components';
import styles from './page.module.css';
import { ArrowRight, Code, PuzzlePiece, Toolbox } from '@phosphor-icons/react';
import Link from 'next/link';

const Overview = () => {
  return (
    <div className={styles.container}>
      <h1>Overview</h1>

      <section className={styles.cardContainer}>
        <Link href={'/tutorial/stack'}>
          <Card classNames={styles.bigCard}>
            <>
              <span className={styles.iconBg}>
                <Code />
              </span>
              Learn about your founder stack
              <ArrowRight className={styles.arrow} />
            </>
          </Card>
        </Link>
      </section>

      <section className={styles.cardContainer}>
        <Link href={'/tutorial/components'}>
          <Card classNames={styles.bigCard}>
            <>
              <span className={styles.iconBg}>
                <PuzzlePiece />
              </span>
              Component library
              <ArrowRight className={styles.arrow} />
            </>
          </Card>
        </Link>
      </section>

      <section className={styles.cardContainer}>
        <Link href={'/tutorial/components'}>
          <Card classNames={styles.bigCard}>
            <>
              <span className={styles.iconBg}>
                <Toolbox />
              </span>
              Amazing tools
              <ArrowRight className={styles.arrow} />
            </>
          </Card>
        </Link>
      </section>
    </div>
  );
};

export default Overview;
