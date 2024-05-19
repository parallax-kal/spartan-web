'use client';
import { cn } from '@/lib/utils';
import { FC, InputHTMLAttributes } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: FC<SearchInputProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'min flex h-fit items-center rounded-md border-2 border-primary-slate bg-[#D9D9D9]/[13%] p-1 text-[#C5C5C5] transition-colors duration-300 has-[:focus]:border-black has-[:focus]:text-black sm:w-fit sm:self-end',
        className
      )}
    >
      <label htmlFor="search-input">
        <Search color="currentColor" />
      </label>
      <input
        {...props}
        id="search-input"
        className="borde flex w-full border-0 bg-transparent px-3 py-2 focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 sm:min-w-52"
      />
    </div>
  );
};

export default SearchInput;
