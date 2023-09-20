'use client';

import { FunctionComponent, ReactNode } from 'react';
import styles from './CtaLink.module.css';
import Link from 'next/link';
import cn from 'classnames';

type CtaButtonProps = {
  children: ReactNode;
  classNames?: string;
  href: string;
  openInNewTab?: boolean;
  type?: 'primary' | 'secondary';
};

export const CtaLink: FunctionComponent<CtaButtonProps> = ({
  href,
  children,
  classNames,
  openInNewTab = false,
  type = 'primary',
}) => {
  return (
    <Link
      className={cn(
        styles.button,
        type === 'primary' ? styles.primary : styles.secondary,
        classNames,
      )}
      href={href}
      target={openInNewTab ? '_blank' : '_self'}
    >
      {children}
    </Link>
  );
};
