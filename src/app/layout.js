import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from '../context/AddtoCartContext';
import Navbar from "../components/Navbar";
import ServiceBanner from "../components/ServiceBanner";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Js Test 2023",
  description: "Frontend React JS Developer 1st round Practical test ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ServiceBanner />
           {children}
           <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
