// components/CustomBar.tsx
import React from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);

interface CustomBarProps {
  color?: string;
  height?: string;
  width?: string;
}

const CustomBar: React.FC<CustomBarProps> = ({
  color = 'bg-pantryGreen',
  height = 'h-8',
  width = 'w-full',
}) => {
  return <StyledView className={`${color} ${height} ${width}`} />;
};

export default CustomBar;
