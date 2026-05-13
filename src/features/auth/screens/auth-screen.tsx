import { Colors } from '@/src/constants/colors'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View } from 'react-native'
import Login from '../components/login'

const AuthScreen = () => {
    return (
        <LinearGradient
        colors={[Colors.yellow[600], Colors.yellow[500]]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        className='flex-1'
        >
        <View className='w-full justify-center items-center'>
            <Image
            source={require('@/assets/images/mixxfit-logo.png')}
            style={{width: 400, height: 400}}
            className='justify-center items-center w-500 mx-auto h-500'
            transition={300}
            />
        </View>

        <View className='bg-slate-100 shadow-2xl absolute bottom-0 w-full min-h-[60%] rounded-t-3xl p-8'>
            <Login></Login>
        </View>
        </LinearGradient>
    )
}

export default AuthScreen
