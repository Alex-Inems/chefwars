'use client';

import { useEffect, useState } from 'react';
import { db, storage } from '@/firebaseConfig'; // Ensure storage is correctly imported
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { motion } from 'framer-motion';
import Image from 'next/image';

const slides = [
    {
        image: '/images/competition.jpg',
        text: 'Welcome to Chef Wars! Join us for an exciting culinary journey.',
    },
    {
        image: '/images/judges.jpg',
        text: 'Meet our talented chefs showcasing their skills.',
    },
    {
        image: '/images/Chef1.jpg',
        text: 'Compete and enjoy delicious food experiences!',
    },
];

const Register = () => {
    const [name, setName] = useState('');
    const [nationality, setNationality] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [category, setCategory] = useState('');
    const [preferredChefName, setPreferredChefName] = useState('');
    const [culinaryExperience, setCulinaryExperience] = useState('');
    const [healthIssues, setHealthIssues] = useState('');
    const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setPaymentScreenshot(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Add user details to Firestore
            const userDoc = await addDoc(collection(db, 'users'), {
                name,
                nationality,
                state,
                email,
                phone,
                age,
                category,
                preferredChefName,
                culinaryExperience,
                healthIssues,
                paymentAccount: {
                    accountNumber: '9068176091',
                    bank: 'Opay',
                },
            });

            // Upload payment screenshot if provided
            if (paymentScreenshot) {
                const storageRef = ref(storage, `paymentScreenshots/${userDoc.id}`);
                await uploadBytes(storageRef, paymentScreenshot);
            }

            alert('User registered successfully!');
            // Reset form fields
            setName('');
            setNationality('');
            setState('');
            setEmail('');
            setPhone('');
            setAge('');
            setCategory('');
            setPreferredChefName('');
            setCulinaryExperience('');
            setHealthIssues('');
            setPaymentScreenshot(null);
        } catch (error) {
            console.error('Error adding document: ', error);
        } finally {
            setLoading(false);
            window.location.href = '/'; // Redirect to homepage
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-slate-900">
            {/* Registration Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/2 p-5 bg-slate-950 shadow-lg"
            >
                <h1 className="text-3xl font-bold mb-4 text-orange-400">Register</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 text-orange-400" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full bg-slate-700 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-orange-400" htmlFor="nationality">Nationality</label>
                        <input
                            type="text"
                            id="nationality"
                            placeholder='Nationality'
                            value={nationality}
                            onChange={(e) => setNationality(e.target.value)}
                            required
                            className="w-full bg-slate-700 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-orange-400" htmlFor="state">State/City</label>
                        <input
                            type="text"
                            id="state"
                            placeholder='State/City'
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                            className="w-full bg-slate-700 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-orange-400" htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-slate-700 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-orange-400" htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder='Phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="w-full bg-slate-700 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-orange-400" htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            className="w-full bg-slate-700 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-orange-400" htmlFor="category">Category</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            className="w-full bg-slate-700 p-2 rounded"
                        >
                            <option value="">Select...</option>
                            <option value="celebrity chef">Celebrity Chef</option>
                            <option value="food vendor">Food Vendor</option>
                            <option value="private chef">Private Chef</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 text-orange-400" htmlFor="preferredChefName">Preferred Chef Name</label>
                        <input
                            type="text"
                            id="preferredChefName"
                            value={preferredChefName}
                            onChange={(e) => setPreferredChefName(e.target.value)}
                            className="w-full bg-slate-700 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-orange-400" htmlFor="culinaryExperience">Do you have culinary experience?</label>
                        <select
                            id="culinaryExperience"
                            value={culinaryExperience}
                            onChange={(e) => setCulinaryExperience(e.target.value)}
                            required
                            className="w-full bg-slate-700 p-2 rounded"
                        >
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 text-orange-400" htmlFor="healthIssues">Any health issues? If yes, please state.</label>
                        <textarea
                            id="healthIssues"
                            value={healthIssues}
                            onChange={(e) => setHealthIssues(e.target.value)}
                            className="w-full bg-slate-700 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-orange-400" htmlFor="paymentAccount">Payment Account</label>
                        <input
                            type="text"
                            id="paymentAccount"
                            value="Account Number: 9068176091, Bank: Opay"
                            readOnly
                            className="w-full bg-slate-700 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-orange-400" htmlFor="paymentScreenshot">Upload Payment Screenshot</label>
                        <input
                            type="file"
                            id="paymentScreenshot"
                            onChange={handleFileChange}
                            className="w-full bg-slate-700 p-2 rounded"
                        />
                    </div>
                    <button type="submit" disabled={loading} className="col-span-1 bg-orange-400 p-2 rounded hover:bg-orange-500 transition duration-300">
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </motion.div>

            {/* Image Slider */}
            <div className="hidden sm:block sm:w-1/2 relative">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                            currentSlideIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <Image
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            fill
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">
                            {slide.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Register;
