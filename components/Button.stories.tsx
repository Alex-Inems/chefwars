import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
import React from "react";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    title: { control: "text", description: "Text displayed inside the button" },
    leftIcon: { control: "text", description: "Path to the left icon" },
    rightIcon: { control: "text", description: "Path to the right icon" },
    bgColor: { control: "color", description: "Background color of the button" },
    textColor: { control: "color", description: "Text color of the button" },
    submitting: { control: "boolean", description: "Disables the button when true" },
    type: {
      control: { type: "select" },
      options: ["button", "submit"],
      description: "Type of the button",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size of the button",
    },
    hoverEffect: {
      control: { type: "boolean" },
      description: "Applies a hover effect",
    },
    handleClick: { action: "clicked", description: "Handler for button click events" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// Default Button Story
export const Default = Template.bind({});
Default.args = {
  title: "Click Me",
  size: "medium",
  bgColor: "bg-primary-purple",
  textColor: "text-white",
  hoverEffect: true,
};

// Small Button Story
export const SmallButton = Template.bind({});
SmallButton.args = {
  title: "Small Button",
  size: "small",
  bgColor: "#1e90ff",
};

// Large Button Story
export const LargeButton = Template.bind({});
LargeButton.args = {
  title: "Large Button",
  size: "large",
  bgColor: "#32cd32",
};

// Button with Hover Effect Story
export const WithHoverEffect = Template.bind({});
WithHoverEffect.args = {
  title: "Hover Me",
  hoverEffect: true,
  bgColor: "#ff6347",
  textColor: "#ffffff",
};

// Disabled Button Story
export const Disabled = Template.bind({});
Disabled.args = {
  title: "Disabled",
  submitting: true,
  size: "medium",
};
