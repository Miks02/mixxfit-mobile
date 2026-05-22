import { Colors } from '@/src/constants/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
import { RecentWorkout } from '../models/recent-workout'
import WorkoutCard from './workout-card'

type RecentWorkoutsCardProps = {
    workouts: RecentWorkout[]
}

const RecentWorkoutsCard = ({workouts}: RecentWorkoutsCardProps) => {
    return (
        <View className='bg-slate-200 rounded-xl p-4 shadow-xl'>

        {
            workouts.length === 0
            ? (<View className='w-full border border-slate-400 p-6 gap-1 items-center rounded-md'>
                <FontAwesome5 name={'dumbbell'} size={32} color={Colors.slate[600]}></FontAwesome5>
                <Text className='text-2xl font-semibold text-slate-800'>No Workouts Found</Text>
                <Text className='text-lg font-semibold text-slate-700/80 text-center'>Your recent workouts will appear here after you start tracking them</Text>
                </View>)
                : (
                    <View className='gap-4 p-4 overflow-y-scroll'>
                    {
                        workouts.map((item: any) => {
                            return (
                                <WorkoutCard
                                key={item.id}
                                title={item.name}
                                date={item.workoutDate}
                                exerciseCount={item.exerciseCount}/>
                            )
                        })
                    }
                    </View>
                )

            }


            </View>
        )
    }

    export default RecentWorkoutsCard
