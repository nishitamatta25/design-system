import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const accordionVariants = cva('border rounded-lg overflow-hidden transition-all', {
  variants: {
    variant: {
      default: 'border-neutral-200 dark:border-neutral-700',
      outline: 'border-2 border-primary-500 dark:border-primary-400',
      ghost: 'border-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const accordionItemVariants = cva('border-b last:border-b-0', {
  variants: {
    variant: {
      default: 'border-neutral-200 dark:border-neutral-700',
      outline: 'border-primary-300 dark:border-primary-600',
      ghost: 'border-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const accordionTriggerVariants = cva(
  'flex w-full items-center justify-between px-4 py-3 text-left font-medium transition-all hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset dark:focus:ring-primary-400',
  {
    variants: {
      variant: {
        default: 'text-neutral-900 dark:text-neutral-100',
        outline: 'text-primary-700 dark:text-primary-300',
        ghost: 'text-neutral-900 dark:text-neutral-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const accordionContentVariants = cva('overflow-hidden text-sm transition-all', {
  variants: {
    variant: {
      default: 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300',
      outline: 'bg-primary-50 dark:bg-primary-950 text-primary-900 dark:text-primary-100',
      ghost: 'bg-transparent text-neutral-700 dark:text-neutral-300',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  variant?: 'default' | 'outline' | 'ghost';
}

const AccordionItem = ({
  title,
  children,
  defaultOpen = false,
  variant = 'default',
  className,
  ...props
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn(accordionItemVariants({ variant }), className)} {...props}>
      <h3>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={accordionTriggerVariants({ variant })}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${props.id}`}
        >
          {title}
          <ChevronDown 
            className={cn("h-4 w-4 shrink-0 transition-transform duration-200", 
              isOpen ? "rotate-180" : "rotate-0"
            )} 
          />
        </button>
      </h3>
      <div
        id={`accordion-content-${props.id}`}
        className={cn(
          accordionContentVariants({ variant }),
          isOpen ? "animate-accordion-down px-4 py-3" : "animate-accordion-up h-0 invisible opacity-0 p-0"
        )}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof accordionVariants> {
  children: React.ReactNode;
  defaultValue?: string;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn(accordionVariants({ variant }), className)} 
        {...props}
      >
        {children}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'AccordionItem';

export { AccordionItem };