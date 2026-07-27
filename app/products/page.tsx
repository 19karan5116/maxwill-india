'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Grid from '@/components/ui/Grid';
import ProductCard from '@/components/products/ProductCard';
import ProductFilters from '@/components/products/ProductFilters';
import FadeIn from '@/components/animations/FadeIn';
import { LocalProductService } from '@/services/LocalProductService';

const productService = new LocalProductService();

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // TODO: Implement proper async data fetching with Suspense
  // const products = await productService.getAll();
  const products = [];

  return (
    <main className="min-h-screen">
      <Section spacing="lg">
        <Container>
          <FadeIn>
            <Heading level={1} className="mb-4">
              Product Collection
            </Heading>
            <Text className="text-lg text-maxwill-gray-600 max-w-2xl">
              Professional-grade pickleball equipment designed for competitive players.
            </Text>
          </FadeIn>
        </Container>
      </Section>

      <Section spacing="md">
        <Container>
          <div className="grid grid-cols-1 tablet:grid-cols-4 gap-8">
            {/* Filters */}
            <aside className="tablet:col-span-1">
              <ProductFilters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </aside>

            {/* Products Grid */}
            <div className="tablet:col-span-3">
              {products.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-maxwill-gray-500">No products available yet. Check back soon!</p>
                </div>
              ) : (
                <Grid cols={3}>
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </Grid>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
