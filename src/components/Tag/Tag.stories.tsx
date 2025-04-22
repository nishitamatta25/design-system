import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Data Display/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Tags are compact elements that represent an attribute, input, or action. They're commonly used for categories, filters, and selections.

## Accessibility

- Tags include proper focus styles for keyboard users
- Removable tags have an "X" button with aria-label 
- Tags use sufficient color contrast in all states

## Usage Guidelines

- Use tags to categorize content or show selected filters
- Keep tag content short and clear
- Provide visual distinction between interactive and non-interactive tags
- Use appropriate semantic colors to convey meaning
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'tertiary', 'outline', 'success', 'warning', 'error', 'info', 'ghost'],
      description: 'The visual style of the tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    rounded: {
      control: 'select',
      options: ['default', 'full'],
      description: 'The border radius style',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    removable: {
      control: 'boolean',
      description: 'Whether the tag can be removed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onRemove: {
      action: 'removed',
      description: 'Callback fired when the remove button is clicked',
    },
    children: {
      control: 'text',
      description: 'The content of the tag',
    },
  },
  args: {
    children: 'Example Tag',
    variant: 'default',
    size: 'md',
    rounded: 'default',
    removable: false,
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const RoundedFull: Story = {
  args: {
    rounded: 'full',
  },
};

export const Removable: Story = {
  args: {
    removable: true,
  },
};

export const SemanticColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag variant="default">Default</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="tertiary">Tertiary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="info">Info</Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tags can use semantic colors to convey meaning.',
      },
    },
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tags come in three different sizes.',
      },
    },
  },
};

export const RemovableTags: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag removable onRemove={() => console.log('Default removed')}>Default</Tag>
      <Tag variant="success" removable onRemove={() => console.log('Success removed')}>Success</Tag>
      <Tag variant="warning" removable onRemove={() => console.log('Warning removed')}>Warning</Tag>
      <Tag variant="error" removable onRemove={() => console.log('Error removed')}>Error</Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tags can be removable with an "X" button.',
      },
    },
  },
};