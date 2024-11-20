import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Intro from './Intro';

// Default export for Storybook
export default {
  title: 'Components/Intro',
  component: Intro,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
} as Meta<typeof Intro>;

// Template definition
const Template: StoryFn<typeof Intro> = () => <Intro />;

// Default Story
export const Default = Template.bind({});

Default.parameters = {
  layout: 'fullscreen', // Set Storybook layout to fullscreen for better visualization
};
