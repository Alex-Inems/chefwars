
import Intro from "@/components/Intro";
import "./globals.css";
import About from "@/components/About";
import MealOptions from "@/components/MealOptions";
import Review from "@/components/Review";
import BookingSection from "@/components/BookingSection";






export default function Home() {
  return (
    <div>
      
      <Intro/>
      <About/>
      <MealOptions/>
      <Review/>
      <BookingSection/>
      
    </div>
  );
}
