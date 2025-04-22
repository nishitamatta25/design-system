import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Breadcrumbs show the user's location in a website or app and help navigation to previous levels.

## Accessibility

- Uses proper semantic HTML (nav and ol/li elements)
- Includes aria-label for screen readers
- Marks the current page with aria-current="page"
- Maintains focus management

## Usage Guidelines

- Use breadcrumbs for websites or apps with hierarchical navigation
- Place breadcrumbs at the top of the page, below the primary navigation
- Keep breadcrumb labels short and descriptive
- Consider using icons sparingly to enhance understanding
`,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the breadcrumb',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    showHomeIcon: {
      control: 'boolean',
      description: 'Whether to show a home icon as the first item',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    separator: {
      control: 'text',
      description: 'Custom separator between breadcrumb items',
    },
  },
  args: {
    size: 'md',
    showHomeIcon: false,
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/products">Products</BreadcrumbItem>
      <BreadcrumbItem href="/products/electronics">Electronics</BreadcrumbItem>
      <BreadcrumbItem>Smartphones</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const WithHomeIcon: Story = {
  render: (args) => (
    <Breadcrumb showHomeIcon>
      <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
      <BreadcrumbItem href="/dashboard/analytics">Analytics</BreadcrumbItem>
      <BreadcrumbItem>Monthly Report</BreadcrumbItem>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs can include a home icon as the first item.',
      },
    },
  },
};

export const CustomSeparator: Story = {
  render: (args) => (
    <Breadcrumb separator="›">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/services">Services</BreadcrumbItem>
      <BreadcrumbItem>Web Development</BreadcrumbItem>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: 'You can customize the separator between breadcrumb items.',
      },
    },
  },
};

export const SmallSize: Story = {
  render: (args) => (
    <Breadcrumb size="sm">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
      <BreadcrumbItem>Article Title</BreadcrumbItem>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Small size breadcrumbs for limited space.',
      },
    },
  },
};

export const MediumSize: Story = {
  render: (args) => (
    <Breadcrumb size="md">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
      <BreadcrumbItem>Article Title</BreadcrumbItem>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Medium size breadcrumbs (default).',
      },
    },
  },
};

export const LargeSize: Story = {
  render: (args) => (
    <Breadcrumb size="lg">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
      <BreadcrumbItem>Article Title</BreadcrumbItem>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Large size breadcrumbs for better visibility.',
      },
    },
  },
};

export const LongPath: Story = {
  render: (args) => (
    <Breadcrumb>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/products">Products</BreadcrumbItem>
      <BreadcrumbItem href="/products/electronics">Electronics</BreadcrumbItem>
      <BreadcrumbItem href="/products/electronics/phones">Phones</BreadcrumbItem>
      <BreadcrumbItem href="/products/electronics/phones/smartphones">Smartphones</BreadcrumbItem>
      <BreadcrumbItem>iPhone 15 Pro</BreadcrumbItem>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of breadcrumbs with a long navigation path.',
      },
    },
  },
};