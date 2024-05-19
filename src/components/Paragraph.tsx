import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const paragraphVariants = cva('leading-tigt', {
  variants: {
    size: {
      default: 'text-sm xs:text-base sm:text-lg',
      sm: 'text-xs xs:text-sm sm:text-base',
      large: 'text-sm xs:text-md sm:text-lg'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn(paragraphVariants({ size, className }))}>
        {children}
      </p>
    );
  }
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
