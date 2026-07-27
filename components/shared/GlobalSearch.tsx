'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import { Search, X } from 'lucide-react';

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  // TODO: Implement search using ProductService.search()
  // const results = query ? await productService.search(query) : [];
  const results = [];

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 hover:bg-maxwill-gray-100 rounded-lg transition-colors"
        aria-label="Open search"
      >
        <Search size={20} />
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4">
            {/* Search Input */}
            <div className="flex items-center gap-4 p-6 border-b border-maxwill-gray-200">
              <Search size={20} className="text-maxwill-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="flex-1 outline-none text-lg"
              />
              <button
                onClick={() => {
                  setIsOpen(false);
                  setQuery('');
                }}
                className="p-1 hover:bg-maxwill-gray-100 rounded-lg"
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {results.length === 0 && query ? (
                <div className="p-6 text-center">
                  <Text className="text-maxwill-gray-500">No results found for "{query}"</Text>
                </div>
              ) : results.length === 0 ? (
                <div className="p-6 text-center">
                  <Text className="text-maxwill-gray-500">Start typing to search...</Text>
                </div>
              ) : (
                <div className="divide-y divide-maxwill-gray-200">
                  {/* TODO: Render search results */}
                  {results.map((result) => (
                    <div key={result.id} className="p-4 hover:bg-maxwill-gray-50 cursor-pointer transition-colors">
                      <p className="font-semibold text-maxwill-secondary">{result.name}</p>
                      <p className="text-sm text-maxwill-gray-600">{result.subtitle}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
