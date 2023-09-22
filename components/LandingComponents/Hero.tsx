import { FunctionComponent } from 'react';
import { CtaLink } from '../Buttons';
import { BenefitsCallout } from './BenefitsCallout';

const benefits = ['Benefit A', 'Good Thing B', 'Bonus C'];

export const Hero: FunctionComponent = () => {
  return (
    <div className={'flex flex-col items-center gap-5 text-center'}>
      <h1>A unique value proposition for an easy YES</h1>
      <p>Dream outcome X while avoiding pain point Y, all in time frame Z.</p>
      {/* TODO: use theme colors */}
      <CtaLink href={'#'}>Enticing CTA</CtaLink>

      {/* TODO: replace with spacer */}
      <div className={'py-2'}></div>

      <BenefitsCallout benefits={benefits} />
    </div>
  );
};
