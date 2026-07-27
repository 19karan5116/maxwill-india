'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-maxwill-gray-200 border-t-maxwill-primary" />
    </div>
  );
}
