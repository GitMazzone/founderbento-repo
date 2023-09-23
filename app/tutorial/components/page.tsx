'use client';

import { Card } from '@/components';
import { ArrowRight, Ruler } from '@phosphor-icons/react';
import Link from 'next/link';

const Components = () => {
  return (
    <>
      <h1>Components</h1>

      <div>
        <Link href={'/tutorial/design-language'}>
          <Card
            classNames={
              'bg-slate-100 px-5 justify-start hover:bg-slate-200 active:bg-slate-100'
            }
          >
            <span className={'bg-orange-300 p-2 rounded-full'}>
              <Ruler className={'h-6 w-6'} />
            </span>
            Design language
            <ArrowRight className={'h-6 w-6 ml-auto hidden md:inline-block'} />
          </Card>
        </Link>
        <p className={'text-gray-500 text-center mt-2'}>Quick overview of</p>
      </div>

      <p>
        Hero Section: Includes headline, subheadline, and main CTA.
        <br />
        Navigation Bar: With links to essential pages and possibly a
        sign-up/login button.
        <br />
        Footer: Basic info, social links, and additional navigation.
        <br />
        CTA Button: Reusable for different actions (Sign Up, Learn More, etc.)
        <br />
        Pricing Section: Different plans, features, and a CTA for each.
        <br />
        Feature Cards: To showcase product features or benefits.
        <br />
        Testimonials: Customer quotes, possibly with images.
        <br />
        Contact Form: Basic fields like Name, Email, Message.
        <br />
        FAQ Section: Common questions and answers.
        <br />
        Newsletter Signup: Simple email capture form.
        <br />
        Social Proof: Logos of companies that use your product or media where
        it&apos;s been featured.
        <br />
        Image/Video Gallery: To showcase the product in action.
        <br />
        Progress Bar/Steps: To guide users through multi-step processes.
        <br />
        Modal/Popup: For additional info or capturing leads.
        <br />
        404 Page: A friendly error page to guide lost users.
        <br />
        Loading Spinner: For async operations.
        <br />
        Search Bar: For larger sites with lots of content.
        <br />
        Blog Post Card: If content marketing is part of the strategy.
        <br />
        User Profile Card: Display user info and actions.
        <br />
        Notification Bar: For announcements, offers, etc.
        <br />
      </p>
    </>
  );
};

export default Components;
