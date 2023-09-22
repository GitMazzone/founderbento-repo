'use client';

import { Callout, Card, Spacer } from '@/components';
import styles from './page.module.css';
import {
  ArrowRight,
  Code,
  Layout,
  PuzzlePiece,
  Ruler,
  Toolbox,
} from '@phosphor-icons/react';
import Link from 'next/link';

const Overview = () => {
  return (
    <div className={'flex flex-col gap-5'}>
      <h1>Welcome!</h1>

      <Callout>
        <p>Implement what you need for your MVP. Delete the rest.</p>
      </Callout>

      <Spacer type={'section'} />

      <div className={styles.cardContainer}>
        <Link href={'/tutorial/stack'}>
          <Card classNames={styles.bigCard}>
            <>
              <span className={styles.iconBg}>
                <Code />
              </span>
              Your founder stack
              <ArrowRight className={styles.arrow} />
            </>
          </Card>
        </Link>
      </div>

      <div className={styles.cardContainer}>
        <Link href={'/tutorial/template-pages'}>
          <Card classNames={styles.bigCard}>
            <>
              <span className={styles.iconBg}>
                <Layout />
              </span>
              Templates for common pages
              <ArrowRight className={styles.arrow} />
            </>
          </Card>
        </Link>
      </div>

      <div className={styles.cardContainer}>
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
      </div>

      <div className={styles.cardContainer}>
        <Link href={'/tutorial/design-language'}>
          <Card classNames={styles.bigCard}>
            <>
              <span className={styles.iconBg}>
                <Ruler />
              </span>
              Design language
              <ArrowRight className={styles.arrow} />
            </>
          </Card>
        </Link>
      </div>

      <div className={styles.cardContainer}>
        <Link href={'/tutorial/tools'}>
          <Card classNames={styles.bigCard}>
            <>
              <span className={styles.iconBg}>
                <Toolbox />
              </span>
              Third-party tools
              <ArrowRight className={styles.arrow} />
            </>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Overview;
