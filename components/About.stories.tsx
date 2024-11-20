import type { Meta, StoryFn } from '@storybook/react';
import About from './About';

// Define the metadata for the story
const meta: Meta<typeof About> = {
  title: 'Components/About', // Storybook hierarchy
  component: About, // The component being documented
  tags: ['autodocs'], // Optional tags for documentation
};

export default meta;

// Define the default story
export const Default: StoryFn<typeof About> = () => <About />;
