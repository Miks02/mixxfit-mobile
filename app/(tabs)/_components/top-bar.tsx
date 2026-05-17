import { Colors } from '@/src/constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const TopBar = () => {
    const insets = useSafeAreaInsets();


    return (
        <LinearGradient
        colors={[Colors.yellow[500], Colors.yellow[600]]}
        className='p-4 grow gap-4'
        style={{paddingTop: insets.top}}
        start={{x: 1, y:0}}
        end={{x: 1, y:0}}>
        <View className='flex-row justify-center  items-center'>
        <Text className='text-4xl font-bold' style={{color: '#eee'}}>Dashboard</Text>
        </View>
        </LinearGradient>
    )
}

export default TopBar
