import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Callout } from '@/components';

export const SeoText: FunctionComponent = () => {
  return (
    <div className={'flex flex-col gap-5'}>
      <h4>An SEO-optimized keyword paragraph or two</h4>
      <Callout>
        <p>
          It&apos;s a good idea to put internal links here as well. More
          entertaining ipsum courtesy of{' '}
          {/* TODO: replace with TextLink component */}
          <Link
            className={'text-orange-500'}
            href={'https://hipsum.co/'}
            target={'_blank'}
          >
            Hipster Ipsum
          </Link>
        </p>
      </Callout>
      <p>
        Man bun drinking vinegar sus gluten-free pork belly. Pop-up hexagon
        iceland sartorial health goth, 90&apos;s gentrify you probably
        haven&apos;t heard of them succulents narwhal. Marfa JOMO green juice
        salvia. Biodiesel pop-up church-key, unicorn umami sus brunch tofu
        semiotics asymmetrical.
      </p>
      <p>
        8-bit yr salvia beard meggings. Iceland marxism tattooed jean shorts
        gentrify ugh distillery yes plz JOMO art party authentic franzen. Tofu
        vegan YOLO cred ennui palo santo pinterest keffiyeh migas sus banh mi
        everyday carry. Swag pork belly bicycle rights chia viral vegan grailed
        blackbird spyplane flexitarian next level farm-to-table cred flannel
        trust fund.
      </p>
      {/* TODO: replace with TextLink component */}
      <Link className={'text-orange-500'} href={'#'} target={'_blank'}>
        Read more on our blog
      </Link>
    </div>
  );
};
