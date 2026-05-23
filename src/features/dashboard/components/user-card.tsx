import { Image } from 'expo-image'
import React from 'react'
import { ImageSourcePropType, Text, View } from 'react-native'

type UserCardProps = {
    displayName: string,
    weight?: number,
    height?: number,
    age?: number,
    imageSource: ImageSourcePropType
}

const UserCard = (props: UserCardProps) => {
    const weightKg = props.weight + " KG"
    const HeightCm = props.height + " CM"

    return (
        <View className='bg-slate-200 rounded-xl shadow-xl gap-6 items-center p-6'>
        <View className='rounded-full border border-slate-400 shadow-2xl'>
        <Image source={props.imageSource} style={{width: 80, height: 80, borderRadius: 100}}/>
        </View>

        <Text className='text-xl text-slate-800 font-semibold'>{props.displayName}</Text>
        <View className='flex-row self-center justify-center gap-6'>
        <View className='w-24 items-center'>
        <Text className='text-xl text-slate-500 font-semibold text-center'>Weight</Text>
        <Text className='text-amber-600 font-semibold text-xl text-center'>{props.weight ? weightKg : "N/A"}</Text>
        </View>
        <View className='w-24 items-center'>
        <Text className='text-xl text-slate-500 font-semibold text-center'>Height</Text>
        <Text className='text-amber-600 font-semibold text-xl text-center'>{props.height ? HeightCm : 'N/A'}</Text>
        </View>
        <View className='w-24 items-center'>
        <Text className='text-xl text-slate-500 font-semibold text-center'>Age</Text>
        <Text className='text-amber-600 font-semibold text-xl text-center'>{props.age ?? 'N/A'}</Text>
        </View>
        </View>
        </View>
    )
}

export default UserCard
