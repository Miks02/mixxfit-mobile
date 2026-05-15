import "@/global.css"
import { useAuthStore } from "@/src/features/auth/store/auth-store";
import { Redirect, Stack } from 'expo-router'
import React from 'react'

const AuthLayout = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    if(isAuthenticated)
        return <Redirect href="/(tabs)/dashboard"></Redirect>

    return (
        <Stack screenOptions={{headerShown: false}}></Stack>
    )
}

export default AuthLayout
