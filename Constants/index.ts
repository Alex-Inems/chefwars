// Import necessary icons from react-icons
import { FaHome, FaUtensils, FaTicketAlt } from 'react-icons/fa';

// Define a type for reusable links
export interface Link {
  name: string;
  href: string;
  icon?: React.ElementType; // Icon should be typed as React.ElementType, which is a component type
}

// Define the navigation links with icons
export const navibarLinks: Link[] = [
  {
    name: 'Home',
    href: '/',
    icon: FaHome, // Pass the icon component directly
  },
  {
    name: 'About',
    href: '/aboutcheffy',
    icon: FaUtensils, // Pass the icon component directly
  },
  {
    name: 'Tickets',
    href: '/tickets',
    icon: FaTicketAlt, // Pass the icon component directly
  },
];

// Define avatar images
// export const avatarImages = [
//   '/images/avatar-1.jpeg',
//   '/images/avatar-2.jpeg',
//   '/images/avatar-3.png',
//   '/images/avatar-4.png',
//   '/images/avatar-5.png',
// ];
