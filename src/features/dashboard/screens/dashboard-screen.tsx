import { Colors } from '@/src/constants/colors'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import DashboardCard from '../components/dashboard-card'
import UserCard from '../components/user-card'
import WorkoutCard from '../components/workout-card'

const workoutList = [
    { id: 1, title: "Upper strength", date: "24.12.2025", exerciseCount: 3 },
    { id: 2, title: "Lower strength", date: "24.12.2025", exerciseCount: 1 },
    { id: 3, title: "Upper Hypertrophy", date: "24.12.2025", exerciseCount: 3 },
    { id: 4, title: "Upper strength", date: "24.12.2025", exerciseCount: 1 },
    { id: 5, title: "Lower strength", date: "24.12.2025", exerciseCount: 3 },

]

const DashboardScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 12, gap: 12}}>
        <View className='flex-row gap-4 flex-wrap'>
        <DashboardCard
        title={'Daily Calories'}
        value={'2567'}
        color={Colors.amber[500]}
        icon={'fire'}></DashboardCard>
        <DashboardCard
        title={'Last Workout'}
        value={'5.20.2026'}
        color={Colors.emerald[500]}
        icon={'dumbbell'}></DashboardCard>
        <DashboardCard
        title={'Workout Streak'}
        value={'10 Days - Well Done!'}
        color={Colors.sky[500]}
        icon={'bolt'}></DashboardCard>
        </View>

        <UserCard></UserCard>

        <View className='bg-slate-200  rounded-xl'>
        <Text className='text-2xl text-center mt-2  font-bold text-slate-700 '>Recent Workouts</Text>

        <View className='gap-4 p-4'>
        {
            workoutList.map((item) => {
                return (
                    <WorkoutCard
                    key={item.id}
                    title={item.title}
                    date={item.date}
                    exerciseCount={item.exerciseCount}/>
                )
            })
        }
        </View>

        </View>
        </ScrollView>
    )
}

export default DashboardScreen
