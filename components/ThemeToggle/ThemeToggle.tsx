'use client';

import { useEffect, useState, FunctionComponent } from 'react';
import { cn } from '@/lib';

export const ThemeToggle: FunctionComponent = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
    setIsDark(currentTheme === 'dark');
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'flex gap-3 items-center justify-center p-4 rounded-lg shadow-md bg-dark-primary text-white dark:bg-light-primary dark:text-dark-primary',
      )}
    >
      Toggle Theme
    </button>
  );
};
