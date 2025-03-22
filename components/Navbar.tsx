'use client';

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 text-green-950 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-inherit shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    {/* Logo (Always on the Left) */}
                    <Link
                        href="/"
                        className="text-3xl font-extrabold transition duration-300 hover:opacity-80"
                    >
                        cheffy
                    </Link>

                    {/* Tagline (Right on Desktop, Left on Mobile) */}
                    <p className="text-sm text-gray-600 hidden md:block">
                        Discover the best restaurants near you
                    </p>
                </div>

                {/* Mobile View - Show Tagline Below Logo */}
                <div className="md:hidden flex ">
                    <p className="text-sm text-gray-600">
                        Discover the best restaurants near you
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
