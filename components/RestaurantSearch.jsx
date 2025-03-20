"use client";

import { useState, useEffect } from "react";
import { MapPin, ExternalLink, Search, Map } from "lucide-react";

export default function RestaurantSearch() {
  const [city, setCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lon: longitude });
          fetchRestaurants(latitude, longitude);
        },
        (error) => {
          console.warn("Geolocation permission denied. Enter city manually.");
        }
      );
    }
  };

  const fetchRestaurants = async (latitude, longitude) => {
    setLoading(true);
    setError("");
    setRestaurants([]);

    try {
      const overpassQuery = `
        [out:json];
        node[amenity=restaurant](around:10000,${latitude},${longitude});
        out;
      `;
      const overpassURL = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

      const response = await fetch(overpassURL);
      const data = await response.json();

      if (!data.elements.length) {
        setError("No restaurants found nearby.");
      } else {
        setRestaurants(data.elements);
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleManualSearch = async () => {
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setRestaurants([]);

    try {
      const cityResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${city}&format=json&limit=1`
      );
      const cityData = await cityResponse.json();

      if (!cityData.length) {
        setError("City not found.");
        setLoading(false);
        return;
      }

      const { lat, lon } = cityData[0];
      fetchRestaurants(lat, lon);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setError("Something went wrong.");
    }
  };

  return (
    <div className="p-6 bg-transparent min-h-screen flex flex-col items-center">
      {/* Search Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Map size={24} className="text-green-600" />
          Find Restaurants
        </h2>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Enter a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleManualSearch}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition w-full sm:w-auto"
          >
            Search
          </button>
        </div>

        {loading && (
          <div className="mt-6 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-green-600"></div>
          </div>
        )}
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full max-w-5xl">
        {restaurants.map((place, index) => {
          const name = place.tags.name || "Unnamed Restaurant";
          const street = place.tags["addr:street"] || "";
          const houseNumber = place.tags["addr:housenumber"] || "";
          const cityName = place.tags["addr:city"] || "";
          const postcode = place.tags["addr:postcode"] || "";
          const address = [street, houseNumber, cityName, postcode]
            .filter(Boolean)
            .join(", ") || "No address available";

          return (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-lg transition hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin size={16} className="text-gray-500" />
                {address}
              </p>
              {place.lat && place.lon && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline text-sm flex items-center gap-1 mt-2"
                >
                  View on Google Maps <ExternalLink size={14} />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
