'use client';

import { Callout, Card, Spacer } from '@/components';
import {
  ArrowRight,
  Code,
  Layout,
  PuzzlePiece,
  Toolbox,
} from '@phosphor-icons/react';
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
    href: '/tutorial/stack',
    icon: <Code className={'h-6 w-6'} />,
    title: 'Your Founder Bento',
    description:
      'Quickstart guides to launch your MVP today. Everything you need to go from idea to first paying customers: database, login, API routes, payments, customer support, SEO, analytics, and more.',
  },
  {
    href: '/tutorial/template-pages',
    icon: <Layout className={'h-6 w-6'} />,
    title: 'Landing pages',
    description:
      'Effective layouts that convert. Built-in guidance for great copy & graphics.',
  },
  {
    href: '/tutorial/components',
    icon: <PuzzlePiece className={'h-6 w-6'} />,
    title: 'Component library',
    description:
      'Minimal. Focused on plug-and-play rather than generic reusability & complexity. Keep what you like, change what you need, get your MVP out today.',
  },
  {
    href: '/tutorial/tools',
    icon: <Toolbox className={'h-6 w-6'} />,
    title: 'Prompts & third-party tools',
    description:
      '10x your productivity with these tools I regret not creating myself.',
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
