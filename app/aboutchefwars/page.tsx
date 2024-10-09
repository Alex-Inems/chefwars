'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const AboutChefWars = () => {
    const router = useRouter(); // Next.js router for navigation

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-700 to-yellow-600 p-10 flex flex-col items-center text-white">
            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <h1 className="text-5xl font-bold">About Chef Wars</h1>
                <p className="text-lg mt-4 max-w-3xl mx-auto">
                    Chef Wars is Nigeria&apos;s premier culinary competition where the best chefs showcase their skills in a competitive setting. From mouth-watering dishes to creative cooking techniques, Chef Wars is all about culinary mastery.
                </p>
            </motion.div>

            {/* Chef Skills Section */}
            <motion.div
                className="flex flex-wrap justify-center gap-10 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <div className="max-w-xs p-6 bg-white bg-opacity-10 rounded-lg shadow-lg text-center">
                    <Image
                        src="/images/chef1.jpg"
                        alt="Chef 1"
                        width={300}
                        height={200}
                        className="rounded-md shadow-md"
                    />
                    <h3 className="text-2xl font-semibold mt-4">Skilled Chefs</h3>
                    <p className="mt-2 text-md">
                        Experience the talents of Nigeria&apos;s top chefs as they compete to create the finest dishes.
                    </p>
                </div>
                <div className="max-w-xs p-6 bg-white bg-opacity-10 rounded-lg shadow-lg text-center">
                    <Image
                        src="/images/competition.jpg"
                        alt="Competition"
                        width={300}
                        height={200}
                        className="rounded-md shadow-md"
                    />
                    <h3 className="text-2xl font-semibold mt-4">Competitive Spirit</h3>
                    <p className="mt-2 text-md">
                        Witness chefs battle it out in timed challenges that push their creativity and culinary skills.
                    </p>
                </div>
                <div className="max-w-xs p-6 bg-white bg-opacity-10 rounded-lg shadow-lg text-center">
                    <Image
                        src="/images/food.jpg"
                        alt="Food Presentation"
                        width={300}
                        height={200}
                        className="rounded-md shadow-md"
                    />
                    <h3 className="text-2xl font-semibold mt-4">Culinary Delights</h3>
                    <p className="mt-2 text-md">
                        From appetizers to desserts, taste the best of what Nigerian cuisine has to offer.
                    </p>
                </div>
            </motion.div>

            {/* Why Attend Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-20 text-center"
            >
                <h2 className="text-4xl font-bold">Why Attend Chef Wars?</h2>
                <p className="text-lg mt-4 max-w-2xl mx-auto">
                    Whether you&apos;re a food enthusiast, an aspiring chef, or simply looking for an entertaining event, Chef Wars offers something for everyone. Be part of an exciting culinary journey filled with flavors, competition, and innovation.
                </p>
                <button 
                    onClick={() => router.push('/auth')} // Redirect to auth page
                    className="mt-6 px-6 py-3 bg-orange-950 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                >
                    Get Tickets
                </button>
            </motion.div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-20"
            >
                <p className="text-sm">© 2024 Chef Wars. All Rights Reserved.</p>
            </motion.footer>
        </div>
    );
};

export default AboutChefWars;
