import RestaurantSearch from "../../components/RestaurantSearch";

export default function BookingPage() {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-2">Find & Book a Table</h1>
      <p className="text-gray-700 mb-4">
        Discover top restaurants and reserve a table instantly.
      </p>
      <RestaurantSearch />
    </div>
  );
}
