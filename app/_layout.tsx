import "@/global.css";
import { setupInterceptors } from "@/src/core/interceptors/setup";
import { useAuthStore } from "@/src/features/auth/store/auth-store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient();

export default function RootLayout() {
    const hydrate = useAuthStore((state) => state.hydrateUserData)

    useEffect(() => {
        hydrate();
        setupInterceptors();
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
        <KeyboardProvider preload={false}>
        <Stack screenOptions={{headerShown: false}}>
        </Stack>
        </KeyboardProvider>
        </SafeAreaProvider>
        </QueryClientProvider>
    )
}
