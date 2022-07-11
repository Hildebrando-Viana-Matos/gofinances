import React from "react";

import { StatusBar } from "react-native";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import AppLoading from "expo-app-loading";

import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

import { Routes } from "./src/routes";

import { AuthProvider, useAuth } from "./src/hooks/auth";

// Fonts
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { SignIn } from "./src/screens/SignIn";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const { userStorageLoading } = useAuth();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  // If fonts it's loading, the user will stay on Splash Screen
  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
