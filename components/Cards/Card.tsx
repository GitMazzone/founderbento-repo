'use client';

import { FunctionComponent, ReactNode } from 'react';
import cn from 'classnames';

type CardProps = {
  children: ReactNode;
  classNames?: string;
};

export const Card: FunctionComponent<CardProps> = ({
  children,
  classNames,
}) => {
  return (
    <div
      className={cn('flex items-center justify-center rounded-md', classNames)}
    >
      {children}
    </div>
  );
};
