import { View } from "react-native";

interface IconWithDotProps {
  icon: any;
  focused: boolean;
}

 const IconWithDot: React.FC<IconWithDotProps> = ({ icon, focused }) => {
  return (
    <View style={{ alignItems: "center" }}>
      {icon}
      {focused && (
        <View
          style={{
            width: 4,
            height: 4,
            borderRadius: 3,
            backgroundColor: "white",
            marginTop: 1,
          }}
        />
      )}
    </View>
  );
};
export default IconWithDot;
