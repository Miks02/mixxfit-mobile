import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/src/constants/colors'
import { LinearGradient } from 'expo-linear-gradient'

const CustomDrawer = () => {
  return (
    <LinearGradient colors={[Colors.yellow[500], Colors.yellow[600]]}>
      <Text>Drawer</Text>
    </LinearGradient>
  )
}

export default CustomDrawer
