import ProductListing from "@/components/ProductListing";
import { useCart } from "@/context/CartContext";
import { useFilter } from "@/context/FilterContext";
import React from "react";

const Products = () => {
  const { selectedCategories, categories, toggleCategory, filteredProducts } =
    useFilter();
  const { addToCart } = useCart();

  return (
    <ProductListing 
      filteredProducts={filteredProducts} 
      toggleCategory={toggleCategory} 
      addToCart={addToCart} 
      selectedCategories={selectedCategories} // Pass selectedCategories
      categories={categories} // Pass categories
    />
  );
};

export default Products;
