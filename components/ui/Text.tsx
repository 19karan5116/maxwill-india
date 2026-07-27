import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const textVariants = cva('font-sans leading-relaxed', {
  variants: {
    variant: {
      h1: 'font-display text-6xl tablet:text-7xl desktop:text-8xl font-bold leading-tight',
      h2: 'font-display text-4xl tablet:text-5xl desktop:text-6xl font-bold leading-tight',
      h3: 'font-display text-3xl tablet:text-4xl font-bold leading-tight',
      h4: 'font-display text-2xl tablet:text-3xl font-semibold leading-snug',
      h5: 'font-display text-xl tablet:text-2xl font-semibold leading-snug',
      h6: 'font-display text-lg tablet:text-xl font-semibold leading-snug',
      body: 'text-base leading-relaxed',
      'body-lg': 'text-lg leading-relaxed',
      'body-sm': 'text-sm leading-relaxed',
      caption: 'text-xs leading-relaxed uppercase tracking-widest',
      label: 'text-sm font-semibold tracking-wide',
    },
    color: {
      primary: 'text-maxwill-primary',
      secondary: 'text-maxwill-secondary',
      tertiary: 'text-maxwill-gray-600',
      muted: 'text-maxwill-gray-500',
      white: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'secondary',
  },
});

type TextVariants = VariantProps<typeof textVariants>;

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'small' | 'strong';

interface TextProps<T extends TextElement = 'p'>
  extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariants['variant'];
  color?: TextVariants['color'];
  as?: T;
}

/**
 * Text component - Semantic typography
 * Uses CVA for consistent variant management
 * Supports semantic HTML elements and design system variants
 */
export const Text = React.forwardRef<HTMLElement, TextProps>((
  { variant, color, className, as: Component = 'p', ...props },
  ref,
) => {
  const Element = Component as TextElement;
  return (
    <Element
      ref={ref as React.Ref<HTMLElement>}
      className={cn(textVariants({ variant, color }), className)}
      {...props}
    />
  );
});

Text.displayName = 'Text';

export type { TextProps };
