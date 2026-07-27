'use client';

import React, { forwardRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full font-semibold transition-colors duration-200',
  {
    variants: {
      variant: {
        primary: 'bg-maxwill-primary/10 text-maxwill-primary',
        secondary: 'bg-maxwill-secondary/10 text-maxwill-secondary',
        outline: 'border border-maxwill-primary text-maxwill-primary',
        light: 'bg-white/20 text-white border border-white/30',
      },
      size: {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

type BadgeVariants = VariantProps<typeof badgeVariants>;

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    BadgeVariants {
  children: ReactNode;
}

/**
 * Badge component - Small label for categorization
 * Uses CVA for consistent variant management
 * Supports multiple variants and sizes
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((
  { variant, size, className, children, ...props },
  ref,
) => {
  return (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export type { BadgeProps };
