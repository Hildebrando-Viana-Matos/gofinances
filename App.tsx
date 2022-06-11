import React from "react";

import AppLoading from "expo-app-loading";

import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./src/routes/app.routes";

// Fonts
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  // If fonts it's loading, the user will stay on Splash Screen
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
