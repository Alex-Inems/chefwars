'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const AboutChefWars = () => {
    const router = useRouter(); // Next.js router for navigation

    // Define a union type for platforms
    type Platform = 'facebook' | 'twitter' | 'whatsapp';

    // Share function
    const shareOnSocialMedia = (platform: Platform) => {
        const url = encodeURIComponent(window.location.href);
        const message = encodeURIComponent('Join me at Chef Wars!');
        
        let shareUrl = '';
        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${message}&url=${url}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${message} ${url}`;
                break;
            default:
                break;
        }
        
        window.open(shareUrl, '_blank');
    };

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
                    Welcome to Chef Wars, the ultimate stage where passion for food meets fierce competition! More than just a cooking event, Chef Wars is a celebration of creativity, innovation, and the boundless love for culinary artistry. This event promises to engage, inspire, and, most importantly, satisfy.
                    <br />
                    At Chef Wars, we believe that food is more than just a necessity—it’s an experience, an expression of culture, and a universal language. Whether it’s the familiar comfort of a home-cooked dish or a groundbreaking culinary experiment, the world of flavors is as diverse as it is exciting. That’s exactly what Chef Wars is about—showcasing that diversity, pushing boundaries, and taking you on a sensory journey like no other.
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
                        src="/images/creativity.jpg"
                        alt="Culinary Creativity"
                        width={300}
                        height={200}
                        className="rounded-md shadow-md"
                    />
                    <h3 className="text-2xl font-semibold mt-4">Culinary Creativity</h3>
                    <p className="mt-2 text-md">
                        Experience the chefs&apos; unique creativity as they craft dishes you&apos;ve never seen before.
                    </p>
                </div>

                <div className="max-w-xs p-6 bg-white bg-opacity-10 rounded-lg shadow-lg text-center">
                    <Image
                        src="/images/judges.jpg"
                        alt="Judging Panel"
                        width={300}
                        height={200}
                        className="rounded-md shadow-md"
                    />
                    <h3 className="text-2xl font-semibold mt-4">Expert Judges</h3>
                    <p className="mt-2 text-md">
                        A panel of culinary experts will evaluate each dish, offering valuable feedback.
                    </p>
                </div>

                <div className="max-w-xs p-6 bg-white bg-opacity-10 rounded-lg shadow-lg text-center">
                    <Image
                        src="/images/audience.jpg"
                        alt="Audience Engagement"
                        width={300}
                        height={200}
                        className="rounded-md shadow-md"
                    />
                    <h3 className="text-2xl font-semibold mt-4">Audience Interaction</h3>
                    <p className="mt-2 text-md">
                        The audience plays a role too—cheer for your favorite chefs and witness exciting moments.
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
                <p className="text-lg mt-4 mb-4 max-w-2xl mx-auto">
                    Whether you&apos;re a food enthusiast, an aspiring chef, or simply looking for an entertaining event, Chef Wars offers something for everyone. Be part of an exciting culinary journey filled with flavors, competition, and innovation.
                </p>
                <Link
              href="/tickets"
              prefetch={true} // Prefetch the Tickets link automatically
              
                    className="mt-6 px-6 py-3 bg-orange-950 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              Tickets
            </Link>

                {/* Social Sharing Section */}
                <div className="mt-10 flex justify-center space-x-4">
                    <button onClick={() => shareOnSocialMedia('facebook')} className="flex items-center justify-center px-4 py-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-30 transition">
                        <FaFacebookF className="mr-2" /> Share on Facebook
                    </button>
                    <button onClick={() => shareOnSocialMedia('twitter')} className="flex items-center justify-center px-4 py-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-30 transition">
                        <FaTwitter className="mr-2" /> Share on Twitter
                    </button>
                    <button onClick={() => shareOnSocialMedia('whatsapp')} className="flex items-center justify-center px-4 py-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-30 transition">
                        <FaWhatsapp className="mr-2" /> Share on WhatsApp
                    </button>
                </div>
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
