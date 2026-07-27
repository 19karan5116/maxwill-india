'use client';

import React, { forwardRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const cardVariants = cva(
  'rounded-lg bg-white transition-all duration-300',
  {
    variants: {
      shadow: {
        none: 'shadow-none',
        sm: 'shadow-sm',
        base: 'shadow-base',
        md: 'shadow-md',
        lg: 'shadow-lg',
        premium: 'shadow-premium',
      },
      hover: {
        true: 'hover:shadow-premium-lg hover:scale-105',
      },
      padding: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      shadow: 'premium',
      padding: 'md',
    },
  },
);

type CardVariants = VariantProps<typeof cardVariants>;

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CardVariants {
  children: ReactNode;
}

/**
 * Card component - Container for grouped content
 * Uses CVA for consistent variant management
 * Provides shadow, padding, and hover effect options
 */
export const Card = forwardRef<HTMLDivElement, CardProps>((
  { shadow, hover, padding, className, children, ...props },
  ref,
) => {
  return (
    <div
      ref={ref}
      className={cn(
        cardVariants({ shadow, hover, padding }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export type { CardProps };
