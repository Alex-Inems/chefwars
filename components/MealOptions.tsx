'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MealOptions: FC = () => {
  return (
    <section className="py-20 bg-[#fdf3eb] text-center">
      <h2 className="text-4xl font-light text-green-900 mb-12">We&apos;re always here for you</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Breakfast Card */}
        <div className="bg-transparent rounded-2xl shadow-lg p-6 flex flex-col items-center border border-green-900">
          <div className="relative w-full h-56 mb-4">
            <Image 
              src="/images/1.jpg" 
              alt="Breakfast Wrap" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold text-green-900">Breakfast Cravings</h3>
          <p className="text-green-900">🥗 Light meal 🍹 Fruit drink ⏰ From 7am</p>
          <Link href="#" className="mt-4 bg-[#f4c16e] hover:bg-[#e5a95e] text-white font-semibold py-2 px-4 rounded-md shadow-md">
            Book a Table 💙
          </Link>
        </div>

        {/* Lunch Card */}
        <div className="bg-transparent rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-200">
          <div className="relative w-full h-56 mb-4">
            <Image 
              src="/images/2.jpg" 
              alt="Lunch Meal" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold text-green-900">Lunch Blast</h3>
          <p className="text-green-900">🌶 Spicy meal 🍹 Beverage ⏰ From 1pm</p>
          <Link href="#" className="mt-4 bg-[#f4c16e] hover:bg-[#e5a95e] text-white font-semibold py-2 px-4 rounded-md shadow-md">
            Book a Table 💙
          </Link>
        </div>

        {/* Dinner Card */}
        <div className="bg-transparent rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-200">
          <div className="relative w-full h-56 mb-4">
            <Image 
              src="/images/3.jpg" 
              alt="Dinner Steak" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold text-green-900">Dinner Madness</h3>
          <p className="text-green-900">🥗 Light meal 🍹 Beverage ⏰ From 9pm</p>
          <Link href="#" className="mt-4 bg-[#f4c16e] hover:bg-[#e5a95e] text-white font-semibold py-2 px-4 rounded-md shadow-md">
            Book a Table 💙
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MealOptions;
