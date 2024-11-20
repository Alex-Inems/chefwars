import { Meta, StoryFn } from '@storybook/react';
import FAQ from './Faq';

// Default export for Storybook
export default {
  title: 'Components/FAQ',
  component: FAQ,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
} as Meta<typeof FAQ>;

// Template definition
const Template: StoryFn<typeof FAQ> = () => <FAQ />;

// Default Story
export const Default = Template.bind({});

Default.parameters = {
  layout: 'centered', // Center the FAQ component in the viewport
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],

};
