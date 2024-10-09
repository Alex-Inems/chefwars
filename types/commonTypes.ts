// Import necessary icons from react-icons (or any icon library you prefer)
import {
  FaIndustry,
  FaShoppingCart,
  FaUtensils,
  FaTruck,
  FaCogs,
  FaClipboardList,
  FaChartLine,
  FaDollarSign,
} from 'react-icons/fa';

// Define a type for reusable links, including an optional array for dropdowns
export interface Link {
  name: string;
  href: string;
  icon?: React.ElementType;  // Icon should be typed as React.ElementType, which is a component type
  dropdownItems?: Link[]; // Optional dropdown items for nested links
}

// Example of reusable links with icons and dropdowns
export const links: Link[] = [
  {
    name: 'Industries',
    href: '/industries',
    icon: FaIndustry, // Pass the icon component directly, not as JSX
    dropdownItems: [
      { name: 'Retail', href: '/retail', icon: FaShoppingCart }, // Pass the icon component directly
      { name: 'Restaurant', href: '/restaurant', icon: FaUtensils },
      { name: 'Distribution', href: '/distribution', icon: FaTruck },
    ],
  },
  {
    name: 'Features',
    href: '/features',
    icon: FaCogs, // Pass the icon component directly
    dropdownItems: [
      { name: 'Point of Sale', href: '/point', icon: FaShoppingCart },
      { name: 'Inventory Management', href: '/inventory', icon: FaClipboardList },
      { name: 'Supply Chain Management', href: '/supplychain', icon: FaTruck },
      { name: 'Reports & Analytics', href: '/reports', icon: FaChartLine },
    ],
  },
  {
    name: 'Plans & Pricing',
    href: '/pricing',
    icon: FaDollarSign, // Pass the icon component directly
  },
];
