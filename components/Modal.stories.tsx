import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Modal from './Modal';

// Default export for Storybook
export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
      // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Controls whether the modal is visible.',
    },
    onClose: {
      action: 'onClose',
      description: 'Callback triggered when the modal is closed.',
    },
    children: {
      control: { type: 'text' },
      description: 'Content inside the modal.',
    },
  },
} as Meta<typeof Modal>;

// Template definition
const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  children: <p>This is a modal!</p>,
};

// Interactive Story with State
export const Interactive = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-lg font-bold">Interactive Modal</h2>
        <p>This modal can be toggled open and closed.</p>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
};

// Story with Custom Content
export const CustomContent = Template.bind({});
CustomContent.args = {
  isOpen: true,
  children: (
    <div>
      <h2 className="text-lg font-bold">Custom Content</h2>
      <p>You can place any custom content inside the modal.</p>
    </div>
  ),
};

// Closed State
export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
};
