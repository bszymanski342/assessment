import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { useColorScheme } from "@/hooks/useColorScheme";
import { CartProvider } from "@/context/CartContext";
import { FilterProvider } from "@/context/FilterContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    GaramondProBoldItalic: require("../assets/fonts/AGaramondPro-SemiboldItalic.otf"),
    Avenir: require("../assets/fonts/Avenir-Medium.ttf"),
    GaramondPro: require("../assets/fonts/AGaramondPro-Regular.otf"),
    GaramondProItalic: require("../assets/fonts/AGaramondPro-Italic.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <CartProvider>
      <FilterProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </FilterProvider>
    </CartProvider>
  );
}
