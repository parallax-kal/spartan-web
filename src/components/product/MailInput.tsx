'use client';
import { cn } from '@/lib/utils';
import { FC, InputHTMLAttributes } from 'react';
import { Button } from '../ui/button';

interface MailInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const MailInput: FC<MailInputProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'min flex h-fit items-center rounded-full border-2 border-primary-slate p-1 transition-colors duration-300 has-[:focus]:border-black sm:w-fit sm:self-end',
        className
      )}
    >
      <input
        {...props}
        className="borde flex w-full border-0 bg-transparent px-3 py-2 focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 sm:min-w-52"
      />
      <Button className="rounded-full px-10 py-6">Let&apos;s go!</Button>
    </div>
  );
};

export default MailInput;
