import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button'; // Adjust the import path if necessary

describe('Button Component', () => {
  it('renders the button with the correct title', () => {
    render(<Button title="Click me" />);

    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  it('disables the button when submitting is true', () => {
    render(<Button title="Click me" submitting={true} />);

    const button = screen.getByText('Click me');
    expect(button).toBeDisabled();
  });

  it('calls handleClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button title="Click me" handleClick={handleClick} />);

    const button = screen.getByText('Click me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders left icon when leftIcon is passed', () => {
    render(<Button title="Click me" leftIcon="/path/to/icon.png" />);

    const icon = screen.getByAltText('left icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders right icon when rightIcon is passed', () => {
    render(<Button title="Click me" rightIcon="/path/to/icon.png" />);

    const icon = screen.getByAltText('right icon');
    expect(icon).toBeInTheDocument();
  });

  it('applies correct background color when bgColor is passed', () => {
    render(<Button title="Click me" bgColor="bg-red-500" />);

    const button = screen.getByText('Click me');
    expect(button).toHaveClass('bg-red-500');
  });

  it('applies default background color when bgColor is not passed', () => {
    render(<Button title="Click me" />);

    const button = screen.getByText('Click me');
    expect(button).toHaveClass('bg-primary-purple');
  });

  it('renders the button with the correct text color when textColor is passed', () => {
    render(<Button title="Click me" textColor="text-black" />);

    const button = screen.getByText('Click me');
    expect(button).toHaveClass('text-black');
  });

  it('applies correct size classes when size prop is passed', () => {
    render(<Button title="Click me" size="small" />);
    const buttonSmall = screen.getByText('Click me');
    expect(buttonSmall).toHaveClass('py-2 px-4 text-sm');

    render(<Button title="Click me" size="medium" />);
    const buttonMedium = screen.getByText('Click me');
    expect(buttonMedium).toHaveClass('py-3 px-6 text-base');

    render(<Button title="Click me" size="large" />);
    const buttonLarge = screen.getByText('Click me');
    expect(buttonLarge).toHaveClass('py-4 px-8 text-lg');
  });

  it('applies hover effect classes when hoverEffect is true', () => {
    render(<Button title="Click me" hoverEffect={true} />);
    const button = screen.getByText('Click me');
    expect(button).toHaveClass('hover:bg-opacity-75');
  });

  it('does not apply hover effect classes when hoverEffect is false', () => {
    render(<Button title="Click me" hoverEffect={false} />);
    const button = screen.getByText('Click me');
    expect(button).not.toHaveClass('hover:bg-opacity-75');
  });

  it('renders the button with default size when size is not passed', () => {
    render(<Button title="Click me" />);
    const button = screen.getByText('Click me');
    expect(button).toHaveClass('py-3 px-6 text-base'); // Default is 'medium'
  });
});
