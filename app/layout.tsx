// app/layout.tsx
import { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import FloatingLinksBar from "@/components/FloatingLinksBar";

export const metadata: Metadata = {
  title: "cheffy",
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

        <Navbar />
        <FloatingLinksBar/>
        {children} {/* Render child components/pages here */}

      </body>
    </html>
  );
}
