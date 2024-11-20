"use client";


import "@/app/globals.css"; // Tailwind CSS setup
import Faq from "@/components/Faq";
import { motion } from "framer-motion";
import { PaystackButton } from "react-paystack";

interface PricingPlan {
  title: string;
  price: number; // Price in NGN
  description: string;
  features: string[];
  buttonText: string;
}

const Tickets: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      title: "Early Bird",
      price: 1500, // amount in NGN (for example purposes)
      description: "Limited time offer for early registrants.",
      features: ["Access to all sessions", "Free event merchandise", "Networking opportunities"],
      buttonText: "Get Your Ticket",
    },
    {
      title: "Standard",
      price: 2500,
      description: "General admission to the event.",
      features: ["Access to all sessions", "Event merchandise", "Networking opportunities"],
      buttonText: "Purchase Now",
    },
    {
      title: "VIP",
      price: 5000,
      description: "Exclusive access to VIP areas and perks.",
      features: ["All Standard benefits", "VIP seating", "Meet and greet with chefs"],
      buttonText: "Become a VIP",
    },
  ];

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!;

  const handleSuccess = (reference: any) => {
    console.log("Payment successful! Reference:", reference);
    // Handle successful payment (e.g., update the user's ticket status in the backend)
  };

  const handleClose = () => {
    console.log("Payment closed.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-700 to-orange-900 py-12">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800">Event Tickets</h1>
        <p className="text-gray-600 mt-2">Choose your ticket and join us for an unforgettable experience!</p>
        <p className="text-gray-600 mt-4 font-semibold">Tickets will be available to users from the 24th of November.</p>
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
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{plan.title}</h2>
            <p className="text-lg font-bold text-blue-800">₦{plan.price}</p>
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
              className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition"
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
