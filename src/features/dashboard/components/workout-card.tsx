import React from 'react'
import { Text, View } from 'react-native'

type WorkoutCardProps = {
    title: string,
    date: string,
    exerciseCount: number
}

const WorkoutCard = ({title, date, exerciseCount}: WorkoutCardProps) => {

    return (
        <View className='bg-slate-100 p-4 w-full rounded-xl shadow-lg active:bg-amber-400'>
        <View className='flex-row justify-between w-full'>
        <View className='gap-2'>
        <Text className='text-xl font-semibold text-slate-800'>{title}</Text>
        <Text className='text-xl font-semibold text-emerald-700'>{date}</Text>
        </View>
        <Text className='text-amber-600 font-semibold self-center'>{exerciseCount} {exerciseCount > 1 ? 'exercises' : 'exercise'}</Text>
        </View>
        </View>
    )
}

export default WorkoutCard
