'use client';

import { FunctionComponent, ReactNode } from 'react';
import { Info } from '@phosphor-icons/react';

type CalloutProps = {
  children: ReactNode;
};

export const Callout: FunctionComponent<CalloutProps> = ({ children }) => {
  return (
    <aside className='bg-zinc-100 shadow p-4 rounded text-stone-800 flex items-center gap-2'>
      <div className='bg-orange-300 rounded-full p-1'>
        <Info size={24} />
      </div>
      {children}
    </aside>
  );
};
