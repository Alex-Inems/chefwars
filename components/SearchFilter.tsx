'use client'; // Required for client-side rendering in Next.js

import { FC, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

// Mock data representing dishes, chefs, and cuisines
const mockData = [
  { id: 1, name: 'Jollof Rice', type: 'Dish', cuisine: 'Nigerian', chef: 'Chef A', price: 2000, location: 'Lagos' },
  { id: 2, name: 'Pizza', type: 'Dish', cuisine: 'Italian', chef: 'Chef B', price: 3500, location: 'Abuja' },
  { id: 3, name: 'Suya', type: 'Dish', cuisine: 'Nigerian', chef: 'Chef C', price: 1500, location: 'Kaduna' },
  { id: 4, name: 'Pasta', type: 'Dish', cuisine: 'Italian', chef: 'Chef D', price: 2800, location: 'Lagos' },
  { id: 5, name: 'Efo Riro', type: 'Dish', cuisine: 'Nigerian', chef: 'Chef E', price: 2200, location: 'Ibadan' },
  // Add more mock data as needed
];

const SearchFilter: FC = () => {
  // State for search input, filters, results, and loading state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Handle search input change
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    if (searchTerm.trim()) {
      setLoading(true);
      setTimeout(() => {
        const filteredResults = mockData.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (!selectedFilter || item.type === selectedFilter)
        );
        setResults(filteredResults);
        setLoading(false);
      }, 1000); // Simulating network request delay
    } else {
      setResults([]);
    }
  };

  // Handle filter button click
  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    setLoading(true);
    setTimeout(() => {
      const filteredResults = mockData.filter(item =>
        item.type === filter && item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
      setLoading(false);
    }, 1000); // Simulating network request delay
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 via-blue-200 to-indigo-300">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Find Your Perfect Meal
      </h2>

      <div className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-xl">
        {/* Search Input with Icon */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative w-full md:w-2/3">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchInputChange}
              placeholder="Search by dish, cuisine, or chef"
              className="w-full py-4 pl-12 pr-6 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          </div>
          <button
            onClick={handleSearchClick}
            className="w-full md:w-1/3 py-4 px-6 bg-yellow-500 text-white rounded-2xl hover:bg-yellow-400 transition duration-300 shadow-lg"
          >
            Search
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <button
            onClick={() => handleFilterClick('Dish')}
            className={`py-3 px-6 bg-white text-gray-700 font-semibold border-2 border-gray-300 rounded-2xl hover:bg-yellow-50 transition duration-300 transform hover:scale-105 ${
              selectedFilter === 'Dish' ? 'bg-yellow-100' : ''
            }`}
          >
            Dish Type
          </button>
          <button
            onClick={() => handleFilterClick('Price Range')}
            className={`py-3 px-6 bg-white text-gray-700 font-semibold border-2 border-gray-300 rounded-2xl hover:bg-yellow-50 transition duration-300 transform hover:scale-105 ${
              selectedFilter === 'Price Range' ? 'bg-yellow-100' : ''
            }`}
          >
            Price Range
          </button>
          <button
            onClick={() => handleFilterClick('Location')}
            className={`py-3 px-6 bg-white text-gray-700 font-semibold border-2 border-gray-300 rounded-2xl hover:bg-yellow-50 transition duration-300 transform hover:scale-105 ${
              selectedFilter === 'Location' ? 'bg-yellow-100' : ''
            }`}
          >
            Location
          </button>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        )}

        {/* Results Section */}
        {!loading && results.length > 0 && (
          <div className="flex flex-wrap gap-8 justify-center">
            {results.map((item) => (
              <div key={item.id} className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.cuisine} - {item.chef}</p>
                <p className="text-gray-500">{item.price} NGN</p>
                <p className="text-gray-400">{item.location}</p>
              </div>
            ))}
          </div>
        )}

        {/* No Results Found */}
        {!loading && results.length === 0 && (
          <div className="text-center py-8 text-lg text-gray-600">
            No results found. Please try a different search or filter.
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchFilter;
