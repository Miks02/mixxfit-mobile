import { Drawer } from 'expo-router/drawer'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import CustomDrawer from './_components/custom-drawer'

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView>
        <Drawer screenOptions={{headerShown: false}} drawerContent={(props) =><CustomDrawer {...props} ></CustomDrawer>}>
        <Drawer.Screen name='(tabs)'></Drawer.Screen>
        </Drawer>
        </GestureHandlerRootView>
    )
}

export default DrawerLayout;
