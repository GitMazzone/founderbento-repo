'use client';

import { CheckCircle } from '@phosphor-icons/react';
import { FunctionComponent } from 'react';

export const PricingBenefitItem: FunctionComponent<{ benefit: string }> = ({
  benefit,
}) => (
  <li className={'flex items-center gap-3'}>
    <CheckCircle
      className={'h-6 w-6 shrink-0 fill-green-500'}
      weight={'fill'}
    />
    {benefit}
  </li>
);
