'use client'; // Next.js 13+ client-side component directive

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ChefProfiles from './Chefprofile'; // Import ChefProfiles component
import KeyFeatures from './KeyFeatures';
import SearchFilter from './SearchFilter';

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false); // Track client-side rendering

  // Ensure component is mounted on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  // Redirect handler
  const handleRedirect = (href) => {
    if (isClient && typeof window !== 'undefined') {
      window.location.href = href;
    }
  };

  return (
    <div>
    <div className="relative flex flex-col lg:flex-row items-center justify-between p-6 md:p-10 space-y-10 lg:space-y-0">

      {/* Left Side - Text Content */}
      <div className="flex flex-col justify-center items-start w-full lg:w-1/2 space-y-4 p-4 md:p-6 z-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Discover Local Home-Cooked Meals, Delivered to Your Door
        </h1>
        <p className="text-base md:text-lg text-white">
          Chef Wars is Nigeria's premier culinary competition where top chefs showcase their skills in competitive cooking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleRedirect('/about')}
            className="w-full sm:w-auto px-6 py-3 bg-orange-950 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            Learn More
          </button>
          <Link
            href="/register"
            prefetch={true}
            className="w-full sm:w-auto px-6 py-3 bg-orange-700 hover:bg-orange-400 text-white font-bold rounded-md shadow-md transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Right Side - Image Content */}
      
      {/* Chef Profiles Section */}
      <ChefProfiles />
    </div>
      <KeyFeatures/>
      <SearchFilter/>
    </div>
  );
};

export default HeroSection;
