'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import GlobalSearch from '@/components/shared/GlobalSearch';
import { NAVIGATION } from '@/constants/navigation';
import { SITE } from '@/constants/site';
import { cn } from '@/lib/cn';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-maxwill-gray-200 bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex items-center justify-between h-16 tablet:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-bold text-maxwill-secondary hover:text-maxwill-primary transition-colors flex-shrink-0"
            aria-label={SITE.name}
          >
            MAXWILL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden tablet:flex items-center gap-8 flex-1 justify-center">
            {NAVIGATION.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-maxwill-secondary hover:text-maxwill-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <GlobalSearch />
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="tablet:hidden p-2 text-maxwill-secondary hover:bg-maxwill-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="tablet:hidden border-t border-maxwill-gray-200 py-4 space-y-2">
            {NAVIGATION.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-maxwill-secondary hover:bg-maxwill-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
}
