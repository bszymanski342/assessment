import React from "react";
import Svg, { Path } from "react-native-svg";

const BackArrow = ({ color = "#54634B", size = 20, flip = false, style = {} }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: flip ? [{ scaleX: -1 }] : undefined,
        ...style,
      }}
    >
      <Path
        d="M9.40831 9.99998L12.3583 7.04998C12.5135 6.89384 12.6006 6.68263 12.6006 6.46248C12.6006 6.24232 12.5135 6.03111 12.3583 5.87498C12.2808 5.79687 12.1887 5.73488 12.0871 5.69257C11.9856 5.65026 11.8766 5.62848 11.7666 5.62848C11.6566 5.62848 11.5477 5.65026 11.4462 5.69257C11.3446 5.73488 11.2524 5.79687 11.175 5.87498L7.64164 9.40831C7.56353 9.48578 7.50154 9.57795 7.45923 9.6795C7.41692 9.78105 7.39514 9.88997 7.39514 9.99998C7.39514 10.11 7.41692 10.2189 7.45923 10.3205C7.50154 10.422 7.56353 10.5142 7.64164 10.5916L11.175 14.1666C11.2528 14.2439 11.3452 14.305 11.4467 14.3465C11.5482 14.3879 11.657 14.4089 11.7666 14.4083C11.8763 14.4089 11.985 14.3879 12.0866 14.3465C12.1881 14.305 12.2804 14.2439 12.3583 14.1666C12.5135 14.0105 12.6006 13.7993 12.6006 13.5791C12.6006 13.359 12.5135 13.1478 12.3583 12.9916L9.40831 9.99998Z"
        fill={color}
      />
    </Svg>
  );
};

export default BackArrow;
