import React from "react";

const Footer = () => {
  return (
    <footer class="bg-black text-gray-400 py-8">
      <div class="container mx-auto flex flex-wrap justify-center md:justify-between">
        <div class="flex flex-col space-y-4">
          <h3 class="font-bold text-lf text-white"><span className="text-gray-200">RIGHT</span>FIT.COM</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="hover:text-white text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white text-sm">
                All Products
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white text-sm">
                Featured Products
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white text-sm">
                Contact
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white text-sm">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-center md:justify-start py-8">
          <p class="text-gray-400 text-sm px-4 md:px-0 md:w-[85%] w-[100%]">
            We are a registered E-Commerce seller and we support a variety of
            Local and International payment modes
          </p>
          <div class="flex justify-center md:justify-start space-x-4">
            <img
              src="/images/visa.jpg"
              alt="Visa"
              class=" bg-[#1E1E1E] aspect-auto w-80 "
            />
          </div>
        </div>
        <div class="flex flex-col py-8 ">
          <p class="text-gray-400 text-sm">Website protected by</p>
          <img
            src="/images/logo.jpg"
            alt="Digicert"
            class="aspect-auto w-36 mt-8"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
