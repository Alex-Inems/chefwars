'use client';

import particlesOptions from '../particles.json';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import About from '@/components/About'; // Directly import the About component

const Intro = () => {
  const [init, setInit] = useState(false); // Track particles initialization
  const [isClient, setIsClient] = useState(false); // Track client-side rendering

  // Initialize particles
  useEffect(() => {
    if (init) return;
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, [init]);

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
      {/* Main Container */}
      <div className="bg-landing-bg flex flex-col lg:flex-row items-center justify-between min-h-screen p-6 md:p-10 bg-cover bg-center bg-no-repeat relative">
        
        {/* Particles Background */}
        {init && (
          <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
            <Particles options={particlesOptions} />
          </div>
        )}

        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center items-start w-full lg:w-1/2 space-y-4 p-4 md:p-6 rounded-lg z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Chef Wars
          </h1>
          <p className="text-base md:text-lg text-white">
            Chef Wars is Nigeria&apos;s premier culinary competition where the best chefs showcase their skills in a competitive setting. From mouth-watering dishes to creative cooking techniques, Chef Wars is all about culinary mastery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleRedirect('/aboutchefwars')}
              className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-orange-950 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              Learn More
            </button>
            <Link
              key="/register"
              href="/register"
              prefetch={true}
              className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-orange-700 hover:bg-orange-400 text-white font-bold rounded-md shadow-md transition duration-300"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Right Side - Image Content */}
        <div className="relative w-full lg:w-1/2 mt-6 lg:mt-0 z-20">
          {/* Image */}
          <div className="w-full h-auto">
            <Image
              src="/images/food.jpg"
              alt="Intro Image"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>

          {/* Overlay Content */}
          <div className="absolute -bottom-[20%] -left-2 w-[70%] md:w-3/4 h-48 md:h-[66.67%] bg-black bg-opacity-60 flex flex-col justify-center items-center rounded-tr-lg p-4">
            <h3 className="text-white font-bold text-lg md:text-xl">Special Offer</h3>
            <div className="bg-red-500 w-12 md:w-20 h-1 my-2"></div>
            <p className="text-white font-bold text-sm md:text-base">
              Grab the opportunity to showcase your talents. Registration 30,000
            </p>
            <Link
              href="/tickets"
              prefetch={true}
              className="bg-orange-700 hover:bg-orange-400 text-white font-bold py-2 px-6 md:px-8 rounded-full shadow-md transition duration-300 ease-in-out whitespace-nowrap mt-2"
            >
              Tickets
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-10">
        <About />
      </div>
    </div>
  );
};

export default Intro;
