import { Colors } from '@/src/constants/colors'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Platform, View } from 'react-native'
import { KeyboardAvoidingView } from 'react-native-keyboard-controller'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Login from '../components/login'
import Register from '../components/register'

const AuthScreen = () => {
    const insets = useSafeAreaInsets();

    const [isRegister, setIsRegister] = useState(false);

    const setLogin = () => setIsRegister(false);
    const setRegister = () => setIsRegister(true);

    return (
        <LinearGradient
        colors={[Colors.yellow[600], Colors.yellow[500]]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={[{paddingTop: insets.top, flex: 1}]}
        >
        <View className='flex-1'>
            <View className='w-full justify-center items-center'>
            <Image
            source={require('@/assets/images/mixxfit-logo.png')}
            style={{width: 315, height: 315}}
            className='mx-auto'
            transition={300}
            />
        </View>

        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
        keyboardVerticalOffset={5}
        className='bg-slate-100 shadow-2xl absolute bottom-0 w-full min-h-[60%] max-h-[100%] rounded-t-3xl p-8'>
            {isRegister ? <Register toggleLogin={setLogin}/> : <Login toggleRegister={setRegister}/>}
        </KeyboardAvoidingView>
        </View>
        </LinearGradient>
    )
}

export default AuthScreen
