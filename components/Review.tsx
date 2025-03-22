'use client'
import React, { useState, useEffect } from 'react';

const reviews = [
  {
    text: "This platform made event planning so seamless! From setting up event pages to managing ticket sales, everything was incredibly smooth. The user interface is intuitive, and the automation features saved me countless hours. Highly recommend this to all event organizers out there!",
    name: "Martina Rodriguez",
    title: "Event Organizer",
    image: "/images/Martina.jpeg"
  },
  {
    text: "A game-changer for ticketing and event management! I’ve used several platforms before, but none compare to this. The ability to track ticket sales in real-time and analyze attendee engagement has been invaluable. This tool has helped me increase event attendance significantly.",
    name: "Aaron Schnapp",
    title: "Conference Planner",
    image: "/images/Aaron.jpeg"
  },
  {
    text: "Super intuitive and easy to use. I’ve been in the industry for years, and this is by far the best platform I’ve come across. The seamless payment integration and real-time reporting features make everything effortless. My team absolutely loves using it!",
    name: "Michael Adeyemi",
    title: "Festival Coordinator",
    image: "/images/Mohammed.jpeg"
  }
];

const Review: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-orange-500 p-6 rounded-lg shadow-lg w-full flex flex-col md:flex-row items-center">
      
      {/* Review Text Section */}
      <div className="w-full md:w-1/2 p-4 text-center flex flex-col justify-center">
        <p className="text-gray-800 text-base md:text-lg transition-opacity duration-500">
          {reviews[currentReview].text}
        </p>
        <hr className="border-dotted border-gray-400 my-4" />
        <div className="flex items-center justify-center mt-4">
          <img src={reviews[currentReview].image} alt={reviews[currentReview].name} className="w-12 h-12 rounded-full mr-3" />
          <div>
            <p className="text-gray-900 font-semibold text-sm md:text-base">{reviews[currentReview].name}</p>
            <p className="text-gray-600 text-xs md:text-sm">{reviews[currentReview].title}</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <img src="/images/veff.png" alt="Review" className="w-full h-auto rounded-lg" />
      </div>
      
    </div>
  );
};

export default Review;
