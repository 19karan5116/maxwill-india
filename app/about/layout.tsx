import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about MAXWILL INDIA and our mission to elevate pickleball.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
