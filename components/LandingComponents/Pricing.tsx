import { FunctionComponent } from 'react';
import { CtaLink } from '../Buttons';
import { PricingBenefitItem } from './PricingBenefitItem';

type PricingPlan = {
  title: string;
  price: number;
  benefits: string[];
  popular?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    title: 'Basic',
    price: 29,
    benefits: [
      '720p Video Rendering',
      '2GB Cloud Storage',
      'Basic Video Templates',
    ],
  },
  {
    title: 'Pro',
    price: 59,
    benefits: [
      '1080p Video Rendering',
      '10GB Cloud Storage',
      'Premium Video Templates',
      'Collaboration Tools',
    ],
    popular: true,
  },
  {
    title: 'Enterprise',
    price: 99,
    benefits: [
      '4K Video Rendering',
      'Unlimited Cloud Storage',
      'Custom Video Templates',
      'Advanced Collaboration Tools',
      'Dedicated Support',
    ],
  },
];

export const Pricing: FunctionComponent = () => (
  <div className={'container px-4 mx-auto md:px-6'}>
    <div
      className={
        'grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3'
      }
    >
      {pricingPlans.map(({ title, price, benefits, popular }) => (
        <div
          className={`relative flex flex-col gap-6 p-6 shadow-md rounded-lg justify-between border last:col-span-full ${
            popular
              ? 'shadow shadow-orange-500 md:flex-grow'
              : 'border-gray-300'
          }`}
          key={title}
        >
          {popular && (
            <div
              className={
                'px-3 py-1 text-sm text-white bg-gradient-to-r from-[#ff0f7b] to-[#f97316] rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              }
            >
              Popular
            </div>
          )}
          <div>
            <h3 className={'text-2xl font-bold text-center'}>{title}</h3>
            <div
              className={'mt-4 text-center text-zinc-600 dark:text-zinc-400'}
            >
              <span className={'text-4xl font-bold'}>${price}</span>/ month
            </div>
            <ul className={'mt-4 space-y-2'}>
              {benefits.map((benefit) => (
                <PricingBenefitItem benefit={benefit} key={benefit} />
              ))}
            </ul>
          </div>
          <CtaLink
            classNames={'w-full'}
            href={'#'}
            type={popular ? 'primary' : 'secondary'}
          >
            Buy now
          </CtaLink>
        </div>
      ))}
    </div>
  </div>
);
