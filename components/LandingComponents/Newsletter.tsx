'use client';

import { FunctionComponent, useState } from 'react';

interface NewsletterProps {
  heading: string;
  text: string;
  ctaText: string;
  inputPlaceholder: string;
}

export const Newsletter: FunctionComponent<NewsletterProps> = ({
  heading,
  text,
  ctaText,
  inputPlaceholder,
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with your actual email submission logic
    const myEmail = 'your-email@example.com';
    console.log(`Submitting ${email} to ${myEmail}`);
  };

  return (
    <div className={'flex flex-col gap-5'}>
      <h4>{heading}</h4>
      <p>{text}</p>
      <form onSubmit={handleSubmit} className={'flex gap-2'}>
        <input
          type={'email'}
          placeholder={inputPlaceholder}
          className={'border border-stone-800 p-2 pl-4 rounded-full'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* TODO: replace with button component */}
        <button
          type={'submit'}
          className={
            // TODO: replace with theme color
            'bg-transparent border-2 border-orange-500 px-4 py-2 rounded-full'
          }
        >
          {ctaText}
        </button>
      </form>
    </div>
  );
};
