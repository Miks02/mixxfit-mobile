import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Pressable, Text, TextInput, View } from 'react-native';
import { getAuthError } from '../../utilities/auth-errors';
import useAuth from '../hooks/use-auth';
import { LoginFormData, loginSchema } from '../schemas/login-schema';

const Login = ({toggleRegister}: {toggleRegister: () => void}) => {
    const {control, handleSubmit, formState: { errors }} = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {email: "", password: ""}
    })

    const { login } = useAuth();

    const onSubmit = async (data: LoginFormData) => await login.mutateAsync(data);

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
        name='email'
        render={({field: {onChange, onBlur, value}}) => (
            <TextInput
            placeholder='Email address'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType='email-address'
            className={`p-4 bg-slate-200/50 w-full rounded-lg shadow-black ${errors.email ? 'border border-red-500' : ''}`}/>
        )}>

        </Controller>
        {errors.email && <Text className="text-red-500">{errors.email.message}</Text>}

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
        {login.isError && <Text className='text-lg text-red-500'>{getAuthError(login.error.errorCode)}</Text>}
        <Text></Text>
        </View>

        <Pressable
        onPress={handleSubmit(onSubmit)}
        disabled={login.isPending}
        className={`bg-amber-400 px-6 py-4 w-full rounded-lg shadow-md active:opacity-50 transition duration-200 flex-row items-center justify-center gap-4 ${login.isPending ? 'opacity-70' : 'opacity-100'}`}>
        {login.isPending && <ActivityIndicator></ActivityIndicator>}
        <Text className='text-2xl font-bold text-slate-800 text-center'>Sign In</Text>
        </Pressable>
        </View>

        <View className='items-center'>
        <Text className='text-lg text-slate-800'>
        Don't have an account ?
        </Text>
        <Pressable
        onPress={toggleRegister}
        className='active:opacity-50 transition duration-200 '>
        <Text className='text-xl text-amber-600 font-bold'>
        Register here
        </Text>
        </Pressable>
        </View>

        </View>
    )
}

export default Login
