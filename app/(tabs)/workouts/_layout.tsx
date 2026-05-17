import { Stack } from 'expo-router'
import React from 'react'

const WorkoutsLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name='index'></Stack.Screen>
        <Stack.Screen name='workout-form'></Stack.Screen>
    </Stack>
  )
}

export default WorkoutsLayout
