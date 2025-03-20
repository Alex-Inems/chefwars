import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  if (!city) {
    return NextResponse.json({ error: "City is required" }, { status: 400 });
  }

  const MAPBOX_API_KEY = process.env.MAPBOX_ACCESS_TOKEN;
  const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/restaurant.json?proximity=${encodeURIComponent(
    city
  )}&access_token=${MAPBOX_API_KEY}&limit=10`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (!data.features) {
      return NextResponse.json({ error: "No results found" }, { status: 404 });
    }

    const restaurants = data.features.map((place) => ({
      name: place.text,
      address: place.place_name,
      coordinates: place.center,
    }));

    return NextResponse.json(restaurants, { status: 200 });
  } catch (error) {
    console.error("Mapbox API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
