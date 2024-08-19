import "@/app/screens/styles/blinksStyles.css";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="(tabs)"
            options={{
              drawerIcon: ({ color }) => (
                <ThemedText style={{ color: color }}>👋</ThemedText>
              ),
              headerStyle: {
                backgroundColor: Colors?.light?.primaryColor,
                shadowColor: Colors?.light?.background,
              },
              headerTitleStyle: {
                color: Colors?.light?.primaryTxtColor,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
              },
              drawerLabelStyle: {
                color: Colors?.light?.tabIconDefault,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              },
              drawerLabel: "Quack",
              title: "Quack",
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
