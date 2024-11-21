'use client'; // Ensure this component runs on the client side

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <motion.div
      className="relative bg-customGray flex flex-col lg:flex-row items-center justify-between min-h-screen p-10 overflow-hidden"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      {/* Left Side - Image */}
      <motion.div
        className="relative w-full lg:w-1/2"
        variants={imageVariants}
      >
        <Image
          src="/images/poss.png"
          alt="About Chef Wars"
          width={500}
          height={400}
          className="rounded-lg shadow-lg object-cover"
          priority
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        className="w-full lg:w-1/2 h-auto bg-customGray shadow-lg p-6 rounded-lg mt-8 lg:mt-0 text-white"
        variants={textVariants}
      >
        <h1 className="text-4xl font-bold text-orange-800 mb-4">
          About Chef Wars
        </h1>
        <p className="text-lg mb-4">
          Chef Wars is a premier culinary event celebrating the art of cooking among talented chefs across Nigeria. Our
          mission is to showcase exceptional culinary skills and foster a vibrant community of food enthusiasts.
        </p>
        <p className="text-lg mb-4">
          With years of experience in organizing high-profile culinary competitions, our team is dedicated to creating
          an unforgettable experience for both participants and spectators alike.
        </p>
        <p className="text-lg mb-4">
          We believe in the power of creativity in the kitchen. Chef Wars combines innovation, culinary expertise, and
          entertainment to bring exciting challenges that highlight the chefs&apos; unique talents and creativity.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
