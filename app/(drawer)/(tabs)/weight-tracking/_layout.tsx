import { Stack } from 'expo-router'
import React from 'react'

const WeightTrackingLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name='index'></Stack.Screen>
    </Stack>
  )
}

export default WeightTrackingLayout
