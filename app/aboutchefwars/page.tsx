'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-b from-green-200 to-green-600 min-h-screen text-white">
            <div className="container mx-auto p-8 md:p-16">
                {/* Hero Section */}
                <div className="flex justify-center items-center flex-col text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold text-yellow-100"
                    >
                        Our Culinary Journey
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
                    >
                        At [Your Food Brand], we believe food is more than just sustenance. It's a celebration of culture, passion, and creativity. Our mission is to bring flavorful, locally inspired dishes to your table, crafted with love and care.
                    </motion.p>
                </div>

                {/* Our Story Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-20">
                    <div className="flex-1 p-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-3xl font-semibold text-yellow-200"
                        >
                            Our Story
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="mt-4 text-lg text-gray-300"
                        >
                            From humble beginnings in a small kitchen to becoming a trusted name in the culinary world, our story is built on a passion for fresh ingredients, unique flavors, and unforgettable dining experiences. Every dish we serve tells a story, and we invite you to be a part of it.
                        </motion.p>
                    </div>
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <Image
                                src="/images/chef-cooking.jpg"
                                alt="Chef cooking in the kitchen"
                                width={500}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Our Values Section */}
                <div className="mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="text-3xl font-semibold text-yellow-200"
                    >
                        Our Core Values
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        {[
                            {
                                title: 'Fresh Ingredients',
                                description:
                                    'We source only the finest, locally grown ingredients to ensure every meal is packed with flavor and nutrition.',
                                icon: '/icons/fresh-ingredients.svg',
                            },
                            {
                                title: 'Sustainability',
                                description:
                                    'Our commitment to sustainability drives us to use eco-friendly packaging, reduce waste, and support ethical farming practices.',
                                icon: '/icons/sustainability.svg',
                            },
                            {
                                title: 'Innovation',
                                description:
                                    'We believe in pushing the boundaries of culinary art by experimenting with new techniques and flavors to surprise and delight.',
                                icon: '/icons/innovation.svg',
                            },
                        ].map(({ title, description, icon }, index) => (
                            <motion.div
                                key={index}
                                className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Image src={icon} alt={title} width={50} height={50} className="mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-yellow-100">{title}</h3>
                                <p className="mt-2 text-gray-300">{description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Join Us Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="text-3xl font-semibold text-yellow-200"
                    >
                        Join Our Culinary Family
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                        className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
                    >
                        Whether you're a food lover, an aspiring chef, or someone who appreciates the art of dining, we welcome you to join our community. Stay connected, share your culinary experiences, and be the first to hear about our latest creations.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6, duration: 0.6 }}
                        className="mt-8 px-8 py-4 bg-yellow-500 text-gray-800 text-lg font-semibold rounded-full hover:bg-yellow-600 transition"
                    >
                        Get in Touch
                    </motion.button>
                </div>

                {/* Footer */}
                <footer className="text-center py-12 text-gray-200">
                    <p>© 2024 [Your Food Brand]. All rights reserved. Crafted with passion and purpose.</p>
                </footer>
            </div>
        </div>
    );
};

export default AboutUs;
