'use client'; // Required for client-side rendering in Next.js

import { FC } from 'react';
import Link from 'next/link';

const KeyFeatures: FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-blue-200 to-indigo-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-blue-100 opacity-60">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,128C672,96,768,64,864,48C960,32,1056,32,1152,80C1248,128,1344,224,1392,272L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,32C768,64,672,128,576,160C480,192,384,224,288,256C192,288,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12 z-10 relative">Why Choose Chefwars?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 z-10 relative">
        {/* Feature Item */}
        <div className="flex flex-col items-center bg-white p-10 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-400 hover:text-gray-800">
          <div className="text-6xl text-yellow-500 mb-6 transform transition-all duration-500 hover:rotate-12">
            🍽️
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Local and Fresh</h3>
          <p className="text-gray-600 text-center">All meals are prepared by local chefs using fresh, high-quality ingredients.</p>
        </div>

        {/* Feature Item */}
        <div className="flex flex-col items-center bg-white p-10 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-400 hover:text-gray-800">
          <div className="text-6xl text-yellow-500 mb-6 transform transition-all duration-500 hover:rotate-12">
            📱
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Easy Ordering</h3>
          <p className="text-gray-600 text-center">A simplified ordering and payment system for a smooth customer experience.</p>
        </div>

        {/* Feature Item */}
        <div className="flex flex-col items-center bg-white p-10 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-400 hover:text-gray-800">
          <div className="text-6xl text-yellow-500 mb-6 transform transition-all duration-500 hover:rotate-12">
            ⭐
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Chef Ratings</h3>
          <p className="text-gray-600 text-center">Trust the chef's quality through genuine customer ratings and reviews.</p>
        </div>

        {/* Feature Item */}
        <div className="flex flex-col items-center bg-white p-10 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-400 hover:text-gray-800">
          <div className="text-6xl text-yellow-500 mb-6 transform transition-all duration-500 hover:rotate-12">
            🍴
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Custom Meal Plans</h3>
          <p className="text-gray-600 text-center">Personalized meal options for every dietary need, from vegan to gluten-free.</p>
        </div>
      </div>

      {/* Optional Extra Section for More Engagement */}
      <div className="text-center mt-16">
        <Link href="/register" className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out">
          Join Chef Wars Now!
        </Link>
      </div>
    </section>
  );
};

export default KeyFeatures;
