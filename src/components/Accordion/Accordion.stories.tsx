import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Accordion components allow users to expand and collapse content sections, helping to organize information and reduce cognitive load.

## Accessibility

- Uses proper ARIA attributes (aria-expanded, aria-controls, aria-hidden)
- Supports keyboard navigation (Tab, Enter/Space to toggle)
- Maintains focus management
- Includes smooth animations for state changes

## Usage Guidelines

- Use accordions to organize related information into digestible sections
- Keep accordion headers clear and descriptive
- Avoid nesting accordions for better usability
- Consider which sections should be expanded by default
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost'],
      description: 'The visual style of the accordion',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
  },
  args: {
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem title="What is a design system?" id="faq-1" defaultOpen>
        A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.
      </AccordionItem>
      <AccordionItem title="Why use TypeScript?" id="faq-2">
        TypeScript adds static typing to JavaScript, which helps catch errors early, improves IDE support, and makes code more maintainable as projects grow.
      </AccordionItem>
      <AccordionItem title="How does Tailwind CSS work?" id="faq-3">
        Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.
      </AccordionItem>
    </Accordion>
  ),
};

export const Outline: Story = {
  render: (args) => (
    <Accordion variant="outline">
      <AccordionItem title="How to install Storybook?" id="faq-4" variant="outline">
        You can install Storybook in your project by running <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">npx storybook init</code>
      </AccordionItem>
      <AccordionItem title="What are component variants?" id="faq-5" variant="outline">
        Component variants are different versions of the same component with different visual styles or behaviors, controlled through props.
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Outline variant gives more emphasis to the accordion with a highlighted border.',
      },
    },
  },
};

export const Ghost: Story = {
  render: (args) => (
    <Accordion variant="ghost">
      <AccordionItem title="What is accessibility?" id="faq-6" variant="ghost">
        Accessibility (often abbreviated as a11y) refers to designing products, devices, services, or environments for people with disabilities.
      </AccordionItem>
      <AccordionItem title="What are design tokens?" id="faq-7" variant="ghost">
        Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ghost variant removes borders for a cleaner look.',
      },
    },
  },
};

export const DefaultOpen: Story = {
  render: (args) => (
    <Accordion>
      <AccordionItem title="This item is open by default" id="faq-8" defaultOpen>
        You can control which accordion items are open by default using the defaultOpen prop.
      </AccordionItem>
      <AccordionItem title="This item is closed by default" id="faq-9">
        This content will be hidden until the user clicks on the header.
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'You can set specific accordion items to be open by default.',
      },
    },
  },
};