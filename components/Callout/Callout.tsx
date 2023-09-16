'use client';

import { FunctionComponent } from 'react';
import { Lightbulb } from '@phosphor-icons/react';

type CalloutProps = {
  text: string;
};

export const Callout: FunctionComponent<CalloutProps> = ({ text }) => {
  return (
    <aside className='bg-gray-100 p-4 rounded flex items-start'>
      <div className='text-gray-400 mr-2'>
        <Lightbulb color={'#fbbf24'} size={24} />
      </div>
      <p className='text-gray-700'>{text}</p>
    </aside>
  );
};
