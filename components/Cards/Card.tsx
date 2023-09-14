'use client';

import { FunctionComponent, ReactNode } from 'react';
import styles from './Card.module.css';
import cn from 'classnames';

type CardProps = {
  children: ReactNode;
  classNames?: string;
};

export const Card: FunctionComponent<CardProps> = ({
  children,
  classNames,
}) => {
  return <div className={cn(styles.card, classNames)}>{children}</div>;
};
