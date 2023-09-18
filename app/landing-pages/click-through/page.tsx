'use client';

import { CtaLink } from '@/components';
import { Megaphone } from '@phosphor-icons/react';
import Image from 'next/image';

const ClickThroughLanding = () => {
  return (
    // TODO: spacing component for between and within sections
    <div className={'pageContainer gap-5'}>
      {/* Hero section */}
      <div className={'flex flex-col items-center gap-5 text-center'}>
        <h1>A unique value proposition that&apos;s impossible to say no to</h1>
        <p>Dream outcome X while avoiding pain point Y, all in time frame Z.</p>
        {/* TODO: use theme colors */}
        <CtaLink href='#'>Enticing CTA</CtaLink>
        {/* Benefit callout */} {/* TODO: replace mt-10 with spacer */}
        <div className={'flex justify-between w-full mt-10'}>
          <div className={'flex items-center gap-2'}>
            <Megaphone className={'bg-gray-200 rounded-md p-2 h-10 w-10'} />
            <p>Benefit A</p>
          </div>
          <div className={'flex items-center gap-2'}>
            <Megaphone className={'bg-gray-200 rounded-md p-2 h-10 w-10'} />
            <p>Good Thing B</p>
          </div>
          <div className={'flex items-center gap-2'}>
            <Megaphone className={'bg-gray-200 rounded-md p-2 h-10 w-10'} />
            <p>Bonus C</p>
          </div>
        </div>
      </div>

      {/* TODO: spacer, refactor */}
      <div className={'py-12'}></div>

      {/* Problem, product, results section */}
      {/* Text + CTA + graphic */}
      <div className={'flex gap-5 items-center'}>
        <div className={'flex flex-col gap-5 items-start w-1/2'}>
          <p>
            That awesome value proposition expanded on even further. <br />
            More about your niche reaching their dream outcome and avoiding
            their pain points by buying your offer.
          </p>
          {/* TODO: use theme colors */}
          <CtaLink href='#'>Enticing CTA</CtaLink>
        </div>
        <div className={'relative'}>
          <Image
            alt={'Man using a laptop, working on his next startup idea'}
            className={'rounded-xl shadow'}
            src={'/images/landing-value-prop.webp'}
            height={250}
            width={500}
            placeholder={'blur'}
            blurDataURL={
              'data:image/webp;base64,UklGRtQEAABXRUJQVlA4WAoAAAAgAAAAYgEAsAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg5gIAANAgAJ0BKmMBsQA+7W6uUrOxLiKmFFvycB2JaW7d1fLUHEYbUDuxxAObeE191EmvImhEpLqnfdRW6qexy5b/6rFa9g2F7/gC/2ndhCStfYhMwAxwTJWxw+DG/HZ1a2w74mceazT4m5kpD2VW9E9W2J4GHDwDgm8ZFqLr0yVQ7hgIDFuujnYGBq5hORQBi3UrdhcSSrrtJDRak8g0Wd9UIrnAjI0xaY2NNR3XQh4yqm2/RVMPDcWWokaLCQJ7XBzY2AoMkjBgIcWrHIfCUbek7CI+Fmo69cU1wPh3sumtp+pGemrYXNEZ6UX7uZpEEjZfWbPQnxpOoEiN+LtbCDFGCaSgAukrCBnSOjCRrAnPmgAA/vDeY3BrHKZKyZtdAD/9luJBAQa3phRFdYVtnae9B0mn416SOG+EFQn8H3KatkEj9OCHvk8DbYFprGnSLH+J4kCEpBRWwwWpI1v1Qwj/Y4A2QhMg6OscTH/KHO4CW2S8eLnAcjEC1dJ6M4n8BW5Ug5YVog1j+csFfE2xZQkcR7m+PKUN+viaTD82IcSi1MAkRdH89wRg5Z75t5J8LycL/DPve0VMxZJEpixv09AyA/NQIE20Ba1KW7JpC7pGothZc0KIT788f98faauFFYC+1zsBXQaQM1NbAyf7xzsH+hZ4ciorO4AyizteBFfnMjarvJJltHpHcmZd7MHzkQd8Auz7tLq0rz3oZOXTf/C2ko1m7S3trlLAt4QkwzI0p9iaPr+yyxgkf7uXBX5SNZjNlOj8zoy6rNswTiwGPEVNjEECZ4ITVgO+2zBaG/EKR+rQzMqiXD0+elOPb2f1LXJaOug5T8MzMsmBk7Vw0wyeb3MLHkbFRgI6HyDT0pTvkLgBS7YwzIhrdIx88x2jLAlCIv/VO58K5S0czBF62reH/idkZzQ19y0qayo0wIKM3uNznKMUs6FiVAtqVgHJI7F6bhQ8XhZ69CVRxtRQnnRqsHttwAAAAAA='
            }
          />
        </div>
      </div>

      {/* TODO: spacer, refactor */}
      <div className={'py-12'}></div>

      {/* How it works */}
    </div>
  );
};

export default ClickThroughLanding;
