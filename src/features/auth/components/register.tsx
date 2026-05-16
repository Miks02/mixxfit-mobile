import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Pressable, Text, TextInput, View } from 'react-native';
import { getAuthError } from '../../utilities/auth-errors';
import useAuth from '../hooks/use-auth';
import { RegisterFormData, registerSchema } from '../schemas/register-schema';

const Register = ({toggleLogin }: {toggleLogin: () => void}) => {
    const {control, handleSubmit, formState: {errors}} = useForm<RegisterFormData>(
        {resolver: zodResolver(registerSchema), defaultValues: {username: "", email: "", password: "", confirmPassword: ""}, mode: 'onBlur'});
        const {register} = useAuth();

        const onSubmit = async (data: RegisterFormData) => {
            await register.mutateAsync(data);
        }

        return (
            <View className='gap-6 items-center'>
            <View className='gap-4'>
            <Text className='text-4xl text-slate-800 font-bold text-center'>Create your account</Text>
            <Text className='text-center text-slate-800 text-lg'>
            New here ? Create your account to start tracking your fitness journey
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
            name='email'
            render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                placeholder='Email Address'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className={`p-4 bg-slate-200/50 w-full rounded-lg shadow-black  ${errors.email ? 'border border-red-500' : ''}`}/>
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

            </View>
            <View className='w-full items-center gap-2'>

            <Controller
            control={control}
            name='confirmPassword'
            render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                placeholder='Confirm Password'
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className={`p-4 bg-slate-200/50 w-full rounded-lg shadow-black ${errors.confirmPassword ? 'border border-red-500' : ''}`}/>
            )}>

            </Controller>
            {errors.confirmPassword && <Text className="text-red-500">{errors.confirmPassword.message}</Text>}
            {register.isError && <Text className='text-red-500'>{getAuthError(register.error.errorCode)}</Text>}
            </View>

            <Pressable
            onPress={handleSubmit(onSubmit)}
            disabled={register.isPending}
            className={`bg-amber-400 px-6 py-4 w-full rounded-lg shadow-md active:opacity-50 transition duration-200 flex-row items-center justify-center gap-4 ${register.isPending ? 'opacity-70' : 'opacity-100'}`}>
            {register.isPending && <ActivityIndicator></ActivityIndicator>}
            <Text className='text-2xl font-bold text-slate-800 text-center'>Sign Up</Text>
            </Pressable>
            </View>

            <View className='items-center'>
            <Text className='text-lg text-slate-800'>
            Don't have an account ?
            </Text>
            <Pressable
            onPress={toggleLogin}
            className='active:opacity-50 transition duration-200 pb-8'>
            <Text className='text-xl text-amber-600 font-bold'>
            Sign in here
            </Text>
            </Pressable>
            </View>


            </View>
        )
    }

    export default Register
