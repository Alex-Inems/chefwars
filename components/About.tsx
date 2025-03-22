'use client'; // Ensure this component runs on the client side

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Utensils, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15, delay: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 50, damping: 15, delay: 0.4 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15, delay: 0.6 },
    },
  };

  return (
    <section className=' bg-[#c19655]'>
    <motion.div
      className="relative  flex flex-col lg:flex-row items-center justify-between min-h-screen p-10 overflow-hidden"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      {/* Left Side - Text */}
      <motion.div
        className="w-full lg:w-1/2 h-auto p-6  text-emerald-950"
        variants={textVariants}
      >
        <h1 className="text-3xl font-thin text-orange-800 mb-4">
          A Healthier Way Now Has A Seat At The Table
        </h1>
        <p className="text-sm font-thin mb-4">
          Take advantage of exclusive deals and packages designed to elevate your stay. 
          Whether it&apos;s a romantic getaway or a family vacation.
        </p>
        <p className="text-sm font-extralight mb-4">
          Whatever your taste, we have something for everyone
        </p>
        <p className="text-sm font-extralight mb-4 flex items-center gap-2">
          <Utensils className="text-orange-800" /> We believe in the power of creativity in the kitchen.
        </p>
        <p className="text-sm font-extralight mb-4 flex items-center gap-2">
          <Lightbulb className="text-orange-800" /> Whatever your taste, we have something for everyone.
        </p>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="relative w-full lg:w-1/2 mt-8 lg:mt-0"
        variants={imageVariants}
      >
        <Image
          src="/images/imageess.png"
          alt="About Chef Wars"
          width={500}
          height={400}
          className=" object-cover"
          priority
        />
      </motion.div>
    </motion.div>
    </section>
  );
};

export default About;
