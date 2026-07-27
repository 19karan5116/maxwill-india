import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: Array<{ value: string; label: string }>;
}

export default function Select({
  label,
  error,
  helperText,
  options,
  className,
  ...props
}: SelectProps) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-semibold text-maxwill-secondary mb-2">
          {label}
        </label>
      )}
      <select
        className={cn(
          'w-full px-4 py-2.5 rounded-lg border border-maxwill-gray-300 text-maxwill-secondary',
          'focus:border-maxwill-primary focus:ring-2 focus:ring-maxwill-primary/10',
          'transition-all duration-200',
          'bg-white',
          error && 'border-error focus:ring-error/10',
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-error text-sm mt-1">{error}</p>}
      {helperText && <p className="text-maxwill-gray-500 text-sm mt-1">{helperText}</p>}
    </div>
  );
}
