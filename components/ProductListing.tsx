import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useRouter } from "expo-router";
import BackArrow from "./SVG/BackArrow";
import FilterIcon from "./SVG/FilterIcon";
import CustomBar from "./CustomBar";
import ProductCard from "./ui/ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: any;
}

interface ProductListingProps {
  filteredProducts: Product[];
  toggleCategory: (category: string) => void;
  addToCart: (product: Product) => void;
  selectedCategories: string[];
  categories: string[];
}

const ProductListing: React.FC<ProductListingProps> = ({
  filteredProducts,
  toggleCategory,
  addToCart,
  selectedCategories,
  categories,
}) => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#FAF8F2] px-4 pt-10">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <BackArrow />
          <Text className="text-sm text-[#4B5D3B] ml-2 font-avenir">Back</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center space-x-1">
          <Text className="ml-1 text-sm text-[#4B5D3B] font-avenir">
            Filter
          </Text>

          <FilterIcon />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text className="text-5xl font-bold text-[#4B5D3B] mb-2 mt-5">Meat</Text>

      <CustomBar height="h-3" />

      {/* Category Tabs */}
      <View className="flex-row justify-between mt-5">
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => toggleCategory(category)}
          >
            <Text
              className={`text-base ${
                selectedCategories.includes(category)
                  ? "text-[#4B5D3B] font-bold"
                  : "text-[#B0A9A3]"
              }`}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text className="text-pantryGreen text-[12px] mt-3 mb-1">
        Based on your selection
      </Text>

      <Text className="text-pantryGreen text-4xl font-semibold mb-5">
        Our products
      </Text>

      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <ProductCard product={item} addToCart={addToCart} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default React.memo(ProductListing);
