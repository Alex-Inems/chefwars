'use client'; // Next.js 13+ client-side component directive

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import About from './About';

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  const handleRedirect = (href) => {
    if (isClient && typeof window !== 'undefined') {
      window.location.href = href;
    }
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative flex flex-col items-center text-center p-6 md:p-10 space-y-10 bg-[#fdf7f7]">
      
      {/* Text Content */}
      <div className="relative flex flex-col justify-center items-center w-full space-y-4 p-4 md:p-6">
        <h1 className="text-4xl md:text-4xl font-semibold text-green-900 leading-tight">
          Discover Local Home-Cooked Meals<br/> Delivered to Your Door!
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleRedirect('/about')}
            className="w-full sm:w-auto px-6 py-3 bg-green-950 text-white rounded-md shadow-md hover:bg-green-700 transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Image Slider Below Text */}
      <div className="relative w-full max-w-4xl">
        <Slider {...sliderSettings}>
          {['slide.jpg', 'drinks.jpg', 'slider.jpg', 'slide6.jpg'].map((img, index) => (
            <div key={index} className="relative w-full h-72">
              <Image 
                src={`/images/${img}`} 
                alt={`Delicious Meal ${index + 1}`} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
                priority={index === 0} // Load first image faster
              />
            </div>
          ))}
        </Slider>
      </div>
          
    </div>
  );
};

export default HeroSection;
