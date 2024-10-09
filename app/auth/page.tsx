'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation'; // For redirection
import { auth, googleProvider, db } from '../../firebaseConfig';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { motion } from 'framer-motion';
import { collection, query, where, getDocs, setDoc, doc } from 'firebase/firestore'; // Import Firestore functions
import { FirebaseError } from 'firebase/app'; // Import FirebaseError

const slideImages = [
  '/images/eight.jpg',
  '/images/sev.jpg',
  '/images/first.jpg',
];

const Auth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>(''); // For username sign-in/registration
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string>(''); // State for error message
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error message

    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save username and email to Firestore
        const profileImage = user.photoURL || '/default-profile.png'; // Use default image if not provided
        await setDoc(doc(db, 'users', user.uid), {
          username: username,
          email: email,
          profileImage: profileImage,
        });

        alert('Registration successful');
        router.push('/');
      } else {
        const isUsername = email.includes('@') === false; // Basic check
        let userEmail = email;

        if (isUsername) {
          const q = query(collection(db, 'users'), where('username', '==', email));
          const userDocs = await getDocs(q);

          if (!userDocs.empty) {
            userEmail = userDocs.docs[0].data().email; // Get email from the first matched user
          } else {
            throw new Error('Username not found');
          }
        }

        const userCredential = await signInWithEmailAndPassword(auth, userEmail, password);
        const user = userCredential.user; // Log user info

        // You can use user info here, for example, log it or store it in a state
        console.log('User signed in:', user);

        alert('Login successful');
        router.push('/');
      }
    } catch (error) {
      console.error('Authentication Error', error);

      // Narrow down the error type
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/email-already-in-use') {
          setErrorMessage('Email already in use. Login Instead?');
        } else {
          setErrorMessage(error.message);
        }
      } else if (error instanceof Error) {
        setErrorMessage(error.message); // Handle other known errors
      } else {
        setErrorMessage('An unknown error occurred.'); // Handle unknown errors
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Get Google profile data
      const googleUsername = user.displayName || 'Unknown User';
      const profileImage = user.photoURL || '/default-profile.png'; // Use default image if not provided

      // Save the user details in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        username: googleUsername,
        email: user.email,
        profileImage: profileImage,
      });
      
      console.log("User signed in:", user); // Log user info

      alert('Google login successful');
      router.push('/');
    } catch (error) {
      console.error('Google login error', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <motion.div className="w-full p-12 md:w-1/2 flex flex-col justify-center items-center bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-serif mb-6">{isRegistering ? 'Create Account' : 'Welcome Back!'}</h1>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {isRegistering && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            type="email"
            placeholder="Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          {errorMessage && (  // Conditionally render error message
            <div>
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
              {errorMessage.includes('Email already in use') && (
                <button 
                  onClick={() => { setIsRegistering(false); setErrorMessage(''); }} 
                  className="mt-2 text-blue-600 hover:underline"
                >
                  Login Instead
                </button>
              )}
            </div>
          )}

          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
            {isRegistering ? 'Register' : 'Sign In'}
          </button>
        </form>

        <button onClick={handleGoogleLogin} className="w-full p-3 mt-4 bg-red-600 text-white rounded-lg hover:bg-red-500 transition">
          Sign in with Google
        </button>

        <button onClick={() => setIsRegistering(!isRegistering)} className="mt-4 text-blue-600 hover:underline">
          {isRegistering ? 'Already have an account? Sign In' : 'Don’t have an account? Register'}
        </button>

        {/* Button to Get Tickets leading to Auth page */}
        <button onClick={() => router.push('/tickets')} className="w-full p-3 mt-4 bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
          Get Tickets
        </button>
      </motion.div>

      <motion.div className="hidden md:flex md:w-1/2 relative">
        <motion.img
          src={slideImages[currentIndex]}
          alt="Slide"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default Auth;
