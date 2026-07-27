'use client';

import Image from 'next/image';
import { cn } from '@/lib/cn';
import { forwardRef } from 'react';

type ObjectFit = 'contain' | 'cover' | 'fill' | 'scale-down';
type ObjectPosition = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const objectFitMap: Record<ObjectFit, string> = {
  contain: 'object-contain',
  cover: 'object-cover',
  fill: 'object-fill',
  'scale-down': 'object-scale-down',
};

const objectPositionMap: Record<ObjectPosition, string> = {
  center: 'object-center',
  top: 'object-top',
  bottom: 'object-bottom',
  left: 'object-left',
  right: 'object-right',
  'top-left': 'object-top-left',
  'top-right': 'object-top-right',
  'bottom-left': 'object-bottom-left',
  'bottom-right': 'object-bottom-right',
};

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  objectFit?: ObjectFit;
  objectPosition?: ObjectPosition;
}

/**
 * OptimizedImage component - Next.js Image wrapper
 * Best practices:
 * - Responsive image handling
 * - Lazy loading by default
 * - Blur placeholder support
 * - Format optimization (AVIF, WebP)
 * - Proper aspect ratio handling
 * - Accessible alt text required
 */
export const OptimizedImage = forwardRef<
  HTMLImageElement,
  OptimizedImageProps
>((
  {
    src,
    alt,
    width,
    height,
    fill = false,
    sizes,
    priority = false,
    quality = 85,
    placeholder = 'empty',
    blurDataURL,
    objectFit = 'cover',
    objectPosition = 'center',
    className,
    ...props
  },
  ref,
) => {
  const containerClasses = cn(
    'relative overflow-hidden',
    fill && 'h-full w-full',
    className,
  );

  const imageClasses = cn(
    'transition-opacity duration-300',
    objectFitMap[objectFit],
    objectPositionMap[objectPosition],
  );

  const placeholderProp = placeholder === 'blur' && blurDataURL ? 'blur' : 'empty';

  if (fill) {
    return (
      <div className={containerClasses}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          placeholder={placeholderProp}
          blurDataURL={blurDataURL}
          className={imageClasses}
          {...props}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 400}
      height={height || 400}
      sizes={sizes}
      priority={priority}
      quality={quality}
      placeholder={placeholderProp}
      blurDataURL={blurDataURL}
      className={cn(imageClasses, className)}
      {...props}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export type { OptimizedImageProps };
