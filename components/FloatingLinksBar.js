'use client';

import { Home, User, BrainCircuit, Layers } from 'lucide-react';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const FloatingLinksBar = () => {
  return (
    <>
      {/* Floating sidebar for desktop */}
      <div className="bg-transparent fixed right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 backdrop-blur-md border border-gray-700 shadow-lg p-4 rounded-lg flex flex-col space-y-6 z-50 hidden md:flex">
        <button onClick={() => scrollToSection('home')} className="text-green-950 hover:text-green-400 transition p-2 rounded">
          <Home size={24} />
        </button>
        <button onClick={() => scrollToSection('about')} className="text-green-950 hover:text-green-400 transition p-2 rounded">
          <User size={24} />
        </button>
        <button onClick={() => scrollToSection('projects')} className="text-green-950 hover:text-green-400 transition p-2 rounded">
          <Layers size={24} />
        </button>
        <button onClick={() => scrollToSection('skills')} className="text-green-950 hover:text-green-400 transition p-2 rounded">
          <BrainCircuit size={24} />
        </button>
       
      </div>

      {/* Bottom navbar for mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 bg-opacity-50 backdrop-blur-md border-t border-gray-700 shadow-lg p-4 flex justify-around z-50 md:hidden">
        <button onClick={() => scrollToSection('home')} className="text-white hover:text-green-400 transition p-2 rounded">
          <Home size={24} />
        </button>
        <button onClick={() => scrollToSection('about')} className="text-white hover:text-green-400 transition p-2 rounded">
          <User size={24} />
        </button>
        <button onClick={() => scrollToSection('skills')} className="text-white hover:text-green-400 transition p-2 rounded">
          <BrainCircuit size={24} />
        </button>
        <button onClick={() => scrollToSection('projects')} className="text-white hover:text-green-400 transition p-2 rounded">
          <Layers size={24} />
        </button>
        
      </div>
    </>
  );
};

export default FloatingLinksBar;
