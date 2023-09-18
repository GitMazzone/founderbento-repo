import { Callout } from '@/components';
import Link from 'next/link';

const DesignLanguage = () => {
  return (
    <div className={'flex flex-col gap-3'}>
      <div className={'flex flex-col gap-3'}>
        <h1>Design language</h1>
        <Callout>
          <p>
            Above is an H1, below is the default typography. Edit it in
            globals.css
          </p>
        </Callout>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Body Text</p>
      </div>
      <div className={'mt-10'}>
        <h2>TailwindCSS</h2>
        <Callout>
          <p>
            Here&apos;s a handy{' '}
            <Link
              className={
                'text-orange-400 hover:text-orange-500 active:text-orange-400'
              }
              href={'https://nerdcave.com/tailwind-cheat-sheet'}
              target={'_blank'}
            >
              TailwindCSS cheat sheet
            </Link>
            . But the{' '}
            <Link
              className={
                'text-orange-400 hover:text-orange-500 active:text-orange-400'
              }
              href={'https://tailwindcss.com/'}
              target={'_blank'}
            >
              official documentation
            </Link>{' '}
            is also great.
          </p>
        </Callout>
      </div>
    </div>
  );
};

export default DesignLanguage;
