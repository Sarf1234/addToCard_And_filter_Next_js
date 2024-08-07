'use client'
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../context/AddtoCartContext"
import { useContext, useState, useEffect } from "react";
import dynamic from 'next/dynamic';

const Navbar = () => {

  const { cartItems, removeFromCart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 bg-balck py-4 w-full px-4 md:px-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#" className="text-md font-bold text-[#FFFFFF]">
          <span className="text-gray-200">RIGHT</span><span className={`${isScrolled ? "text-white" : 'text-black'}`}>FIT.COM</span>
        </Link>
        <ul className="flex items-center space-x-12 z-100">
          <li>
            <Link href="/" className={`text-sm hover:text-gray-200  ${isScrolled ? "text-white" : 'text-black'}`}>
              All Products
            </Link>
          </li>
          <li>
            <Link href="featured-Products" className={`text-sm hover:text-gray-200  ${isScrolled ? "text-white" : 'text-black'}`}>
                Featured Products
            </Link>
          </li>
          <li>
            <button onClick={toggleCart} className={`hover:text-gray-200 flex gap-2 justify-center items-center  ${isScrolled ? "text-white" : 'text-black'}`}>
                <IoCartOutline className="text-xl"/>
                <span className="text-sm">{cartItems?.length}</span>
            </button>
          </li>
        </ul>
      </div>
      {/* Cart UI  */}
      {isCartOpen && (
        <div className="fixed top-0 z-60 right-0 h-screen overflow-auto bg-gray-200 w-2/6 p-4 shadow-md transition-all duration-300 ease-in-out" style={{ transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)' }}>
          {/* Cart Content */}
          <button onClick={toggleCart} className="absolute top-4 right-4">Close</button>
          {/* ... your cart content here */}
          <div>
            <h5 className="mt-10 text-lg font-semibold">Shopping Cart</h5>
           {cartItems?.map((cart) =>
            <div className="flex justify-start items-start mt-6 gap-8">
              <img
                src="/images/productimage.jpg"
                alt="Autumn Flower Top"
                className=" w-40 h-52 object-contain bg-white"
              />
              <div>
              <h2 className="text-lg font-semibold text-[#131414]">
                {cart?.name}
              </h2>
              <div className="flex flex-col items-start mt-2">
                <span className="text-pink-950">
                  INR {`${cart?.price}.00`}
                </span>
                <button onClick={() =>removeFromCart(cart?.id)} className=" mt-5 px-4 py-[0.35rem] text-sm font-medium text-white bg-[#3F3737] hover:bg-yellow-850 focus:outline-none focus:ring-2 focus:ring-yellow-850">
                  {`Remove   X`}
                </button>
              </div>
              </div>
            </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Navbar), {
  // Disable server-side rendering for this component
  ssr: false,
});