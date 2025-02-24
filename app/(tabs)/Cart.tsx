import CartPage from "@/components/CartPage";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Text, View } from "react-native";

export default function TabTwoScreen() {
  const { cartItems, updateQuantity, removeItem } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const DELIVERY_FEE = 200;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + DELIVERY_FEE;
  return (
    <CartPage
      cartItems={cartItems}
      updateQuantity={updateQuantity}
      removeItem={removeItem}
      subtotal={subtotal}
      total={total}
      promoCode={promoCode}
      setPromoCode={setPromoCode}
      DELIVERY_FEE={DELIVERY_FEE}
    />
  );
}
