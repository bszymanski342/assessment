import { Tabs } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import ShoppingCart from "@/components/SVG/ShoppinCart";
import HomeIcon from "@/components/SVG/HomeIcon";
import PersonIcon from "@/components/SVG/PersonIcon";
import FavoriteIcon from "@/components/SVG/FavoriteIcon";
import SearchIcon from "@/components/SVG/SearchIcon";
import IconWithDot from "@/components/ui/IconDot";
import { Colors } from "@/constants/Colors"; // Import colors

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.backgroundColor,
          height: 70,
          justifyContent: "center",
          alignItems: "center",
        },

        tabBarItemStyle: {
          paddingTop: 15,
        },
        tabBarActiveTintColor: Colors.activeColor,
        tabBarInactiveTintColor: Colors.inactiveColor,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Products"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconWithDot
              icon={<HomeIcon size={24} color={color} />}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorite"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconWithDot
              icon={<FavoriteIcon size={24} color={color} />}
              focused={focused}
            />
          ),
          tabBarButton: (props: any) => (
            <TouchableOpacity {...props} onPress={() => {}} />
          ),
        }}
      />

      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconWithDot
              icon={<SearchIcon size={24} color={color} />}
              focused={focused}
            />
          ),
          tabBarButton: (props: any) => (
            <TouchableOpacity {...props} onPress={() => {}} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconWithDot
              icon={<ShoppingCart size={24} color={color} />}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="User"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconWithDot
              icon={<PersonIcon size={24} color={color} />}
              focused={focused}
            />
          ),
          tabBarButton: (props: any) => (
            <TouchableOpacity {...props} onPress={() => {}} />
          ),
        }}
      />
    </Tabs>
  );
}
