import React, { createContext, useContext, useState, ReactNode } from "react";
import products from "@/constants/products";

type FilterContextType = {
  selectedCategories: string[];
  categories: string[];
  toggleCategory: (category: string) => void;
  filteredProducts: typeof products;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All",
  ]);
  const categories = ["All", "Beef", "Fish", "Pork", "Poultry"];


  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      if (category === "All") {
        return ["All"]; // Always select "All" alone
      }
  
      const isSelected = prev.includes(category);
      const newCategories = isSelected
        ? prev.filter((cat) => cat !== category) // Remove category
        : [...prev.filter((cat) => cat !== "All"), category]; // Add category, removing "All"
  
      // Prevent deselecting all by ensuring at least one category remains selected
      return newCategories.length > 0 ? newCategories : prev;
    });
  };
  
  
  const filteredProducts = selectedCategories.includes("All")
    ? products
    : products.filter((product) =>
        selectedCategories.includes(product.category)
      );

  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        categories,
        toggleCategory,
        filteredProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
