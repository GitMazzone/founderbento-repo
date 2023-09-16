'use client';

import { Card } from '@/components';
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
    <div className={'pageContainer gap-10'}>
      <h1>Overview</h1>

      <div className={styles.cardContainer}>
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
              Amazing tools
              <ArrowRight className={styles.arrow} />
            </>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Overview;
