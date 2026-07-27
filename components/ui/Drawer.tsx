import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  side?: 'left' | 'right';
}

export default function Drawer({
  isOpen,
  onClose,
  title,
  children,
  side = 'right',
}: DrawerProps) {
  if (!isOpen) return null;

  const sideClass = side === 'left' ? 'left-0' : 'right-0';

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 bottom-0 w-80 bg-white shadow-lg z-50 transform transition-transform duration-300',
          sideClass,
          isOpen ? 'translate-x-0' : side === 'left' ? '-translate-x-full' : 'translate-x-full',
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-maxwill-gray-200">
          {title && <h2 className="font-display text-xl font-bold text-maxwill-secondary">{title}</h2>}
        </div>

        {/* Content */}
        <div className="p-6 max-h-screen overflow-y-auto">{children}</div>
      </div>
    </>
  );
}
