import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Tabs organize content into separate views where only one view can be visible at a time.

## Accessibility

- Uses proper ARIA roles (tablist, tab, tabpanel)
- Supports keyboard navigation (Tab, Arrow keys)
- Maintains focus management
- Includes proper contrast for all states

## Usage Guidelines

- Use tabs to organize content into logical sections
- Keep tab labels short and descriptive
- Avoid using too many tabs in a single container
- Consider which tab should be active by default
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'underline', 'pills', 'outline'],
      description: 'The visual style of the tabs',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the tabs should take full width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected tab',
    },
  },
  args: {
    variant: 'default',
    orientation: 'horizontal',
    fullWidth: false,
    defaultValue: 'tab1',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Account settings and preferences</TabsContent>
      <TabsContent value="tab2">Update your password and security settings</TabsContent>
      <TabsContent value="tab3">Manage your application settings</TabsContent>
    </Tabs>
  ),
};

export const Underline: Story = {
  render: (args) => (
    <Tabs variant="underline" defaultValue="tab1">
      <TabsList variant="underline">
        <TabsTrigger value="tab1">Profile</TabsTrigger>
        <TabsTrigger value="tab2">Notifications</TabsTrigger>
        <TabsTrigger value="tab3">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Your profile information</TabsContent>
      <TabsContent value="tab2">Configure your notification preferences</TabsContent>
      <TabsContent value="tab3">Manage your payment methods and subscription</TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Underline variant shows only a bottom border highlight for the active tab.',
      },
    },
  },
};

export const Pills: Story = {
  render: (args) => (
    <Tabs variant="pills" defaultValue="tab1">
      <TabsList variant="pills">
        <TabsTrigger value="tab1">Dashboard</TabsTrigger>
        <TabsTrigger value="tab2">Analytics</TabsTrigger>
        <TabsTrigger value="tab3">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" variant="pills">Dashboard overview</TabsContent>
      <TabsContent value="tab2" variant="pills">Analytics data and insights</TabsContent>
      <TabsContent value="tab3" variant="pills">Generate and view reports</TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pills variant shows tabs as pill-shaped buttons in a container.',
      },
    },
  },
};

export const Outline: Story = {
  render: (args) => (
    <Tabs variant="outline" defaultValue="tab1">
      <TabsList variant="outline">
        <TabsTrigger value="tab1">Products</TabsTrigger>
        <TabsTrigger value="tab2">Customers</TabsTrigger>
        <TabsTrigger value="tab3">Orders</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" variant="outline">Product management</TabsContent>
      <TabsContent value="tab2" variant="outline">Customer information</TabsContent>
      <TabsContent value="tab3" variant="outline">Order history and details</TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Outline variant shows tabs with a border outline.',
      },
    },
  },
};

export const Vertical: Story = {
  render: (args) => (
    <Tabs orientation="vertical" defaultValue="tab1">
      <TabsList orientation="vertical">
        <TabsTrigger value="tab1">Dashboard</TabsTrigger>
        <TabsTrigger value="tab2">Projects</TabsTrigger>
        <TabsTrigger value="tab3">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Dashboard overview</TabsContent>
      <TabsContent value="tab2">Your current projects</TabsContent>
      <TabsContent value="tab3">Team members and collaboration</TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs can be oriented vertically.',
      },
    },
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <Tabs fullWidth defaultValue="tab1">
      <TabsList fullWidth>
        <TabsTrigger value="tab1">First Tab</TabsTrigger>
        <TabsTrigger value="tab2">Second Tab</TabsTrigger>
        <TabsTrigger value="tab3">Third Tab</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">First tab content</TabsContent>
      <TabsContent value="tab2">Second tab content</TabsContent>
      <TabsContent value="tab3">Third tab content</TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs can take up the full width of their container.',
      },
    },
  },
};