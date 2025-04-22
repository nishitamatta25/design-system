import React, { useState } from 'react';
import { Accordion, AccordionItem } from './components/Accordion/Accordion';
import { Tag } from './components/Tag/Tag';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/Tabs/Tabs';
import { Breadcrumb, BreadcrumbItem } from './components/Breadcrumb/Breadcrumb';
import { Moon, Sun, Palette } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeTab, setActiveTab] = useState('accordion');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200`}>
      <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 py-4 px-6 md:px-8 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <Palette className="h-6 w-6 text-primary-500" />
          <h1 className="text-lg font-semibold">Design System</h1>
        </div>
        
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
      </header>

      <main className="max-w-5xl mx-auto py-8 px-4 md:px-8 space-y-8">
        <Breadcrumb showHomeIcon>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/components">Components</BreadcrumbItem>
          <BreadcrumbItem>{activeTab === 'accordion' ? 'Accordion' : activeTab === 'tag' ? 'Tag' : activeTab === 'tabs' ? 'Tabs' : 'Breadcrumb'}</BreadcrumbItem>
        </Breadcrumb>

        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-bold mb-6">Component Showcase</h2>
          
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            variant="pills"
            className="mb-6"
          >
            <TabsList>
              <TabsTrigger value="accordion">Accordion</TabsTrigger>
              <TabsTrigger value="tag">Tag</TabsTrigger>
              <TabsTrigger value="tabs">Tabs</TabsTrigger>
              <TabsTrigger value="breadcrumb">Breadcrumb</TabsTrigger>
            </TabsList>
            
            <TabsContent value="accordion">
              <h3 className="text-xl font-medium mb-4">Accordion Component</h3>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                Accordion components allow users to expand and collapse content sections, helping to organize information and reduce cognitive load.
              </p>
              
              <div className="grid gap-6">
                <div>
                  <h4 className="font-medium mb-2">Default Variant</h4>
                  <Accordion>
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
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Outline Variant</h4>
                  <Accordion variant="outline">
                    <AccordionItem title="How to install Storybook?" id="faq-4" variant="outline">
                      You can install Storybook in your project by running <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">npx storybook init</code>
                    </AccordionItem>
                    <AccordionItem title="What are component variants?" id="faq-5" variant="outline">
                      Component variants are different versions of the same component with different visual styles or behaviors, controlled through props.
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tag">
              <h3 className="text-xl font-medium mb-4">Tag Component</h3>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                Tags are compact elements that represent an attribute, input, or action. They're commonly used for categories, filters, and selections.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Variants</h4>
                  <div className="flex flex-wrap gap-2">
                    <Tag>Default</Tag>
                    <Tag variant="secondary">Secondary</Tag>
                    <Tag variant="tertiary">Tertiary</Tag>
                    <Tag variant="outline">Outline</Tag>
                    <Tag variant="success">Success</Tag>
                    <Tag variant="warning">Warning</Tag>
                    <Tag variant="error">Error</Tag>
                    <Tag variant="info">Info</Tag>
                    <Tag variant="ghost">Ghost</Tag>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Sizes</h4>
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag size="sm">Small</Tag>
                    <Tag size="md">Medium</Tag>
                    <Tag size="lg">Large</Tag>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Rounded</h4>
                  <div className="flex flex-wrap gap-2">
                    <Tag rounded="default">Default</Tag>
                    <Tag rounded="full">Rounded Full</Tag>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Removable</h4>
                  <div className="flex flex-wrap gap-2">
                    <Tag removable onRemove={() => alert('Tag removed')}>Removable Tag</Tag>
                    <Tag variant="success" removable onRemove={() => alert('Success tag removed')}>Success Tag</Tag>
                    <Tag variant="error" removable onRemove={() => alert('Error tag removed')}>Error Tag</Tag>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tabs">
              <h3 className="text-xl font-medium mb-4">Tabs Component</h3>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                Tabs organize content into separate views where only one view can be visible at a time.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Default Variant</h4>
                  <Tabs defaultValue="tab1">
                    <TabsList>
                      <TabsTrigger value="tab1">Account</TabsTrigger>
                      <TabsTrigger value="tab2">Password</TabsTrigger>
                      <TabsTrigger value="tab3">Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">Account settings and preferences</TabsContent>
                    <TabsContent value="tab2">Update your password and security settings</TabsContent>
                    <TabsContent value="tab3">Manage your application settings</TabsContent>
                  </Tabs>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Underline Variant</h4>
                  <Tabs defaultValue="tab1" variant="underline">
                    <TabsList variant="underline">
                      <TabsTrigger value="tab1">Profile</TabsTrigger>
                      <TabsTrigger value="tab2">Notifications</TabsTrigger>
                      <TabsTrigger value="tab3">Billing</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">Your profile information</TabsContent>
                    <TabsContent value="tab2">Configure your notification preferences</TabsContent>
                    <TabsContent value="tab3">Manage your payment methods and subscription</TabsContent>
                  </Tabs>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Vertical Orientation</h4>
                  <Tabs defaultValue="tab1" orientation="vertical">
                    <TabsList orientation="vertical">
                      <TabsTrigger value="tab1">Dashboard</TabsTrigger>
                      <TabsTrigger value="tab2">Projects</TabsTrigger>
                      <TabsTrigger value="tab3">Team</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">Dashboard overview</TabsContent>
                    <TabsContent value="tab2">Your current projects</TabsContent>
                    <TabsContent value="tab3">Team members and collaboration</TabsContent>
                  </Tabs>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="breadcrumb">
              <h3 className="text-xl font-medium mb-4">Breadcrumb Component</h3>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                Breadcrumbs show the user's location in a website or app and help navigation to previous levels.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Default</h4>
                  <Breadcrumb>
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/products">Products</BreadcrumbItem>
                    <BreadcrumbItem href="/products/electronics">Electronics</BreadcrumbItem>
                    <BreadcrumbItem>Smartphones</BreadcrumbItem>
                  </Breadcrumb>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">With Home Icon</h4>
                  <Breadcrumb showHomeIcon>
                    <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
                    <BreadcrumbItem href="/dashboard/analytics">Analytics</BreadcrumbItem>
                    <BreadcrumbItem>Monthly Report</BreadcrumbItem>
                  </Breadcrumb>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Different Sizes</h4>
                  <div className="space-y-4">
                    <Breadcrumb size="sm">
                      <BreadcrumbItem href="/">Home</BreadcrumbItem>
                      <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
                      <BreadcrumbItem>Article Title</BreadcrumbItem>
                    </Breadcrumb>
                    
                    <Breadcrumb size="md">
                      <BreadcrumbItem href="/">Home</BreadcrumbItem>
                      <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
                      <BreadcrumbItem>Article Title</BreadcrumbItem>
                    </Breadcrumb>
                    
                    <Breadcrumb size="lg">
                      <BreadcrumbItem href="/">Home</BreadcrumbItem>
                      <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
                      <BreadcrumbItem>Article Title</BreadcrumbItem>
                    </Breadcrumb>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default App;