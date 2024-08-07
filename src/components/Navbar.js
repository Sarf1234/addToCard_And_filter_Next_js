'use client'
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../context/AddtoCartContext"
import { useContext, useState } from "react";

const Navbar = () => {

  const { cartItems } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="fixed top-0 z-50 bg-balck shadow-sm py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#" className="text-md font-bold text-[#FFFFFF]">
          <span className="text-gray-500">RIGHT</span>FIT.COM
        </Link>
        <ul className="flex items-center space-x-12">
          <li>
            <Link href="#" className="text-gray-500 text-sm hover:text-gray-900">
              All Products
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-500 text-sm hover:text-gray-900">
                Featured Products
            </Link>
          </li>
          <li>
            <button onClick={toggleCart} className="text-[#FFFFFF] hover:text-gray-900 flex gap-2 justify-center items-center">
                <IoCartOutline className="text-xl"/>
                <span className="text-sm">{cartItems?.length}</span>
            </button>
          </li>
        </ul>
      </div>
      {/* Cart UI  */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 h-screen bg-white w-2/6 p-4 shadow-md transition-all duration-300 ease-in-out" style={{ transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)' }}>
          {/* Cart Content */}
          <button onClick={toggleCart} className="absolute top-4 right-4">Close</button>
          {/* ... your cart content here */}
          <h5>Shopping Cart</h5>
          <div className="flex flex-row items-center mt-16 justify-center p-4 bg-gray-100 rounded-lg shadow-md">
              <img
                src="/images/productimage.jpg"
                alt="Autumn Flower Top"
                className="w-48 h-48 object-contain rounded-lg"
              />
              <div>
              <h2 className="mt-4 text-xl font-bold text-gray-800">
                Autumn Flower Top
              </h2>
              <div className="flex flex-col items-start mt-2">
                <span className="text-gray-600">
                  INR 1499.00
                </span>
                <button className="ml-4 mt-5 px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200">
                  Remove
                </button>
              </div>
              </div>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;