import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const tabsRootVariants = cva('', {
  variants: {
    orientation: {
      horizontal: 'flex flex-col',
      vertical: 'flex flex-row gap-4',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

const tabsListVariants = cva('flex', {
  variants: {
    variant: {
      default: 'border-b border-neutral-200 dark:border-neutral-700',
      underline: 'border-b border-neutral-200 dark:border-neutral-700',
      pills: 'p-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg',
      outline: 'p-1 border border-neutral-200 dark:border-neutral-700 rounded-lg',
    },
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col border-r border-neutral-200 dark:border-neutral-700 pr-1',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
  },
  compoundVariants: [
    {
      orientation: 'vertical',
      variant: 'default',
      className: 'border-r border-neutral-200 dark:border-neutral-700 border-b-0',
    },
    {
      orientation: 'vertical',
      variant: 'underline',
      className: 'border-r border-neutral-200 dark:border-neutral-700 border-b-0',
    },
  ],
  defaultVariants: {
    variant: 'default',
    orientation: 'horizontal',
    fullWidth: false,
  },
});

const tabsTriggerVariants = cva(
  'flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-b-2 border-transparent text-neutral-600 hover:text-neutral-900 data-[state=active]:border-primary-500 data-[state=active]:text-primary-700 dark:text-neutral-400 dark:hover:text-neutral-100 dark:data-[state=active]:border-primary-500 dark:data-[state=active]:text-primary-300',
        underline:
          'border-b-2 border-transparent text-neutral-600 hover:text-neutral-900 data-[state=active]:border-primary-500 data-[state=active]:text-primary-700 dark:text-neutral-400 dark:hover:text-neutral-100 dark:data-[state=active]:border-primary-500 dark:data-[state=active]:text-primary-300',
        pills:
          'text-neutral-600 hover:text-neutral-900 data-[state=active]:bg-white data-[state=active]:text-primary-700 data-[state=active]:shadow-sm dark:text-neutral-400 dark:hover:text-neutral-100 dark:data-[state=active]:bg-neutral-950 dark:data-[state=active]:text-primary-300',
        outline:
          'border border-transparent text-neutral-600 hover:text-neutral-900 data-[state=active]:border-primary-500 data-[state=active]:text-primary-700 dark:text-neutral-400 dark:hover:text-neutral-100 dark:data-[state=active]:border-primary-500 dark:data-[state=active]:text-primary-300',
      },
      orientation: {
        horizontal: '',
        vertical: 'justify-start',
      },
      fullWidth: {
        true: 'flex-1',
        false: '',
      },
    },
    compoundVariants: [
      {
        orientation: 'vertical',
        variant: 'default',
        className: 'border-b-0 border-r-2',
      },
      {
        orientation: 'vertical',
        variant: 'underline',
        className: 'border-b-0 border-r-2',
      },
    ],
    defaultVariants: {
      variant: 'default',
      orientation: 'horizontal',
      fullWidth: false,
    },
  }
);

const tabsContentVariants = cva('mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md p-4', {
  variants: {
    variant: {
      default: '',
      underline: '',
      pills: 'bg-neutral-50 dark:bg-neutral-900',
      outline: 'border border-neutral-200 dark:border-neutral-700',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsRootVariants>,
    VariantProps<typeof tabsListVariants> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const Tabs = ({
  className,
  orientation,
  variant,
  fullWidth,
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
  ...props
}: TabsProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;
  
  const handleValueChange = (newValue: string) => {
    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
    onValueChange?.(newValue);
  };

  // Filter children to separate TabsList, TabsTrigger, and TabsContent
  const childrenArray = React.Children.toArray(children) as React.ReactElement[];
  
  const tabsList = childrenArray.find(child => child.type === TabsList);
  const tabsContent = childrenArray.filter(child => child.type === TabsContent);

  return (
    <div
      className={cn(tabsRootVariants({ orientation }), className)}
      data-orientation={orientation}
      {...props}
    >
      {tabsList && React.cloneElement(tabsList, { orientation, variant, fullWidth, value, onValueChange: handleValueChange })}
      <div className={cn(orientation === 'vertical' ? 'flex-1' : 'w-full')}>
        {tabsContent.map(content => {
          if (content.props.value === value) {
            return React.cloneElement(content, { variant, key: content.props.value });
          }
          return null;
        })}
      </div>
    </div>
  );
};

export interface TabsListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsListVariants> {
  value?: string;
  onValueChange?: (value: string) => void;
}

export const TabsList = ({
  className,
  variant,
  orientation,
  fullWidth,
  children,
  value,
  onValueChange,
  ...props
}: TabsListProps) => {
  // Map children to add state and onClick handler
  const mappedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === TabsTrigger) {
      return React.cloneElement(child, {
        variant,
        orientation,
        fullWidth,
        isSelected: child.props.value === value,
        onClick: () => onValueChange?.(child.props.value),
      });
    }
    return child;
  });

  return (
    <div
      className={cn(tabsListVariants({ variant, orientation, fullWidth }), className)}
      role="tablist"
      aria-orientation={orientation}
      {...props}
    >
      {mappedChildren}
    </div>
  );
};

export interface TabsTriggerProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'>,
    VariantProps<typeof tabsTriggerVariants> {
  value: string;
  isSelected?: boolean;
}

export const TabsTrigger = ({
  className,
  variant,
  orientation,
  fullWidth,
  value,
  isSelected,
  children,
  ...props
}: TabsTriggerProps) => {
  return (
    <button
      className={cn(tabsTriggerVariants({ variant, orientation, fullWidth }), className)}
      role="tab"
      aria-selected={isSelected}
      data-state={isSelected ? 'active' : 'inactive'}
      {...props}
    >
      {children}
    </button>
  );
};

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tabsContentVariants> {
  value: string;
}

export const TabsContent = ({ className, variant, value, children, ...props }: TabsContentProps) => {
  return (
    <div
      className={cn(tabsContentVariants({ variant }), className)}
      role="tabpanel"
      data-value={value}
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  );
};

Tabs.displayName = 'Tabs';
TabsList.displayName = 'TabsList';
TabsTrigger.displayName = 'TabsTrigger';
TabsContent.displayName = 'TabsContent';