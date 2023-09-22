'use client';

import { Megaphone } from '@phosphor-icons/react';
import { FunctionComponent } from 'react';

type BenefitsCalloutProps = {
  benefits: string[];
};

export const BenefitsCallout: FunctionComponent<BenefitsCalloutProps> = ({
  benefits,
}) => {
  return (
    <div className={'flex flex-col gap-5 w-full md:flex-row md:gap-0'}>
      {benefits.map((benefit) => (
        <div
          className={'flex items-center justify-center gap-2 w-full'}
          key={benefit}
        >
          <Megaphone className={'bg-gray-200 rounded-md p-2 h-10 w-10'} />
          <p>{benefit}</p>
        </div>
      ))}
    </div>
  );
};
