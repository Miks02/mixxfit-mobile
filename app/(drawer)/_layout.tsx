import { Drawer } from 'expo-router/drawer'
import React from 'react'
import CustomDrawer from './_components/custom-drawer'

const DrawerLayout = () => {
  return (
    <Drawer screenOptions={{headerShown: true}} drawerContent={() =><CustomDrawer></CustomDrawer>}>
        <Drawer.Screen name='(tabs)'></Drawer.Screen>
    </Drawer>
  )
}

export default DrawerLayout
