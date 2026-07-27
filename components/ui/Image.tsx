'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn('relative overflow-hidden bg-maxwill-gray-100', className)}>
      <Image
        src={src}
        alt={alt}
        width={width || 400}
        height={height || 400}
        priority={priority}
        onLoadingComplete={() => setIsLoading(false)}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
        )}
      />
    </div>
  );
}
