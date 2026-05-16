import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Redirect } from 'expo-router'
import { useAuthStore } from '@/src/features/auth/store/auth-store'

const TabLayout = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    if(!isAuthenticated)
        return <Redirect href="/(auth)"></Redirect>

    return (
        <Tabs screenOptions={{headerShown: true}}>
        <Tabs.Screen name='dashboard' options={{title: 'Dashboard'}}></Tabs.Screen>
        </Tabs>
    )
}

export default TabLayout
