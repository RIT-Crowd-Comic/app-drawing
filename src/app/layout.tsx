import type { Metadata } from "next";
import React from "react";
import { Inter} from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import BootstrapClient from "../scripts/BootstrapClient";

//importing components
import Navbar from "../components/NavBar"
import Footer from "../components/footer"

//declaring fonts
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crowd Comic",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapClient />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}