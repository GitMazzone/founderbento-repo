import Image from 'next/image';
import { FunctionComponent } from 'react';
import { CtaLink } from '../index';

interface TextCtaImageProps {
  text: string;
  ctaLink?: string;
  ctaText?: string;
  imgSrc: string;
  imgAlt: string;
  imgHeight: number;
  imgWidth: number;
  blurDataURL: string;
  imageOnRight?: boolean;
}

export const TextCtaImage: FunctionComponent<TextCtaImageProps> = ({
  text,
  ctaLink,
  ctaText,
  imgSrc,
  imgAlt,
  imgHeight,
  imgWidth,
  blurDataURL,
  imageOnRight = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-5 items-center ${
        imageOnRight ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className='relative'>
        <Image
          alt={imgAlt}
          className='rounded-xl shadow'
          src={imgSrc}
          height={imgHeight}
          width={imgWidth}
          placeholder={'blur'}
          blurDataURL={blurDataURL}
        />
      </div>
      <div className='flex flex-col gap-5 items-start w-full md:w-1/2'>
        <p>{text}</p>
        {ctaLink && <CtaLink href='#'>{ctaText}</CtaLink>}
      </div>
    </div>
  );
};
