'use client'; // Ensures the component runs on the client-side

import { useState } from 'react';
import Link from 'next/link';
import { navibarLinks } from '@/Constants'; // Using navibarLinks from index.ts

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    return (
        <nav className="sticky top-0 z-50 text-green-950 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-inherit shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-3xl font-extrabold transition duration-300 hover:opacity-80"
                        >
                            cheffy
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none"
                        >
                            {isOpen ? '✖' : '☰'} {/* Hamburger or close icon */}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navibarLinks.map((link, index) => (
                            <Link
                                key={link.href || index} // Use href or fallback to index as key
                                href={link.href}
                                prefetch={true} // Preload the link
                                className="flex items-center text-lg transition duration-300 hover:underline hover:underline-offset-4 focus:outline-none"
                            >
                                {link.icon && (
                                    <link.icon size={24} /> // Set the size of the icon
                                )}
                                <p><span className="ml-2">{link.name}</span></p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200">
                    <div className="flex flex-col space-y-4 py-4 px-2">
                        {navibarLinks.map((link, index) => (
                            <Link
                                key={link.href || index} // Use href or fallback to index as key
                                href={link.href}
                                prefetch={true} // Preload the link
                                className="flex items-center text-lg transition duration-300 hover:underline hover:underline-offset-4 focus:outline-none"
                            >
                                {link.icon && (
                                    <link.icon size={24} /> // Set the size of the icon
                                )}
                                <p><span className="ml-2">{link.name}</span></p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
