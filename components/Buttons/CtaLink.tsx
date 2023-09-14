'use client';

import { FunctionComponent, ReactNode } from 'react';
import styles from './CtaLink.module.css';
import Link from 'next/link';

type CtaButtonProps = {
  children: ReactNode;
  href: string;
  openInNewTab?: boolean;
};

export const CtaLink: FunctionComponent<CtaButtonProps> = ({
  href,
  children,
  openInNewTab = false,
}) => {
  return (
    <Link
      className={styles.button}
      href={href}
      target={openInNewTab ? '_blank' : '_self'}
    >
      {children}
    </Link>
  );
};
