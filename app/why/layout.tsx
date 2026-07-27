import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why MAXWILL',
  description: 'Discover why MAXWILL INDIA is the choice of professional pickleball players.',
};

export default function WhyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
