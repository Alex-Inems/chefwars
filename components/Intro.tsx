'use client';
import Image from 'next/image';
import Link from 'next/link';
import About from './About';

const Intro = () => {
    return (
        <div>
            <div className="bg-landing-bg flex flex-col lg:flex-row items-center justify-between min-h-screen p-6 md:p-10 bg-cover bg-center bg-no-repeat">
                
                {/* Left side - Text */}
                <div className="flex flex-col justify-center items-start w-full lg:w-1/2 space-y-4 p-4 md:p-6 rounded-lg order-1 lg:order-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Chef Wars
                    </h1>
                    <p className="text-base md:text-lg text-white">
                        Chef Wars is Nigeria&apos;s premier culinary competition where the best chefs showcase their skills in a competitive setting. From mouth-watering dishes to creative cooking techniques, Chef Wars is all about culinary mastery.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <button onClick={() => window.location.href = '/auth'} className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-orange-950 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
                            Learn More
                        </button>
                        <Link href="/register" className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-orange-700 hover:bg-orange-400 text-white font-bold rounded-md shadow-md transition duration-300">
                            Register
                        </Link>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="relative w-full lg:w-1/2 order-2 lg:order-1 mt-6 lg:mt-0">
                    {/* Image */}
                    <div className="w-full h-auto">
                        <Image
                            src="/images/food.jpg"
                            alt="Intro Image"
                            layout="responsive"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* Overlay Div */}
                    <div className="absolute -bottom-[20%] -left-2 w-[70%] md:w-3/4 h-48 md:h-[66.67%] bg-black bg-opacity-60 flex flex-col justify-center items-center rounded-tr-lg p-4">
                        <h3 className="text-white font-bold text-lg md:text-xl">Special Offer</h3>
                        <div className='bg-red-500 w-12 md:w-20 h-1 my-2'></div>
                        <p className="text-white font-bold text-sm md:text-base">Grab the opportunity to showcase your talents</p>
                        <button onClick={() => window.location.href = '/auth'} className="bg-orange-700 hover:bg-orange-400 text-white font-bold py-2 px-6 md:px-8 rounded-full shadow-md transition duration-300 ease-in-out whitespace-nowrap mt-2">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <About />
            </div>
        </div>
    );
};

export default Intro;
