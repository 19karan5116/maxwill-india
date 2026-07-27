'use client';

import { useParams } from 'next/navigation';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Grid from '@/components/ui/Grid';
import Badge from '@/components/ui/Badge';
import FadeIn from '@/components/animations/FadeIn';

export default function ProductDetailsPage() {
  const params = useParams();
  const productSlug = params.slug;

  // TODO: Fetch product data by slug using LocalProductService
  // const product = await productService.getBySlug(productSlug);
  const product = null;

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Heading level={2} className="mb-4">
            Product not found
          </Heading>
          <Button href="/products">Back to Products</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Section spacing="lg">
        <Container>
          <Grid cols={2} gap="lg">
            {/* Image Gallery */}
            <div className="bg-maxwill-gray-100 rounded-lg aspect-square flex items-center justify-center">
              <p className="text-maxwill-gray-400">Product Image</p>
            </div>

            {/* Product Details */}
            <FadeIn>
              <div className="space-y-6">
                <div>
                  <Badge variant="primary" className="mb-4">
                    {/* TODO: category from product */}
                    Category
                  </Badge>
                  <Heading level={1} className="mb-2">
                    {/* TODO: product.name */}
                    Product Name
                  </Heading>
                  <Text className="text-lg text-maxwill-gray-600">
                    {/* TODO: product.subtitle */}
                    Subtitle
                  </Text>
                </div>

                <div className="border-t border-maxwill-gray-200 pt-6">
                  <p className="text-3xl font-bold text-maxwill-secondary mb-4">
                    {/* TODO: product.price formatted */}
                    ₹0
                  </p>
                  <Text>
                    {/* TODO: product.description */}
                    Product description
                  </Text>
                </div>

                <div className="space-y-4">
                  <Button size="lg" className="w-full">
                    Add to Cart
                  </Button>
                  <Button variant="secondary" size="lg" className="w-full">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </FadeIn>
          </Grid>
        </Container>
      </Section>

      {/* Specifications */}
      <Section spacing="md" className="bg-maxwill-gray-50">
        <Container>
          <Heading level={2} className="mb-8">
            Specifications
          </Heading>
          {/* TODO: Render product.specifications */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <p className="text-sm text-maxwill-gray-600 mb-2">Specification</p>
              <p className="font-semibold">Value</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section spacing="md">
        <Container>
          <Heading level={2} className="mb-8">
            Key Features
          </Heading>
          <Grid cols={3}>
            {/* TODO: Render product.features */}
            <div className="text-center">
              <p className="font-semibold mb-2">Feature</p>
              <Text className="text-sm">Feature description</Text>
            </div>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
