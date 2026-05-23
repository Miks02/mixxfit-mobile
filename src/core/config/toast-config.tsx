// src/core/config/toast-config.tsx
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { BaseToastProps } from 'react-native-toast-message';

export const toastConfig = {
    success: ({ text1, text2 }: BaseToastProps) => (
        <View
        style={{shadowColor: 'black'}}
        className="w-[90%] bg-emerald-500 p-4 rounded-2xl flex-row items-center gap-3 shadow-2xl">
        <FontAwesome5 name="check-circle" size={24} color="white" />
        <View className="flex-1">
        <Text className="text-white font-bold text-xl">{text1}</Text>
        {text2 && <Text className="text-white font-semibold text-lg  mt-0.5">{text2}</Text>}
        </View>
        </View>
    ),

    error: ({ text1, text2 }: BaseToastProps) => (
        <View
        style={{shadowColor: 'black'}}
        className="w-[90%] bg-red-500 p-4 rounded-2xl flex-row items-center gap-3 shadow-2xl">
        <FontAwesome5 name="exclamation-circle" size={24} color="white" />
        <View className="flex-1">
        <Text className="text-white font-bold text-xl">{text1}</Text>
        {text2 && <Text className="text-white font-semibold text-lg  mt-0.5">{text2}</Text>}
        </View>
        </View>
    ),

    warning: ({ text1, text2 }: BaseToastProps) => (
        <View
        style={{shadowColor: 'black'}}
        className="w-[90%] bg-amber-600 p-4 rounded-2xl flex-row items-center gap-3 shadow-2xl">
        <FontAwesome5 name="exclamation-triangle" size={24} color="white" />
        <View className="flex-1">
        <Text className="text-white font-bold text-xl">{text1}</Text>
        {text2 && <Text className="text-white font-semibold text-lg  mt-0.5">{text2}</Text>}
        </View>
        </View>
    ),

    info: ({text1, text2}: BaseToastProps) => (
        <View
        style={{shadowColor: 'black'}}
        className="w-[90%] bg-sky-500 p-4 rounded-2xl flex-row items-center gap-3 shadow-2xl">
        <FontAwesome5 name="info-circle" size={24} color="white" />
        <View className="flex-1">
        <Text className="text-white font-bold text-xl">{text1}</Text>
        {text2 && <Text className="text-white font-semibold text-lg  mt-0.5">{text2}</Text>}
        </View>
        </View>
    )
};
