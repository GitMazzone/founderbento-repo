'use client';

import { FunctionComponent } from 'react';
import { Info } from '@phosphor-icons/react';

type CalloutProps = {
  text: string;
};

export const Callout: FunctionComponent<CalloutProps> = ({ text }) => {
  return (
    <aside className='bg-zinc-100 shadow p-4 rounded flex items-center gap-2'>
      <div className='bg-orange-300 rounded-full p-1'>
        <Info size={24} />
      </div>
      <p className='text-stone-800'>{text}</p>
    </aside>
  );
};
