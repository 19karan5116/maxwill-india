import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-maxwill-gray-50 to-white py-12">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <p className="font-display text-9xl font-bold text-maxwill-primary mb-4">
              404
            </p>
            <Text variant="h1" color="secondary" className="mb-4">
              Page Not Found
            </Text>
          </div>

          <Text variant="body-lg" color="tertiary" className="mb-8">
            Sorry, the page you are looking for does not exist. It might have been moved or deleted.
          </Text>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
