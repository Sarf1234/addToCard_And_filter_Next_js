'use client'

import { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard';


const ProductPage = ({ product, colors, productmaterial }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(product.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts?.slice(indexOfFirstProduct, indexOfLastProduct);
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };  

  // Effect to filter products whenever selections change
  useEffect(() => {
    filterProducts(selectedColors, selectedMaterials);
  }, [selectedColors, selectedMaterials]);

  // Handle color selection
  const handleColorSelect = (color) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((c) => c !== color)
        : [...prevSelectedColors, color]
    );
  };

  // Handle material selection
  const handleMaterialSelect = (material) => {
    setSelectedMaterials((prevSelectedMaterials) =>
      prevSelectedMaterials.includes(material)
        ? prevSelectedMaterials.filter((m) => m !== material)
        : [...prevSelectedMaterials, material]
    );
  };

  const handleColorRemove = (color) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.filter((c) => c !== color)
    );
  };


  const handleMaterialRemove = (material) => {
    setSelectedMaterials((prevSelectedMaterials) =>
      prevSelectedMaterials.filter((m) => m !== material)
    );
  };


  // Filter products based on selected colors and materials
  const filterProducts = (colors, materials) => {
    let filtered = product.products;
    if (colors.length > 0) {
      filtered = filtered.filter((product) =>
        colors.some((color) => product.colorId === color.id)
      );
    }
    if (materials.length > 0) {
      filtered = filtered.filter((product) =>
        materials.some((material) => product.materialId === material.id)
      );
    }
    setFilteredProducts(filtered);
  };



  return (
    <div className="mx-auto px-8 md:mt-32 mt-12">
      <div className="flex md:flex-row gap-4">
        <div className="md:w-1/6 ">
          <div className="font-semibold text-lg mb-6">Filter</div>
          <div className="my-2 capitalize">Materials</div>
          <ul className="list-none list-inside mb-6">
            {productmaterial.material.map((material) => (
              <li
                className={`my-1 capitalize cursor-pointer ${
                  selectedMaterials.includes(material) ? 'font-bold' : ''
                }`}
                key={material.id}
                onClick={() => handleMaterialSelect(material)}
              >
                {material.name}
              </li>
            ))}
          </ul>
          <div className="my-2 capitalize">Color</div>
          <ul className="list-none list-inside">
            {colors.colors.map((color) => (
              <li
                className={`my-1 capitalize cursor-pointer ${
                  selectedColors.includes(color) ? 'font-bold' : ''
                }`}
                key={color.id}
                onClick={() => handleColorSelect(color)}
              >
                {color.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-5/6">
          {(selectedColors.length > 0 || selectedMaterials.length > 0) && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedColors.map((color) => (
                  <span
                    key={color.id}
                    className="bg-gray-200 text-black px-3 py-1 flex items-center gap-2 cursor-pointer"
                    onClick={() => handleColorRemove(color)}
                  >
                    {color.name}
                    <span className="text-black">&times;</span>
                  </span>
                ))}
                {selectedMaterials.map((material) => (
                  <span
                    key={material.id}
                    className="bg-gray-200 text-black px-3 py-1 flex items-center gap-2 cursor-pointer"
                    onClick={() => handleMaterialRemove(material)}
                  >
                    {material.name}
                    <span className="text-black">&times;</span>
                  </span>
                ))}
              </div>
            </div>
           )}
          <div className="flex gap-4 md:gap-12 flex-wrap justify-between w-full">
            {currentProducts?.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
          <div className="my-8 text-center">
            {Array.from({ length: Math.ceil(filteredProducts?.length / productsPerPage) }).map((_, index) => (
              <button key={index} onClick={() => paginate(index + 1)} className='mx-4 px-2 rounded-full bg-gray-200 text-black'>
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
