'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Text from '@/components/ui/Text';
import Heading from '@/components/ui/Heading';
import Link from 'next/link';
import { Product } from '@/types/Product';
import { formatPrice } from '@/utils/formatters';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className={cn('h-full hover:shadow-premium-lg transition-all duration-300 cursor-pointer', className)}>
        {/* Image */}
        <div className="bg-maxwill-gray-100 aspect-square rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          {product.images[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <p className="text-maxwill-gray-400">Product Image</p>
          )}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {product.badges.map((badge) => (
            <Badge key={badge} size="sm" variant="primary">
              {badge}
            </Badge>
          ))}
        </div>

        {/* Name */}
        <Heading level={3} className="mb-2 text-lg line-clamp-2">
          {product.name}
        </Heading>

        {/* Subtitle */}
        <Text className="text-sm text-maxwill-gray-600 mb-3 line-clamp-2">
          {product.subtitle}
        </Text>

        {/* Price & Availability */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-maxwill-gray-200">
          <p className="font-bold text-lg text-maxwill-secondary">
            {product.price > 0 ? formatPrice(product.price) : 'Coming Soon'}
          </p>
          <Badge
            variant={product.availability === 'in-stock' ? 'success' : 'warning'}
            size="sm"
          >
            {product.availability === 'in-stock'
              ? 'In Stock'
              : product.availability === 'out-of-stock'
                ? 'Out of Stock'
                : 'Coming Soon'}
          </Badge>
        </div>
      </Card>
    </Link>
  );
}
