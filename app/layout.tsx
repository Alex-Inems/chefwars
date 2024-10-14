// app/layout.tsx
import { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "ChefWars",
  description: "Passion meets Competition",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

      <Navbar/>      
          {children} {/* Render child components/pages here */}

      </body>
    </html>
  );
}
