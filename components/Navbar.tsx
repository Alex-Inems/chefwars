'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { navibarLinks } from '@/Constants'; // Using navibarLinks from index.ts
import Image from 'next/image'; // Import Next.js Image component

const Navbar = () => {
  const { currentUser } = useAuth();
  console.log('Current User in Navbar:', currentUser);

  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-extrabold text-white transition duration-300 hover:opacity-80">
              ChefWars
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? '✖' : '☰'} {/* Hamburger or close icon */}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navibarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center text-lg text-white transition duration-300 hover:underline hover:underline-offset-4 focus:outline-none"
              >
                {link.icon && (
                  <link.icon
                    className="text-white"
                    size={24} // Set the size of the icon
                  />
                )}
                <span className="ml-2">{link.name}</span>
              </Link>
            ))}
            {currentUser ? (
              <div className="flex items-center space-x-4">
                {currentUser.photoURL && (
                  <Image
                    src={currentUser.photoURL}
                    alt="Profile Picture"
                    className="rounded-full"
                    width={40}
                    height={40} // Control the size of the image
                    priority
                  />
                )}
                <span className="hidden lg:block text-white">{currentUser.displayName || 'User'}</span>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md transition duration-300 hover:bg-red-500"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md transition duration-300 hover:bg-green-500"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 py-4 px-2">
            {navibarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center text-lg text-white transition duration-300 hover:underline hover:underline-offset-4 focus:outline-none"
              >
                {link.icon && (
                  <link.icon
                    className="text-white"
                    size={24} // Set the size of the icon
                  />
                )}
                <span className="ml-2">{link.name}</span>
              </Link>
            ))}
            {currentUser ? (
              <div className="flex items-center space-x-4">
                {currentUser.photoURL && (
                  <Image
                    src={currentUser.photoURL}
                    alt="Profile Picture"
                    className="rounded-full"
                    width={40}
                    height={40} // Adjust the size for mobile
                    priority
                  />
                )}
                <span className="text-white">{currentUser.displayName || 'User'}</span>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md transition duration-300 hover:bg-red-500"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md transition duration-300 hover:bg-green-500"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
