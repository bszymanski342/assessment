import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import CartIcon from "@/components/SVG/CartIcon";

interface Product {
  id: string;
  name: string;
  price: number;
  image: any;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <View className="w-[47%] m-1 rounded-lg shadow-md mb-3">
      <Image source={product.image} className="w-full h-45 rounded" />
      <Text className="text-sm text-[#b9bdb1] mt-2 font-avenir font-extralight">
        {product.name}
      </Text>
      <View className="flex-row justify-between mt-5">
        <Text className="text-pantryGreen font-avenir font-[900]">
          R {product.price}
        </Text>
        <TouchableOpacity onPress={() => addToCart(product)}>
          <CartIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
