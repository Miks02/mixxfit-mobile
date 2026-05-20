import "@/global.css";
import { Colors } from "@/src/constants/colors";
import { setupInterceptors } from "@/src/core/interceptors/setup";
import { useAuthStore } from "@/src/features/auth/store/auth-store";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient();

setupInterceptors();

const MixxFitTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.slate[300]
    }
}

export default function RootLayout() {
    const hydrate = useAuthStore((state) => state.hydrateUserData)

    useEffect(() => {
        hydrate();
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
        <KeyboardProvider preload={false}>
        <ThemeProvider value={MixxFitTheme}>
            <Stack screenOptions={{ headerShown: false }} />
          </ThemeProvider>
        </KeyboardProvider>
        </SafeAreaProvider>
        </QueryClientProvider>
    )
}
