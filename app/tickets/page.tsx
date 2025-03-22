"use client";

import dynamic from "next/dynamic";
import "@/app/globals.css"; // Tailwind CSS setup
import Faq from "@/components/Faq";
import { motion } from "framer-motion";

// Dynamically import PaystackButton with ssr: false to avoid window being accessed during SSR
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton), 
  { ssr: false }
);

interface PricingPlan {
  title: string;
  price: number; // Price in NGN
  description: string;
  features: string[];
  buttonText: string;
}

interface PaystackReference {
  transaction: string; // Transaction reference or ID
  status: string; // Payment status
  message: string; // Payment message
  reference: string; // Unique Paystack reference
  amount: number; // Amount paid
  currency: string; // Currency code, e.g., NGN
  domain?: string; // Optional: Transaction domain (e.g., test or live)
  [key: string]: unknown; // Allows additional properties with safe typing
}

const Tickets: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      title: "Early Bird",
      price: 1500,
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
      price: 2500,
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
      price: 5000,
      description: "Exclusive access to VIP areas and perks.",
      features: [
        "All Standard benefits",
        "VIP seating",
        "Meet and greet with chefs",
      ],
      buttonText: "Become a VIP",
    },
  ];

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!;

  const handleSuccess = (reference: PaystackReference) => {
    console.log("Payment successful! Reference:", reference);
    // Handle successful payment
  };

  const handleClose = () => {
    console.log("Payment closed.");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-green-950">Event Tickets</h1>
        <p className="text-gren-950 mt-2">
          Choose your ticket and join us for an unforgettable experience!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-zinc-400 rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-red-700 mb-2">{plan.title}</h2>
            <p className="text-lg font-bold text-green-800">₦{plan.price}</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <PaystackButton
              className="mt-6 w-full py-2 bg-red-900 text-white rounded-lg font-semibold hover:bg-blue-500 transition"
              amount={plan.price * 100} // Convert to kobo
              email="test@example.com"
              publicKey={publicKey}
              text={plan.buttonText}
              onSuccess={handleSuccess}
              onClose={handleClose}
            />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-white mb-4">Contact Us</h2>
        <motion.form
          className="max-w-lg mx-auto bg-zinc-900 p-8 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 text-sm bg-zinc-800 text-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-sm bg-zinc-800 text-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows={5}
              className="w-full px-4 py-2 text-sm bg-zinc-800 text-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      <Faq />
    </div>
  );
};

export default Tickets;
