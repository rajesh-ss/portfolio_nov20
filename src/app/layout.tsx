import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import CinematicBackground from "@/components/CinematicBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rajesh Seethapathy | Full Stack Engineer",
  description: "Portfolio of Rajesh Seethapathy, a Full Stack Engineer specializing in MERN stack and Blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <CinematicBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
