import { FC } from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva('font-bold', {
  variants: {
    size: {
      default: 'text-2xl md:text-3xl lg:text-4xl',
      lg: 'text-3xl md:text-4xl lg:text-5xl',
      sm: 'text-xl md:text-2xl lg:text-3xl'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading: FC<LargeHeadingProps> = ({ children, className, size, ...props }) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  );
};

export default LargeHeading;
