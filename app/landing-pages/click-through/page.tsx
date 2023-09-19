'use client';

import { Callout, CtaLink, TextCtaImage } from '@/components';
import { Megaphone } from '@phosphor-icons/react';

const ClickThroughLanding = () => {
  return (
    // TODO: spacing component for between and within sections
    <div className={'pageContainer'}>
      {/* Hero section */}
      <div className={'flex flex-col items-center gap-5 text-center'}>
        <h1>A unique value proposition for an easy YES</h1>
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
      <div className={'py-14'}></div>

      <Callout>
        <p>
          This is just a sample layout, proven to be effective; change up the
          order to suit your offer.
        </p>
      </Callout>

      {/* TODO: spacer, refactor */}
      <div className={'py-14'}></div>

      {/* Problem, product, results section */}
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

      {/* TODO: spacer, refactor */}
      <div className={'py-10'}></div>

      {/* How it works */}
      <h2 className={'text-center'}>How it works</h2>

      {/* TODO: spacer, refactor */}
      <div className={'py-6'}></div>

      <div className={'flex flex-col'}>
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
          imgSrc={'/images/landing-demo-2.webp'}
          imgAlt={'Woman using a laptop, working on her next startup idea'}
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
          imgSrc={'/images/landing-demo-2.webp'}
          imgAlt={'Woman using a laptop, working on her next startup idea'}
          imgHeight={250}
          imgWidth={500}
          blurDataURL={
            'data:image/webp;base64,UklGRm4EAABXRUJQVlA4WAoAAAAgAAAAcwEAuQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgggAIAABAeAJ0BKnQBugA+7XCxVammJCMh8PnpMB2JaW7fcRijyP9TbgA7Yz/qPddgAcB7crY30XSoEpPHUxwasRVMDshxZPWeX9VeQp/xHtVjJ9jfFGS7DvGsOH3yeI3Koz7Q1H+KNzno9Z79E5O4687QSttFJq6IqbNiBzMnvlDiv/4m8YJvY6k8oc57SkMKbvpUF5s7TrCnb5L4GVvKelVAdTYHKw++TuNOnTtUdp9gXzOTohWWuAa0IiK2I1WNafR950KXpTnClLKk8mmdOLftqauoblmLPDRvYf4oRbOWjXEEdytlETuau0yt8mRhVz5/TKKuZT6SSBY+wAD+8OB8nqeClGKardtxA9b9ct0IxnwH9iZtsk1mZkToEQRowMe6AAyjYkxxgZrb8HY0Z67i/BwQD5KfncraKOwsBLZ8sk24Cf6vETsqrbo5HY9la7BbWfPoU+2b/5tR4m7UXzZa3a/5WfpNw8++RL9KBkQ9DBM6H23JHOxHHb6bmKNENnjTFYmCE8DAOtfiLF6gACqg4LP+RrZ5+X4oWO9AZnlmAErxFDk6siTRyprtHzohLxe2id4Yp23TdNqcfUnGQKHzX5cQ5bBa6EPwHgrcOweSuk+1pfiEfSryfdim+GFJUpXv4AKuDHRyhRuQ9aD6loTKjjtgHAPKZqHV9his3YiDLZiIk0jjv/TMuOVrm8scrC/IyWkdVxEsqeRhAN0RTaTjOZU3UVeBLoYx7celZ2Uw2aEIUklRhV3v7W3634Ocdn9k4pMPunp+AnC5/RUNpM8bQdKhKLNiRSCM3hPNKhPOBhn/LvGV34JCz6Ph+hAPdpKUEaYSfvtmCK72JcA6ClAAAAA='
          }
        />

        <TextCtaImage
          text={'Get Dream Outcome X.'}
          imgSrc={'/images/landing-demo-2.webp'}
          imgAlt={'Woman using a laptop, working on her next startup idea'}
          imgHeight={250}
          imgWidth={500}
          blurDataURL={
            'data:image/webp;base64,UklGRm4EAABXRUJQVlA4WAoAAAAgAAAAcwEAuQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgggAIAABAeAJ0BKnQBugA+7XCxVammJCMh8PnpMB2JaW7fcRijyP9TbgA7Yz/qPddgAcB7crY30XSoEpPHUxwasRVMDshxZPWeX9VeQp/xHtVjJ9jfFGS7DvGsOH3yeI3Koz7Q1H+KNzno9Z79E5O4687QSttFJq6IqbNiBzMnvlDiv/4m8YJvY6k8oc57SkMKbvpUF5s7TrCnb5L4GVvKelVAdTYHKw++TuNOnTtUdp9gXzOTohWWuAa0IiK2I1WNafR950KXpTnClLKk8mmdOLftqauoblmLPDRvYf4oRbOWjXEEdytlETuau0yt8mRhVz5/TKKuZT6SSBY+wAD+8OB8nqeClGKardtxA9b9ct0IxnwH9iZtsk1mZkToEQRowMe6AAyjYkxxgZrb8HY0Z67i/BwQD5KfncraKOwsBLZ8sk24Cf6vETsqrbo5HY9la7BbWfPoU+2b/5tR4m7UXzZa3a/5WfpNw8++RL9KBkQ9DBM6H23JHOxHHb6bmKNENnjTFYmCE8DAOtfiLF6gACqg4LP+RrZ5+X4oWO9AZnlmAErxFDk6siTRyprtHzohLxe2id4Yp23TdNqcfUnGQKHzX5cQ5bBa6EPwHgrcOweSuk+1pfiEfSryfdim+GFJUpXv4AKuDHRyhRuQ9aD6loTKjjtgHAPKZqHV9his3YiDLZiIk0jjv/TMuOVrm8scrC/IyWkdVxEsqeRhAN0RTaTjOZU3UVeBLoYx7celZ2Uw2aEIUklRhV3v7W3634Ocdn9k4pMPunp+AnC5/RUNpM8bQdKhKLNiRSCM3hPNKhPOBhn/LvGV34JCz6Ph+hAPdpKUEaYSfvtmCK72JcA6ClAAAAA='
          }
          imageOnRight={true}
        />
      </div>
    </div>
  );
};

export default ClickThroughLanding;
