import React from "react";
import Svg, { Circle, Rect } from "react-native-svg";

const PersonIcon = ({ color = "#FCF9F5", size = 22, style = {} }) => {
  return (
    <Svg
      width={size}
      height={(size * 21) / 22} // Maintain aspect ratio based on original SVG
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <Circle cx="11" cy="5" r="4" stroke={color} strokeWidth="2" />
      <Rect x="1" y="13" width="20" height="7" rx="3.5" stroke={color} strokeWidth="2" />
    </Svg>
  );
};

export default PersonIcon;