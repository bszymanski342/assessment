import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  containerStyles?: string;
};

const AppButton: React.FC<ButtonProps> = ({ title, onPress,containerStyles }) => {
  return (
    <TouchableOpacity
      className={`bg-pantryGreen py-5 rounded-full ${ containerStyles?? ""}`}
      onPress={onPress}
    >
      <Text className="text-[#FCF9F5] font-avenir text-center text-sm">{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
