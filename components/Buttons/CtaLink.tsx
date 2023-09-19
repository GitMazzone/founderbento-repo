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
};

export const CtaLink: FunctionComponent<CtaButtonProps> = ({
  href,
  children,
  classNames,
  openInNewTab = false,
}) => {
  return (
    <Link
      className={cn(styles.button, classNames)}
      href={href}
      target={openInNewTab ? '_blank' : '_self'}
    >
      {children}
    </Link>
  );
};
