import { Meta, StoryFn } from '@storybook/react';
import Navbar from './Navbar';
import { navibarLinks } from '@/Constants';
import { FaHome, FaInfo, FaUser } from 'react-icons/fa';

// Mock Data for Storybook (if needed)
const mockNavibarLinks = [
  { name: 'Home', href: '/', icon: FaHome },
  { name: 'About', href: '/about', icon: FaInfo },
  { name: 'Profile', href: '/profile', icon: FaUser },
];

// Default export for Storybook
export default {
  title: 'Components/Navbar',
  component: Navbar,
  
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Navbar>;

// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
// Template definition
const Template: StoryFn<typeof Navbar> = () => <Navbar />;

// Default Story
export const Default = Template.bind({});
Default.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
};

// Mobile Menu Open Story
export const MobileMenuOpen = Template.bind({});
MobileMenuOpen.decorators = [
  (Story) => (
    <div style={{ width: '375px' }}> {/* Simulate mobile viewport */}
      <Story />
    </div>
  ),
];
MobileMenuOpen.parameters = {
  viewport: {
    defaultViewport: 'mobile1', // Use Storybook's mobile presets
  },
};

// No Links Story
export const NoLinks = Template.bind({});
NoLinks.decorators = [
  () => {
    navibarLinks.length = 0; // Clear all links
    return <Navbar />;
  },
];

// Custom Links Story
export const CustomLinks = Template.bind({});
CustomLinks.decorators = [
  () => {
    // Replace navibarLinks for this story
    navibarLinks.splice(0, navibarLinks.length, ...mockNavibarLinks);
    return <Navbar />;
  },
];
