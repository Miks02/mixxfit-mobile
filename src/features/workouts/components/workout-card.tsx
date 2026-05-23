import { Colors } from '@/src/constants/colors'
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { WorkoutListItem } from '../types/workout-list-item'

type WorkoutCardProps = {
    data: WorkoutListItem,
    onPress: () => void
}

const WorkoutCard = (props: WorkoutCardProps) => {
    return (
        <Pressable
        className='rounded-xl p-4 bg-slate-100 border border-slate-300/90 shadow-md active:opacity-80'>
        <View className='flex-row items-start justify-between gap-3'>
        <View className='grow gap-2'>
        <View className='flex-row items-center gap-2'>
        <FontAwesome5 name='dumbbell' size={16} color={Colors.emerald[700]}></FontAwesome5>
        <Text className='text-slate-800 text-xl font-bold flex-shrink'>{props.data.name}</Text>
        </View>
        <View className='flex-row items-center gap-2'>
        <FontAwesome5 name='calendar-alt' size={14} color={Colors.slate[600]}></FontAwesome5>
        <Text className='text-slate-600 text-base font-semibold'>{props.data.workoutDate}</Text>
        </View>
        <View className='flex-row gap-3'>
        {props.data.hasWeights && <FontAwesome5 name='dumbbell' color={Colors.amber[500]} size={18}></FontAwesome5>}
        {props.data.hasCardio && <FontAwesome5 name='running' color={Colors.danger[600]} size={18}></FontAwesome5>}
        {props.data.hasBodyWeight && <FontAwesome6 name='child-reaching' color={Colors.sky[600]} size={18}></FontAwesome6>}
        </View>
        </View>

        <View className='items-end gap-2'>
        <View className='flex-row items-center gap-2 px-3 py-2 rounded-lg bg-amber-100'>
        <FontAwesome5 name='list-ol' size={12} color={Colors.amber[700]}></FontAwesome5>
        <Text className='text-amber-800 text-sm font-bold'>{props.data.exerciseCount} exercises</Text>
        </View>
        <View className='flex-row items-center gap-2 px-3 py-2 rounded-lg bg-sky-100'>
        <FontAwesome5 name='layer-group' size={12} color={Colors.sky[700]}></FontAwesome5>
        <Text className='text-sky-800 text-sm font-bold'>{props.data.setCount} sets</Text>
        </View>
        </View>

        </View>

        </Pressable>
    )
}

export default WorkoutCard
