import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export default function Textarea({
  label,
  error,
  helperText,
  className,
  ...props
}: TextareaProps) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-semibold text-maxwill-secondary mb-2">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'w-full px-4 py-2.5 rounded-lg border border-maxwill-gray-300 text-maxwill-secondary',
          'focus:border-maxwill-primary focus:ring-2 focus:ring-maxwill-primary/10',
          'transition-all duration-200',
          'placeholder:text-maxwill-gray-400',
          'resize-none',
          error && 'border-error focus:ring-error/10',
          className,
        )}
        {...props}
      />
      {error && <p className="text-error text-sm mt-1">{error}</p>}
      {helperText && <p className="text-maxwill-gray-500 text-sm mt-1">{helperText}</p>}
    </div>
  );
}
