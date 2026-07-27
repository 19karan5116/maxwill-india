import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore MAXWILL INDIA elite pickleball equipment and accessories.',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
