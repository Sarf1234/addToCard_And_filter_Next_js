import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from '../context/AddtoCartContext';

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
           {children}
        </CartProvider>
      </body>
    </html>
  );
}
