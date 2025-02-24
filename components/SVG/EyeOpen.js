import React from "react";
import Svg, { Path } from "react-native-svg";

const EyeIcon = ({ color = "#54634B", size = 24, style = {} }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <Path
        d="M12 4C7.5 4 3.7 6.9 1.7 11.6C1.6 11.8 1.6 12.1 1.7 12.4C3.7 17.1 7.5 20 12 20C16.5 20 20.3 17.1 22.3 12.4C22.4 12.2 22.4 11.9 22.3 11.6C20.3 6.9 16.5 4 12 4ZM12 18C8.6 18 5.6 15.8 4 12C5.6 8.2 8.6 6 12 6C15.4 6 18.4 8.2 20 12C18.4 15.8 15.4 18 12 18ZM12 8C10.3 8 9 9.3 9 11C9 12.7 10.3 14 12 14C13.7 14 15 12.7 15 11C15 9.3 13.7 8 12 8ZM12 12C11.4 12 11 11.6 11 11C11 10.4 11.4 10 12 10C12.6 10 13 10.4 13 11C13 11.6 12.6 12 12 12Z"
        fill={color}
      />
    </Svg>
  );
};

export default EyeIcon;
