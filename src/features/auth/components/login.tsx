import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, Text, TextInput, View } from 'react-native';
import { LoginFormData, loginSchema } from '../schemas/login-schema';

const Login = () => {

    const {control, handleSubmit, formState: { errors }} = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {username: "", password: ""}
    })

    const onSubmit = (data: any) => {
        alert("Login successful: " + JSON.stringify(data));
    }

    return (
        <View className='gap-6 items-center'>
        <View className='gap-4'>
        <Text className='text-5xl text-slate-800 font-bold text-center'>Welcome!</Text>
        <Text className='text-center text-slate-800 text-lg'>
        Access your workout history, set new goals, and take your fitness journey to the next level.
        </Text>
        </View>

        <View className='gap-4 w-full items-center'>

        <View className='w-full items-center gap-2'>
        <Controller
        control={control}
        name='username'
        render={({field: {onChange, onBlur, value}}) => (
            <TextInput
            placeholder='Username'

            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className={`p-4 bg-slate-200/50 w-full rounded-lg shadow-black ${errors.username ? 'border border-red-500' : ''}`}/>
        )}>

        </Controller>
        {errors.username && <Text className="text-red-500">{errors.username.message}</Text>}

        </View>
        <View className='w-full items-center gap-2'>

        <Controller
        control={control}
        name='password'
        render={({field: {onChange, onBlur, value}}) => (
            <TextInput
            placeholder='Password'
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className={`p-4 bg-slate-200/50 w-full rounded-lg shadow-black ${errors.password ? 'border border-red-500' : ''}`}/>
        )}>

        </Controller>
        {errors.password && <Text className="text-red-500">{errors.password.message}</Text>}
        </View>

        <Pressable
        onPress={handleSubmit(onSubmit)}
        className='bg-amber-400 px-6 py-4 w-full rounded-lg shadow-md active:opacity-50 transition duration-200'>
        <Text className='text-2xl font-bold text-slate-800 text-center'>Sign In</Text>
        </Pressable>
        </View>

        <View className='items-center'>
        <Text className='text-lg text-slate-800'>
        Don't have an account ?
        </Text>
        <Pressable className='active:opacity-50 transition duration-200'>
            <Text className='text-xl text-amber-600 font-bold'>
        Register here
        </Text>
        </Pressable>
        </View>


        </View>
    )
}

export default Login
