'use client'; // Can remove client-side demo code and make this server-side

import { Callout, Card, Spacer } from '@/components';
import { ArrowRight, Layout } from '@phosphor-icons/react';
import Link from 'next/link';
import { FunctionComponent, ReactElement } from 'react';

interface CardInfo {
  href: string;
  icon: ReactElement;
  title: string;
  description: string;
}

const CardSection: FunctionComponent<CardInfo> = ({
  href,
  icon,
  title,
  description,
}) => (
  <div>
    <Link href={href}>
      <Card
        classNames={
          'bg-slate-100 px-5 justify-start hover:bg-slate-200 active:bg-slate-100'
        }
      >
        <span className={'bg-orange-300 p-2 rounded-full'}>{icon}</span>
        {title}
        <ArrowRight className={'h-6 w-6 ml-auto hidden md:inline-block'} />
      </Card>
    </Link>
    <p className={'text-gray-500 text-center mt-2'}>{description}</p>
  </div>
);

const cards: CardInfo[] = [
  {
    href: '/landing',
    icon: <Layout className={'h-6 w-6'} />,
    title: 'Sample landing page',
    description:
      'An effective layout that converts. Built-in guidance for great copy & graphics.',
  },
];

const Overview = () => {
  return (
    <>
      <h1 className={'text-center'}>Welcome!</h1>

      <Callout>
        <p>
          Implement only what you need for your MVP. Delete / ignore the rest.
        </p>
      </Callout>

      <Spacer type={'section'} />

      <div
        className={'flex flex-col gap-6 mx-auto w-72 sm:w-[25rem] md:w-[32rem]'}
      >
        {cards.map((card, index) => (
          <CardSection key={index} {...card} />
        ))}
      </div>

      <Spacer type={'section'} />
    </>
  );
};

export default Overview;
