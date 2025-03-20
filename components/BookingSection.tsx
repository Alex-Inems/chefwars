import Image from "next/image";

export default function BookingSection() {
  return (
    <section className="bg-[#FAEDE8] py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Logo and Brand Name */}
        <div className="flex justify-center items-center mb-4">
          
          <span className="ml-2 text-[#1E3D2F] font-medium text-lg">Cheffy</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-[#1E3D2F]">
          Dont Wait . Book Now!
        </h2>

        {/* Description */}
        <p className="text-[#4A4A4A] mt-4 text-lg">
          Cheffy is more than just a meal—it's an experience. We bring the treasures 
          of South Asian spices and the comforts of home-style cooking.
        </p>

        {/* Booking Button */}
        <button className="mt-6 px-6 py-3 bg-[#1E3D2F] text-white rounded-full text-lg shadow-md flex items-center gap-2 mx-auto hover:bg-[#173026] transition">
          
          Book a Table
        </button>
      </div>
    </section>
  );
}
