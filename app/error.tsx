'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import { Text } from '@/components/ui/Text';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-maxwill-gray-50 to-white py-12">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <p className="font-display text-6xl font-bold text-maxwill-primary mb-4">
              Oops!
            </p>
            <Text variant="h2" color="secondary" className="mb-4">
              Something went wrong
            </Text>
          </div>

          <Text variant="body-lg" color="tertiary" className="mb-8">
            We're sorry for the inconvenience. Please try again or contact our support team.
          </Text>

          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-maxwill-primary font-semibold px-8 py-4 text-lg bg-maxwill-primary text-white hover:bg-red-800 active:bg-red-900"
          >
            Try Again
          </button>
        </div>
      </Container>
    </div>
  );
}
