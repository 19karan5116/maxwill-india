'use client';

import React, { forwardRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';
import { Slot } from '@radix-ui/slot';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-maxwill-primary disabled:opacity-50 disabled:cursor-not-allowed font-semibold',
  {
    variants: {
      variant: {
        primary:
          'bg-maxwill-primary text-white hover:bg-red-800 active:bg-red-900',
        secondary:
          'border-2 border-white text-white hover:bg-white/10 active:bg-white/20',
        ghost: 'text-white hover:bg-white/10 active:bg-white/20',
        light:
          'bg-maxwill-secondary text-white hover:bg-black active:bg-maxwill-secondary/90',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  asChild?: boolean;
}

/**
 * Button component - Accessible, production-grade button
 * Features:
 * - CVA variant management
 * - Loading state with spinner
 * - Icon support (left and right)
 * - Full width option
 * - asChild support for custom components
 * - Proper disabled behavior
 * - Accessible keyboard navigation
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    variant,
    size,
    fullWidth,
    className,
    loading = false,
    leftIcon,
    rightIcon,
    disabled,
    children,
    asChild = false,
    onClick,
    type = 'button',
    ...props
  },
  ref,
) => {
  const Component = asChild ? Slot : 'button';
  const isDisabled = disabled || loading;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const buttonProps = {
    ref,
    disabled: isDisabled,
    'aria-busy': loading,
    'aria-disabled': isDisabled,
    className: cn(
      buttonVariants({ variant, size, fullWidth }),
      className,
    ),
    onClick: handleClick,
    ...props,
  };

  if (asChild) {
    return (
      <Component {...buttonProps}>
        {loading && <Loader2 size={18} className="animate-spin" />}
        {!loading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </Component>
    );
  }

  return (
    <button type={type} {...buttonProps}>
      {loading && <Loader2 size={18} className="animate-spin" />}
      {!loading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export type { ButtonProps };
