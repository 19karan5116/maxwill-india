'use client';

import { useState } from 'react';
import { ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className={cn('bg-white rounded-lg shadow-2xl', sizeMap[size])}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-maxwill-gray-200">
          {title && <h2 className="font-display text-xl font-bold text-maxwill-secondary">{title}</h2>}
          <button
            onClick={onClose}
            className="p-1 hover:bg-maxwill-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
