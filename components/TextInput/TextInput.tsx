import * as React from 'react';
import { cn } from '@/lib';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full rounded-md py-2
          border border-gray-300 bg-white px-3 ring-offset-white
          file:border-0 file:bg-transparent file:text-sm file:font-medium
          placeholder:text-lg text-lg
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
TextInput.displayName = 'TextInput';

export { TextInput };
