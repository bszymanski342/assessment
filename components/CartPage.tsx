import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  GestureResponderEvent,
} from "react-native";
import BackArrow from "./SVG/BackArrow";
import { router } from "expo-router";
import CustomBar from "./CustomBar";
import AppButton from "./ui/AppButton";
import CartItemCard from "./ui/CartItemCard";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: any;
  quantity: number;
}

interface CartPageProps {
  cartItems: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  subtotal: number;
  total: number;
  promoCode: string;
  setPromoCode: (code: string) => void;
  DELIVERY_FEE: number;
}

const CartPage: React.FC<CartPageProps> = ({
  cartItems,
  updateQuantity,
  removeItem,
  subtotal,
  total,
  promoCode,
  setPromoCode,
  DELIVERY_FEE,
}) => {
  return (
    <ScrollView
      className="flex-1 bg-[#FAF8F2] px-4 pt-10 "
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <BackArrow />
        </TouchableOpacity>
      </View>

      <Text className="text-5xl font-semibold text-[#4B5D3B] mb-2 mt-5 font-garamondBoldItalic">
        Cart
      </Text>

      <CustomBar height="h-4" />
      {cartItems.length === 0 ? (
        <View className="items-center mt-10">
          <Text className="text-xl text-gray-500">Your cart is empty 🛒</Text>
        </View>
      ) : (
        <View>
          {cartItems.map((item, index) => (
            <CartItemCard
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              isLast={index === cartItems.length - 1}
            />
          ))}

          {/* Promo Code Input */}

          <View className="rounded-lg mt-2">
            <View className="flex-row border border-pantryGreen rounded-full px-4 py-1 items-center">
              <TextInput
                placeholder="Add your promo code"
                value={promoCode}
                onChangeText={setPromoCode}
                className="flex-1 text-pantryGreen"
                placeholderTextColor="#4B5D3B"
              />

              {/* Vertical Separator */}
              <View className="h-7 w-[1px] bg-pantryGreen mx-2" />

              <TouchableOpacity className="px-3">
                <Text className="text-pantryGreen opacity-50 font-avenir font-bold">
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Price Breakdown */}
          <View className=" py-4 px-1 rounded-lg mt-7 font-avenir">
            <View className="flex-row justify-between">
              <Text className="text-pantryGreen text-[12px]">Sub total</Text>
              <Text className="text-pantryGreen text-sm font-[800]">
                R {subtotal.toFixed(2)}
              </Text>
            </View>

            <View className="flex-row justify-between mt-4">
              <Text className="text-pantryGreen text-[12px]">Delivery</Text>
              <Text className="text-pantryGreen text-sm font-[800]">
                R {DELIVERY_FEE.toFixed(2)}
              </Text>
            </View>

            <View className="border-t border-pantryGreen my-3" />

            <View className="flex-row justify-between mb-5">
              <Text className="text-[18px] font-[700] font-garamondpro text-pantryGreen">
                Total
              </Text>
              <Text className="text-[18px] font-[700] font-garamondpro text-pantryGreen">
                R {total.toFixed(2)}
              </Text>
            </View>

            <AppButton
              title={"Checkout"}
              onPress={function (event: GestureResponderEvent): void {
                throw new Error("Function not implemented.");
              }}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default React.memo(CartPage);
