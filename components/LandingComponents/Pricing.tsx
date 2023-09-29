import { FunctionComponent } from 'react';
import { CtaLink } from '../Buttons';

export const Pricing: FunctionComponent = () => {
  return (
    <div className={'container px-4 mx-auto md:px-6'}>
      <div
        className={
          'grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3'
        }
      >
        <div
          className={
            'flex flex-col gap-6 p-6 shadow-md rounded-lg justify-between border border-gray-300'
          }
        >
          <div>
            <h3 className={'text-2xl font-bold text-center'}>Basic</h3>
            <div
              className={'mt-4 text-center text-zinc-600 dark:text-zinc-400'}
            >
              <span className={'text-4xl font-bold'}>$29</span>/ month
            </div>
            <ul className={'mt-4 space-y-2'}>
              <li className={'flex items-center'}>
                <svg
                  className={
                    'text-white text-xs bg-green-500 rounded-full mr-2 p-1'
                  }
                  fill={'none'}
                  height={24}
                  stroke={'currentColor'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                  viewBox={'0 0 24 24'}
                  width={24}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <polyline points={'20 6 9 17 4 12'} />
                </svg>
                720p Video Rendering
              </li>
              <li className='flex items-center'>
                <svg
                  className={
                    'text-white text-xs bg-green-500 rounded-full mr-2 p-1'
                  }
                  fill={'none'}
                  height={24}
                  stroke={'currentColor'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                  viewBox={'0 0 24 24'}
                  width={24}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <polyline points={'20 6 9 17 4 12'} />
                </svg>
                2GB Cloud Storage
              </li>
              <li className={'flex items-center'}>
                <svg
                  className={
                    'text-white text-xs bg-green-500 rounded-full mr-2 p-1'
                  }
                  fill={'none'}
                  height={24}
                  stroke={'currentColor'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                  viewBox={'0 0 24 24'}
                  width={24}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <polyline points={'20 6 9 17 4 12'} />
                </svg>
                Basic Video Templates
              </li>
            </ul>
          </div>
          <CtaLink classNames={'w-full'} href={'#'} type={'secondary'}>
            Buy now
          </CtaLink>
        </div>
        <div
          className={
            'relative flex flex-col gap-6 p-6 shadow-md rounded-lg justify-between border border-green-500 md:flex-grow'
          }
        >
          <div
            className={
              'px-3 py-1 text-sm text-white bg-gradient-to-r from-[#ff0f7b] to-[#f97316] rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            }
          >
            Popular
          </div>
          <div>
            <h3 className={'text-2xl font-bold text-center'}>Pro</h3>
            <div
              className={'mt-4 text-center text-zinc-600 dark:text-zinc-400'}
            >
              <span className={'text-4xl font-bold'}>$59</span>/ month
            </div>
            <ul className={'mt-4 space-y-2'}>
              <li className={'flex items-center'}>
                <svg
                  className={
                    'text-white text-2xs bg-green-500 rounded-full mr-2 p-1'
                  }
                  fill={'none'}
                  height={24}
                  stroke={'currentColor'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                  viewBox={'0 0 24 24'}
                  width={24}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <polyline points={'20 6 9 17 4 12'} />
                </svg>
                1080p Video Rendering
              </li>
              <li className={'flex items-center'}>
                <svg
                  className={
                    'text-white text-2xs bg-green-500 rounded-full mr-2 p-1'
                  }
                  fill={'none'}
                  height={24}
                  stroke={'currentColor'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                  viewBox={'0 0 24 24'}
                  width={24}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <polyline points={'20 6 9 17 4 12'} />
                </svg>
                10GB Cloud Storage
              </li>
              <li className={'flex items-center'}>
                <svg
                  className={
                    'text-white text-2xs bg-green-500 rounded-full mr-2 p-1'
                  }
                  fill={'none'}
                  height={24}
                  stroke={'currentColor'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                  viewBox={'0 0 24 24'}
                  width={24}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <polyline points={'20 6 9 17 4 12'} />
                </svg>
                Premium Video Templates
              </li>
              <li className={'flex items-center'}>
                <svg
                  className={
                    'text-white text-2xs bg-green-500 rounded-full mr-2 p-1'
                  }
                  fill={'none'}
                  height={24}
                  stroke={'currentColor'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                  viewBox={'0 0 24 24'}
                  width={24}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <polyline points={'20 6 9 17 4 12'} />
                </svg>
                Collaboration Tools
              </li>
            </ul>
          </div>
          <CtaLink
            classNames={'w-full bg-gradient-to-r from-[#ff0f7b] to-[#f97316]'}
            href={'#'}
          >
            Buy now
          </CtaLink>
        </div>
        <div
          className={
            'flex flex-col gap-6 p-6 shadow-md rounded-lg justify-between border border-gray-300'
          }
        >
          <div>
            <h3 className={'text-2xl font-bold text-center'}>Enterprise</h3>
            <div
              className={'mt-4 text-center text-zinc-600 dark:text-zinc-400'}
            >
              <span className={'text-4xl font-bold'}>$99</span>/ month
            </div>
            <ul className={'mt-4 space-y-2'}>
              <li className={'flex items-center'}>
                <svg
                  className={
                    'text-white text-xs bg-green-500 rounded-full mr-2 p-1'
                  }
                  fill={'none'}
                  height={24}
                  stroke={'currentColor'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                  viewBox={'0 0 24 24'}
                  width={24}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <polyline points={'20 6 9 17 4 12'} />
                </svg>
                4K Video Rendering
              </li>
              <li className={'flex items-center'}>
                <svg
                  className={
                    'text-white text-xs bg-green-500 rounded-full mr-2 p-1'
                  }
                  fill={'none'}
                  height={24}
                  stroke={'currentColor'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                  viewBox={'0 0 24 24'}
                  width={24}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <polyline points={'20 6 9 17 4 12'} />
                </svg>
                Unlimited Cloud Storage
              </li>
              <li className={'flex items-center'}>
                <svg
                  className={
                    'text-white text-xs bg-green-500 rounded-full mr-2 p-1'
                  }
                  fill={'none'}
                  height={24}
                  stroke={'currentColor'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                  viewBox={'0 0 24 24'}
                  width={24}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <polyline points={'20 6 9 17 4 12'} />
                </svg>
                Custom Video Templates
              </li>
              <li className={'flex items-center'}>
                <svg
                  className={
                    'text-white text-xs bg-green-500 rounded-full mr-2 p-1'
                  }
                  fill={'none'}
                  height={24}
                  stroke={'currentColor'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                  viewBox={'0 0 24 24'}
                  width={24}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <polyline points={'20 6 9 17 4 12'} />
                </svg>
                Advanced Collaboration Tools
              </li>
              <li className={'flex items-center'}>
                <svg
                  className={
                    'text-white text-xs bg-green-500 rounded-full mr-2 p-1'
                  }
                  fill={'none'}
                  height={24}
                  stroke={'currentColor'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                  viewBox={'0 0 24 24'}
                  width={24}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <polyline points={'20 6 9 17 4 12'} />
                </svg>
                Dedicated Support
              </li>
            </ul>
          </div>
          <CtaLink classNames={'w-full'} href={'#'} type={'secondary'}>
            Buy now
          </CtaLink>
        </div>
      </div>
    </div>
  );
};
