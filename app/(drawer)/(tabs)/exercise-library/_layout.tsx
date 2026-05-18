import { Stack } from 'expo-router'
import React from 'react'

const ExerciseLibraryLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index"></Stack.Screen>
    </Stack>
  )
}

export default ExerciseLibraryLayout
