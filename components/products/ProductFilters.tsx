'use client';

import { useState } from 'react';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import Text from '@/components/ui/Text';
import { CATEGORIES } from '@/data/categories';
import { cn } from '@/lib/cn';

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductFilters({
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <Heading level={4} className="mb-4 text-lg">
          Categories
        </Heading>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                'w-full text-left px-3 py-2 rounded-lg transition-all',
                selectedCategory === category.id
                  ? 'bg-maxwill-primary text-white'
                  : 'bg-maxwill-gray-100 text-maxwill-secondary hover:bg-maxwill-gray-200',
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <Heading level={4} className="mb-4 text-lg">
          Price Range
        </Heading>
        <Card>
          <div className="space-y-4">
            <div>
              <Text className="text-sm mb-2">Min: ₹{priceRange[0].toLocaleString()}</Text>
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full"
              />
            </div>
            <div>
              <Text className="text-sm mb-2">Max: ₹{priceRange[1].toLocaleString()}</Text>
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
