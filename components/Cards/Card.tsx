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
      className={cn(
        'flex gap-3 items-center justify-center p-4 rounded-lg shadow-md',
        classNames,
      )}
    >
      {children}
    </div>
  );
};
