'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const AboutChefWars = () => {
    type Platform = 'facebook' | 'twitter' | 'whatsapp';

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
        <div className="relative min-h-screen">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: -1 }}
            >
                <source src="/images/.mp4" type="video/mp4" />
            </video>

            <div className="relative min-h-screen p-6 md:p-10 flex flex-col items-center text-white">
                {/* Glass Effect Container */}
                <div
                    className="w-full max-w-6xl rounded-lg p-8 md:backdrop-blur-lg md:bg-gradient-to-tr md:from-white/10 md:to-white/5 md:shadow-lg md:border md:border-white/20"
                >
                    {/* Title Section */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { delayChildren: 0.3, staggerChildren: 0.2 },
                            },
                        }}
                        className="text-center mb-10"
                    >
                        <motion.h1
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                            className="text-3xl md:text-5xl font-bold"
                        >
                            About Chef Wars
                        </motion.h1>
                        <motion.p
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                            className="text-sm md:text-lg mt-4 max-w-3xl mx-auto"
                        >
                            Welcome to Chef Wars, the ultimate stage where passion for food meets fierce competition!
                            More than just a cooking event, Chef Wars is a celebration of creativity, innovation, and
                            the boundless love for culinary artistry.
                        </motion.p>
                    </motion.div>

                    {/* Chef Skills Section */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                src: '/images/chef1.jpg',
                                alt: 'Chef 1',
                                title: 'Skilled Chefs',
                                description:
                                    "Experience the talents of Nigeria's top chefs as they compete to create the finest dishes.",
                            },
                            {
                                src: '/images/competition.jpg',
                                alt: 'Competition',
                                title: 'Competitive Spirit',
                                description:
                                    'Witness chefs battle it out in timed challenges that push their creativity and culinary skills.',
                            },
                            {
                                src: '/images/creativity.jpg',
                                alt: 'Culinary Creativity',
                                title: 'Culinary Creativity',
                                description: 'Experience the chefs\' unique creativity as they craft dishes you\'ve never seen before.',
                            },
                            {
                                src: '/images/awards.jpg',
                                alt: 'Food Presentation',
                                title: 'Exceptional Presentation',
                                description: 'Marvel at visually stunning dishes that showcase artistry and culinary finesse.',
                            },
                            {
                                src: '/images/judges.jpg',
                                alt: 'Expert Judges',
                                title: 'Expert Judging Panel',
                                description: 'Learn from feedback provided by top culinary experts in the industry.',
                            },
                            {
                                src: '/images/audience.jpg',
                                alt: 'Audience Interaction',
                                title: 'Audience Interaction',
                                description: 'Engage with the competition by voting for your favorite dishes!',
                            },
                        ].map(({ src, alt, title, description }, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="p-6 bg-white bg-opacity-20 rounded-lg shadow-lg text-center"
                            >
                                <Image src={src} alt={alt} width={300} height={200} className="rounded-md shadow-md" />
                                <h3 className="text-xl md:text-2xl font-semibold mt-4">{title}</h3>
                                <p className="mt-2 text-sm md:text-md">{description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Social Sharing Section */}
                    <div className="mt-10 flex justify-center space-x-4">
                        {[
                            {
                                platform: 'facebook',
                                label: 'Facebook',
                                icon: <FaFacebookF />,
                                color: 'text-blue-600',
                            },
                            {
                                platform: 'twitter',
                                label: 'Twitter',
                                icon: <FaTwitter />,
                                color: 'text-sky-500',
                            },
                            {
                                platform: 'whatsapp',
                                label: 'WhatsApp',
                                icon: <FaWhatsapp />,
                                color: 'text-green-500',
                            },
                        ].map(({ platform, label, icon, color }) => (
                            <motion.button
                                key={platform}
                                onClick={() => shareOnSocialMedia(platform as Platform)}
                                className={`flex items-center justify-center px-4 py-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-30 transition ${color}`}
                                whileHover={{
                                    y: [0, -8, 0],
                                    transition: {
                                        repeat: Infinity,
                                        duration: 1.5,
                                    },
                                }}
                            >
                                <span className="mr-2">{icon}</span>
                                {label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Footer */}
                    <motion.footer
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-20"
                    >
                        <p className="text-sm">© 2024 Chef Wars. All Rights Reserved.</p>
                    </motion.footer>
                </div>
            </div>
        </div>
    );
};

export default AboutChefWars;
