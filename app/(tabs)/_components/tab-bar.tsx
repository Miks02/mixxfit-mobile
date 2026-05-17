import { Colors } from '@/src/constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'

const TabBar = () => {
    return (
        <View className='flex-row gap-2 w-full p-6 absolute bottom-0'>
        <LinearGradient
        colors={[Colors.yellow[500], Colors.yellow[600]]}
        start={{x: 0, y:0}}
        end={{x:0, y:1}}
        className='flex-row grow justify-between p-5 shadow-xl'
        style={{borderRadius: 24}}>
        <Text>tab</Text>
        <Text>tab</Text>
        <Text>tab</Text>
        <Text>tab</Text>
        <Text>tab</Text>
        <Text>tab</Text>
        </LinearGradient>
        <LinearGradient
    colors={[Colors.yellow[500], Colors.yellow[600]]}
    className='flex-row justify-between p-5 shadow-xl'
    style={{borderRadius: 24}}>
      <Text>tab</Text>
    </LinearGradient>
        </View>
    )
}

export default TabBar
