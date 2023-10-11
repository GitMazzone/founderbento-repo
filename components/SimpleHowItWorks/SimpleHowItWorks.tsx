'use client';

import { Mountains, MusicNotes, Cake } from '@phosphor-icons/react';
import { FunctionComponent, ReactNode } from 'react';
import { Card } from '../Cards';

type Step = {
  icon: ReactNode;
  text: string;
};

const steps: Step[] = [
  {
    icon: <Mountains className={'h-10 w-10 fill-green-400'} weight={'thin'} />,
    text: 'A scene',
  },
  {
    icon: <MusicNotes className={'h-10 w-10 fill-pink-400'} weight={'thin'} />,
    text: 'A song',
  },
  {
    icon: <Cake className={'h-10 w-10 fill-yellow-400'} weight={'thin'} />,
    text: 'Your moment',
  },
];

export const SimpleHowItWorks: FunctionComponent = () => {
  return (
    <div className={'grid grid-cols-3 gap-3 md:gap-5 mb-3 md:mb-5 text-sm'}>
      {steps.map((step) => (
        <Card
          classNames={
            'bg-stone-700 flex-col justify-around gap-2 text-center py-2 ring ring-[0.08rem] md:ring-[0.12rem] ring-purple-400 ring-offset-2 ring-offset-slate-800'
          }
          key={step.text}
        >
          {step.icon}
          {step.text}
        </Card>
      ))}
    </div>
  );
};
