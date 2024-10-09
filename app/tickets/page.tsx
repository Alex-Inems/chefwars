'use client';

import React from "react";
import "@/app/globals.css"; // Assuming Tailwind CSS is set up
import Faq from "@/components/Faq";
import { motion } from "framer-motion";

const Tickets = () => {
  const pricingPlans = [
    {
      title: "Early Bird",
      price: "$15",
      description: "Limited time offer for early registrants.",
      features: [
        "Access to all sessions",
        "Free event merchandise",
        "Networking opportunities",
      ],
      buttonText: "Get Your Ticket",
    },
    {
      title: "Standard",
      price: "$25",
      description: "General admission to the event.",
      features: [
        "Access to all sessions",
        "Event merchandise",
        "Networking opportunities",
      ],
      buttonText: "Purchase Now",
    },
    {
      title: "VIP",
      price: "$50",
      description: "Exclusive access to VIP areas and perks.",
      features: [
        "All Standard benefits",
        "VIP seating",
        "Meet and greet with chefs",
      ],
      buttonText: "Become a VIP",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-700 to-yellow-600 py-12">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800">Event Tickets</h1>
        <p className="text-gray-600 mt-2">Choose your ticket and join us for an unforgettable experience!</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }} // Animation on hover
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{plan.title}</h2> {/* Title Color Updated */}
            <p className="text-lg font-bold text-blue-800">{plan.price}</p> {/* Price Color Updated */}
            <p className="text-gray-500 mt-2">{plan.description}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700 flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition">
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Have questions about the event?</p>
        <button className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
          Contact Us
        </button>
      </div>

      <Faq />
    </div>
  );
};

export default Tickets;
