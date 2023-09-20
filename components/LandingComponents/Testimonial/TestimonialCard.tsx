'use client';

import Image from 'next/image';
import { Card } from '../../Cards';
import { Star } from '@phosphor-icons/react';

interface TestimonialCardProps {
  imageSrc: string;
  name: string;
  testimonial: string;
}

export const TestimonialCard: React.FunctionComponent<TestimonialCardProps> = ({
  imageSrc,
  name,
  testimonial,
}) => {
  return (
    <Card classNames={'flex flex-col items-start break-inside-avoid'}>
      <div className={'flex items-center gap-2'}>
        <Image
          className={'rounded-full'}
          height={100}
          width={100}
          src={imageSrc}
          alt={`${name}'s avatar picture`}
        />
        <span className={'font-bold'}>{name}</span>
      </div>
      <div className={'flex gap-1'}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={28}
            className={'fill-yellow-400'}
            weight={'fill'}
          />
        ))}
      </div>
      <p className={'text-center'}>{testimonial}</p>
    </Card>
  );
};
