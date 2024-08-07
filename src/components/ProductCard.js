import {useContext} from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "../context/AddtoCartContext"

const ProductCard = ({ product }) => {

  const { addToCart, cartItems } = useContext(CartContext);
  console.log(addToCart, cartItems)

  const addproductsToCart = (products) => {
    addToCart(products)
  }
  return (
    <div
      className="w-full md:w-[25%] cursor-pointer"
      onMouseOver={(e) => e.target.classList.add("hover-effect")}
      onMouseOut={(e) => e.target.classList.remove("hover-effect")}
      onClick={addproductsToCart}
    >
      <div className="relative">
        <Image
          src="/images/productimage.jpg"
          alt={product?.name}
          className="w-full h-auto object-cover bg-gray-100"
          width={300}
          height={400}
        />
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <p className="text-white py-2 px-4 rounded-md">Add to Cart</p>
        </div>
      </div>
      <div className="font-bold text-lg mt-2">{product?.name}</div>
      <div className="text-gray-600">BLACK COTTON</div>
      <div className="font-bold text-lg">INR {product?.price}.00</div>
    </div>
  );
};

export default ProductCard;