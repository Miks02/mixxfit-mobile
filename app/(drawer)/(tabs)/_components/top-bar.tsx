import { Colors } from '@/src/constants/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const TopBar = (props: BottomTabHeaderProps) => {
    const insets = useSafeAreaInsets();


    return (
        <LinearGradient
        colors={[Colors.yellow[500], Colors.yellow[600]]}
        className='p-4 grow gap-4'
        style={{paddingTop: insets.top}}
        start={{x: 1, y:0}}
        end={{x: 1, y:0}}>
        <View className='flex-row justify-between  items-center'>
        <Text className='text-4xl font-bold text-slate-800'>{props.options.title}</Text>
        <Pressable className='active:opacity-50 transition duration-200'>
            <FontAwesome5 name="list" size={24} color={Colors.slate[800]}></FontAwesome5>
        </Pressable>
        </View>
        </LinearGradient>
    )
}

export default TopBar
