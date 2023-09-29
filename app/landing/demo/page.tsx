'use client';

import {
  CtaLink,
  Footer,
  Hero,
  Newsletter,
  Pricing,
  SeoText,
  Spacer,
  TestimonialGrid,
  TextCtaImage,
} from '@/components';
import type { Testimonial } from '@/components';

const testimonials: Testimonial[] = [
  {
    imageSrc: '/images/testimonial-1.webp',
    name: 'Alice',
    testimonial:
      'I finally launched my own product thanks to this app. It solved all my problems in this space. Support was top notch. Will definitely use again for my next project!',
  },
  {
    imageSrc: '/images/testimonial-2.webp',
    name: 'Kirsten',
    testimonial: 'Helped me bring my idea to life!',
  },
  {
    imageSrc: '/images/testimonial-3.webp',
    name: 'Xander',
    testimonial: 'Could not ask for better support.',
  },
  {
    imageSrc: '/images/testimonial-4.webp',
    name: 'Nick',
    testimonial: 'Never going back to Competitor. Truly a game changer.',
  },
  {
    imageSrc: '/images/testimonial-5.webp',
    name: 'Ivy',
    testimonial: 'This solved my pain point in 3 days!',
  },
];

const ClickThroughLanding = () => {
  return (
    <>
      <div className={'pageContainer max-w-6xl mx-auto'}>
        <Hero />

        <Spacer type={'section'} />

        <TextCtaImage
          text={
            'That awesome value proposition expanded on even further. More about your niche reaching their dream outcome and avoiding their pain points by buying your offer.'
          }
          imgSrc={'/images/landing-demo.webp'}
          imgAlt={'Man using a laptop, working on his next startup idea'}
          imgHeight={250}
          imgWidth={500}
          blurDataURL={
            'data:image/webp;base64,UklGRtQEAABXRUJQVlA4WAoAAAAgAAAAYgEAsAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg5gIAANAgAJ0BKmMBsQA+7W6uUrOxLiKmFFvycB2JaW7d1fLUHEYbUDuxxAObeE191EmvImhEpLqnfdRW6qexy5b/6rFa9g2F7/gC/2ndhCStfYhMwAxwTJWxw+DG/HZ1a2w74mceazT4m5kpD2VW9E9W2J4GHDwDgm8ZFqLr0yVQ7hgIDFuujnYGBq5hORQBi3UrdhcSSrrtJDRak8g0Wd9UIrnAjI0xaY2NNR3XQh4yqm2/RVMPDcWWokaLCQJ7XBzY2AoMkjBgIcWrHIfCUbek7CI+Fmo69cU1wPh3sumtp+pGemrYXNEZ6UX7uZpEEjZfWbPQnxpOoEiN+LtbCDFGCaSgAukrCBnSOjCRrAnPmgAA/vDeY3BrHKZKyZtdAD/9luJBAQa3phRFdYVtnae9B0mn416SOG+EFQn8H3KatkEj9OCHvk8DbYFprGnSLH+J4kCEpBRWwwWpI1v1Qwj/Y4A2QhMg6OscTH/KHO4CW2S8eLnAcjEC1dJ6M4n8BW5Ug5YVog1j+csFfE2xZQkcR7m+PKUN+viaTD82IcSi1MAkRdH89wRg5Z75t5J8LycL/DPve0VMxZJEpixv09AyA/NQIE20Ba1KW7JpC7pGothZc0KIT788f98faauFFYC+1zsBXQaQM1NbAyf7xzsH+hZ4ciorO4AyizteBFfnMjarvJJltHpHcmZd7MHzkQd8Auz7tLq0rz3oZOXTf/C2ko1m7S3trlLAt4QkwzI0p9iaPr+yyxgkf7uXBX5SNZjNlOj8zoy6rNswTiwGPEVNjEECZ4ITVgO+2zBaG/EKR+rQzMqiXD0+elOPb2f1LXJaOug5T8MzMsmBk7Vw0wyeb3MLHkbFRgI6HyDT0pTvkLgBS7YwzIhrdIx88x2jLAlCIv/VO58K5S0czBF62reH/idkZzQ19y0qayo0wIKM3uNznKMUs6FiVAtqVgHJI7F6bhQ8XhZ69CVRxtRQnnRqsHttwAAAAAA='
          }
          ctaLink={'#'}
          ctaText={'Enticing CTA'}
          imageOnRight={true}
        />

        <Spacer type={'section'} />

        <div className={'flex flex-col gap-5'}>
          <h2 className={'text-center'}>How it works</h2>
          <TextCtaImage
            text={'Pain-free, easy entry point into your offer.'}
            imgSrc={'/images/landing-demo-2.webp'}
            imgAlt={'Woman using a laptop, working on her next startup idea'}
            imgHeight={250}
            imgWidth={500}
            blurDataURL={
              'data:image/webp;base64,UklGRm4EAABXRUJQVlA4WAoAAAAgAAAAcwEAuQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgggAIAABAeAJ0BKnQBugA+7XCxVammJCMh8PnpMB2JaW7fcRijyP9TbgA7Yz/qPddgAcB7crY30XSoEpPHUxwasRVMDshxZPWeX9VeQp/xHtVjJ9jfFGS7DvGsOH3yeI3Koz7Q1H+KNzno9Z79E5O4687QSttFJq6IqbNiBzMnvlDiv/4m8YJvY6k8oc57SkMKbvpUF5s7TrCnb5L4GVvKelVAdTYHKw++TuNOnTtUdp9gXzOTohWWuAa0IiK2I1WNafR950KXpTnClLKk8mmdOLftqauoblmLPDRvYf4oRbOWjXEEdytlETuau0yt8mRhVz5/TKKuZT6SSBY+wAD+8OB8nqeClGKardtxA9b9ct0IxnwH9iZtsk1mZkToEQRowMe6AAyjYkxxgZrb8HY0Z67i/BwQD5KfncraKOwsBLZ8sk24Cf6vETsqrbo5HY9la7BbWfPoU+2b/5tR4m7UXzZa3a/5WfpNw8++RL9KBkQ9DBM6H23JHOxHHb6bmKNENnjTFYmCE8DAOtfiLF6gACqg4LP+RrZ5+X4oWO9AZnlmAErxFDk6siTRyprtHzohLxe2id4Yp23TdNqcfUnGQKHzX5cQ5bBa6EPwHgrcOweSuk+1pfiEfSryfdim+GFJUpXv4AKuDHRyhRuQ9aD6loTKjjtgHAPKZqHV9his3YiDLZiIk0jjv/TMuOVrm8scrC/IyWkdVxEsqeRhAN0RTaTjOZU3UVeBLoYx7celZ2Uw2aEIUklRhV3v7W3634Ocdn9k4pMPunp+AnC5/RUNpM8bQdKhKLNiRSCM3hPNKhPOBhn/LvGV34JCz6Ph+hAPdpKUEaYSfvtmCK72JcA6ClAAAAA='
            }
          />
          <TextCtaImage
            text={'Minimal process to get your customer to their first win.'}
            imgSrc={'/images/landing-demo-3.webp'}
            imgAlt={
              'Two students using a laptop, working on their next startup idea'
            }
            imgHeight={250}
            imgWidth={500}
            blurDataURL={
              'data:image/webp;base64,UklGRm4EAABXRUJQVlA4WAoAAAAgAAAAcwEAuQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgggAIAABAeAJ0BKnQBugA+7XCxVammJCMh8PnpMB2JaW7fcRijyP9TbgA7Yz/qPddgAcB7crY30XSoEpPHUxwasRVMDshxZPWeX9VeQp/xHtVjJ9jfFGS7DvGsOH3yeI3Koz7Q1H+KNzno9Z79E5O4687QSttFJq6IqbNiBzMnvlDiv/4m8YJvY6k8oc57SkMKbvpUF5s7TrCnb5L4GVvKelVAdTYHKw++TuNOnTtUdp9gXzOTohWWuAa0IiK2I1WNafR950KXpTnClLKk8mmdOLftqauoblmLPDRvYf4oRbOWjXEEdytlETuau0yt8mRhVz5/TKKuZT6SSBY+wAD+8OB8nqeClGKardtxA9b9ct0IxnwH9iZtsk1mZkToEQRowMe6AAyjYkxxgZrb8HY0Z67i/BwQD5KfncraKOwsBLZ8sk24Cf6vETsqrbo5HY9la7BbWfPoU+2b/5tR4m7UXzZa3a/5WfpNw8++RL9KBkQ9DBM6H23JHOxHHb6bmKNENnjTFYmCE8DAOtfiLF6gACqg4LP+RrZ5+X4oWO9AZnlmAErxFDk6siTRyprtHzohLxe2id4Yp23TdNqcfUnGQKHzX5cQ5bBa6EPwHgrcOweSuk+1pfiEfSryfdim+GFJUpXv4AKuDHRyhRuQ9aD6loTKjjtgHAPKZqHV9his3YiDLZiIk0jjv/TMuOVrm8scrC/IyWkdVxEsqeRhAN0RTaTjOZU3UVeBLoYx7celZ2Uw2aEIUklRhV3v7W3634Ocdn9k4pMPunp+AnC5/RUNpM8bQdKhKLNiRSCM3hPNKhPOBhn/LvGV34JCz6Ph+hAPdpKUEaYSfvtmCK72JcA6ClAAAAA='
            }
            imageOnRight={true}
          />
          <TextCtaImage
            text={
              'The first win! So glad they chose your offer, momentum is building!'
            }
            imgSrc={'/images/landing-demo-4.webp'}
            imgAlt={
              'Two coworkers walking down a street in NYC, on their way to work'
            }
            imgHeight={250}
            imgWidth={500}
            blurDataURL={
              'data:image/webp;base64,UklGRm4EAABXRUJQVlA4WAoAAAAgAAAAcwEAuQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgggAIAABAeAJ0BKnQBugA+7XCxVammJCMh8PnpMB2JaW7fcRijyP9TbgA7Yz/qPddgAcB7crY30XSoEpPHUxwasRVMDshxZPWeX9VeQp/xHtVjJ9jfFGS7DvGsOH3yeI3Koz7Q1H+KNzno9Z79E5O4687QSttFJq6IqbNiBzMnvlDiv/4m8YJvY6k8oc57SkMKbvpUF5s7TrCnb5L4GVvKelVAdTYHKw++TuNOnTtUdp9gXzOTohWWuAa0IiK2I1WNafR950KXpTnClLKk8mmdOLftqauoblmLPDRvYf4oRbOWjXEEdytlETuau0yt8mRhVz5/TKKuZT6SSBY+wAD+8OB8nqeClGKardtxA9b9ct0IxnwH9iZtsk1mZkToEQRowMe6AAyjYkxxgZrb8HY0Z67i/BwQD5KfncraKOwsBLZ8sk24Cf6vETsqrbo5HY9la7BbWfPoU+2b/5tR4m7UXzZa3a/5WfpNw8++RL9KBkQ9DBM6H23JHOxHHb6bmKNENnjTFYmCE8DAOtfiLF6gACqg4LP+RrZ5+X4oWO9AZnlmAErxFDk6siTRyprtHzohLxe2id4Yp23TdNqcfUnGQKHzX5cQ5bBa6EPwHgrcOweSuk+1pfiEfSryfdim+GFJUpXv4AKuDHRyhRuQ9aD6loTKjjtgHAPKZqHV9his3YiDLZiIk0jjv/TMuOVrm8scrC/IyWkdVxEsqeRhAN0RTaTjOZU3UVeBLoYx7celZ2Uw2aEIUklRhV3v7W3634Ocdn9k4pMPunp+AnC5/RUNpM8bQdKhKLNiRSCM3hPNKhPOBhn/LvGV34JCz6Ph+hAPdpKUEaYSfvtmCK72JcA6ClAAAAA='
            }
          />
        </div>

        <Spacer type={'component'} />

        <div className={'flex flex-col items-start gap-3'}>
          <p>
            Here&apos;s what&apos;s at stake: limited availability offer,
            opportunity cost of waiting, some risk of not using this CTA.
          </p>
          <CtaLink href={'#'} type={'secondary'}>
            Enticing CTA
          </CtaLink>
        </div>

        <Spacer type={'section'} />

        <div className={'flex flex-col gap-8'}>
          <h2 className={'text-center'}>What our users are saying</h2>
          <TestimonialGrid testimonials={testimonials} />
          <CtaLink classNames={'m-auto'} href={'#'}>
            Enticing CTA
          </CtaLink>
        </div>

        <Spacer type={'section'} />

        {/* TODO: Pricing component & Spacer */}
        <Pricing />

        <Spacer type={'section'} />

        <Newsletter
          heading={'Weekly newsletter about Your Service'}
          text={
            'A sentence or two about how much value a 5-min read once a week can provide. Also a good chance to appeal to those on the fence.'
          }
          ctaText={'Sign up'}
          inputPlaceholder={'your@email.com'}
        />

        <Spacer type={'section'} />

        {/* TODO: FAQ component & Spacer */}

        <SeoText />

        <Spacer type={'section'} />
      </div>
      <Footer />
    </>
  );
};

export default ClickThroughLanding;
