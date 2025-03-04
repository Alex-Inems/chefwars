// components/ChefProfiles.tsx
import Image from 'next/image';

const ChefProfiles = () => {
  return (
    <div className="chef-profiles p-6 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Featured Chefs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Sample Chef Profile */}
        <div className="chef-card bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/images/chef1.jpg"
            alt="Chef John Doe"
            width={300}
            height={300}
            className="rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold">Chef John Doe</h3>
          <p className="text-sm text-gray-600">Specialty: Italian Cuisine</p>
          <div className="flex justify-between mt-4">
            <button className="bg-orange-700 hover:bg-orange-400 text-white px-4 py-2 rounded-md">
              View Profile
            </button>
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
        <div className="chef-card bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/images/chef1.jpg"
            alt="Chef John Doe"
            width={300}
            height={300}
            className="rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold">Chef John Doe</h3>
          <p className="text-sm text-gray-600">Specialty: Italian Cuisine</p>
          <div className="flex justify-between mt-4">
            <button className="bg-orange-700 hover:bg-orange-400 text-white px-4 py-2 rounded-md">
              View Profile
            </button>
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>
        </div>

        {/* Another chef profile */}
        <div className="chef-card bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/images/chef2.jpg"
            alt="Chef Jane Smith"
            width={300}
            height={300}
            className="rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold">Chef Jane Smith</h3>
          <p className="text-sm text-gray-600">Specialty: French Cuisine</p>
          <div className="flex justify-between mt-4">
            <button className="bg-orange-700 hover:bg-orange-400 text-white px-4 py-2 rounded-md">
              View Profile
            </button>
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>
        </div>

        {/* Additional chef profiles can follow the same format */}
      </div>
    </div>
  );
};

export default ChefProfiles;
