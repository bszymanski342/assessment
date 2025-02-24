// components/CartItemCard.tsx
import React, { memo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import CustomBar from "../CustomBar";

type CartItemCardProps = {
  item: {
    id: string;
    name: string;
    price: number;
    image: any;
    quantity: number;
  };
  updateQuantity: (id: string, amount: number) => void;
  removeItem: (id: string) => void;
  isLast?: boolean;
};

const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  updateQuantity,
  removeItem,
  isLast,
}) => {
  return (
    <View className="p-2">
      <View className="flex-row items-center my-5 ">
        <Image source={item.image} className="w-36 h-36 rounded-lg" />

        <View className="flex-1 ml-4">
          <Text className="text-[14px] font-garamondpro italic text-pantryGreen font-[400] uppercase">
            {item.name}
          </Text>
          <Text className="text-pantryGreen font-garamondBoldItalic font-bold italic text-base">
            R{item?.price}
          </Text>

          <View className="flex-row items-center mt-2">
            <TouchableOpacity
              onPress={() => removeItem(item.id)}
              className="border-2 border-pantryGreen px-2 py-1 rounded-2xl"
            >
              <Text className="text-pantryGreen text-[12px]">Remove</Text>
            </TouchableOpacity>

            <View className="flex-row items-center ml-2">
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, -1)}
                className="border-2 border-pantryGreen w-8 h-8 items-center justify-center rounded-full"
              >
                <Text className="text-pantryGreen text-lg">−</Text>
              </TouchableOpacity>

              <Text className="mx-2 text-sm">{item.quantity}</Text>

              <TouchableOpacity
                onPress={() => updateQuantity(item.id, 1)}
                className="border-2 border-pantryGreen w-8 h-8 items-center justify-center rounded-full"
              >
                <Text className="text-pantryGreen text-lg">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {!isLast && <CustomBar height="h-[1]" />}
    </View>
  );
};

export default CartItemCard;
