import React from 'react';
import { cn } from '../../lib/utils';
import { ChevronRight, Home } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const breadcrumbVariants = cva('flex items-center', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const breadcrumbItemVariants = cva('flex items-center text-neutral-500 dark:text-neutral-400', {
  variants: {
    isActive: {
      true: 'font-medium text-neutral-900 dark:text-neutral-100',
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

const breadcrumbSeparatorVariants = cva('mx-2 text-neutral-400 dark:text-neutral-600', {
  variants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof breadcrumbVariants> {
  separator?: React.ReactNode;
  showHomeIcon?: boolean;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, size, separator, showHomeIcon = false, children, ...props }, ref) => {
    const itemCount = React.Children.count(children);
    
    return (
      <nav
        ref={ref}
        className={cn(breadcrumbVariants({ size }), className)}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol className="flex items-center">
          {showHomeIcon && (
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                aria-label="Home"
              >
                <Home className={cn(size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4')} />
              </a>
            </li>
          )}
          
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return null;
            
            const isLast = index === itemCount - 1;
            
            // Clone the child to pass props
            const item = React.cloneElement(child, {
              isActive: isLast,
              ...child.props,
            });
            
            return (
              <React.Fragment key={index}>
                {(index > 0 || showHomeIcon) && (
                  <li className="mx-1" aria-hidden="true">
                    {separator || <ChevronRight className={cn(breadcrumbSeparatorVariants({ size }))} />}
                  </li>
                )}
                <li className={isLast ? 'inline-flex items-center' : 'inline-flex items-center'}>
                  {item}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    );
  }
);

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof breadcrumbItemVariants> {
  href?: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  ({ className, isActive, href, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(breadcrumbItemVariants({ isActive }), 
          !isActive && 'hover:text-neutral-700 dark:hover:text-neutral-200',
          !href && 'cursor-default', 
          className
        )}
        aria-current={isActive ? 'page' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';
BreadcrumbItem.displayName = 'BreadcrumbItem';