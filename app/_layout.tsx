import "@/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient();

export default function RootLayout() {


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
