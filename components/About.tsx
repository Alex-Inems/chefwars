'use client'; // Declare as a client component

import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-customGray flex flex-col lg:flex-row items-center justify-between min-h-screen p-10">
      {/* Left side - Image */}
      <div className="relative w-full lg:w-1/2">
        <Image
          src="/images/poss.png" // Update with your image path
          alt="About Chef Wars"
          width={500}
          height={400}
          className="rounded-lg shadow-lg object-cover"
          priority // Preload the image for better performance
          layout="intrinsic" // Allows the image to be responsive and optimizes layout
        />
      </div>

      {/* Right side - Text with scrollbar */}
      <div className="w-full lg:w-1/2 h-96 overflow-y-auto bg-customGray shadow-lg p-6 rounded-lg mt-8 lg:mt-0">
        <h1 className="text-4xl font-bold text-orange-800 mb-4">About Chef Wars</h1>
        <p className="text-lg text-white mb-4">
          Chef Wars is a premier culinary event celebrating the art of cooking among talented chefs across Nigeria. Our mission is to showcase exceptional culinary skills and foster a vibrant community of food enthusiasts.
        </p>
        <p className="text-lg text-white mb-4">
          With years of experience in organizing high-profile culinary competitions, our team is dedicated to creating an unforgettable experience for both participants and spectators alike.
        </p>
        <p className="text-lg text-white mb-4">
          We believe in the power of creativity in the kitchen. Chef Wars combines innovation, culinary expertise, and entertainment to bring exciting challenges that highlight the chefs&apos; unique talents and creativity.
        </p>
        {/* Add more paragraphs or content as needed */}
      </div>
    </div>
  );
};

export default About;
