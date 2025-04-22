import React from 'react';
import { cn } from '../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const tagVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-primary-400 dark:focus:ring-offset-neutral-950',
  {
    variants: {
      variant: {
        default: 'bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-700 dark:hover:bg-primary-600',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 dark:bg-secondary-700 dark:hover:bg-secondary-600',
        tertiary: 'bg-tertiary-500 text-white hover:bg-tertiary-600 dark:bg-tertiary-700 dark:hover:bg-tertiary-600',
        outline: 'border border-primary-200 bg-transparent text-primary-700 hover:bg-primary-50 dark:border-primary-700 dark:text-primary-400 dark:hover:bg-primary-950',
        success: 'bg-success-500 text-white hover:bg-success-600 dark:bg-success-700 dark:hover:bg-success-600',
        warning: 'bg-warning-500 text-neutral-950 hover:bg-warning-600 dark:bg-warning-600 dark:hover:bg-warning-500',
        error: 'bg-error-500 text-white hover:bg-error-600 dark:bg-error-700 dark:hover:bg-error-600',
        info: 'bg-info-500 text-white hover:bg-info-600 dark:bg-info-700 dark:hover:bg-info-600',
        ghost: 'bg-transparent text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-2 text-base',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
      },
      removable: {
        true: 'pr-1', // Less right padding when we have the remove button
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'default',
      removable: false
    }
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  onRemove?: () => void;
}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ className, variant, size, rounded, removable, onRemove, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(tagVariants({ variant, size, rounded, removable }), className)}
        {...props}
      >
        <span className="truncate">{children}</span>
        {removable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50"
            aria-label="Remove tag"
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7M1 7L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Tag.displayName = 'Tag';