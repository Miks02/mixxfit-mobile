import { Colors } from '@/src/constants/colors'
import useUser from '@/src/core/hooks/use-user'
import React, { useState } from 'react'
import { ActivityIndicator, RefreshControl, ScrollView, Text, View } from 'react-native'
import DashboardCard from '../components/dashboard-card'
import RecentWorkoutsCard from '../components/recent-workouts-card'
import UserCard from '../components/user-card'
import useDashboard from '../hooks/use-dashboard'

const DashboardScreen = () => {
    const { user, displayName, avatar } = useUser();
    const {isLoading, isError, isRefetching , data, refetchAll} = useDashboard();
    const [isRecentWorkoutsScrolling, setIsRecentWorkoutsScrolling] = useState(false);

    if(isLoading) {
        return (
            <View className='grow justify-center'>
            <ActivityIndicator size={120} color={Colors.yellow[500]}></ActivityIndicator>
            </View>
        )
    }

    if(isError) {
        return <Text className='text-3xl text-red-700 font-semibold'>An unspecified error has occurred. Please try again later...</Text>
    }

    const getWorkoutStreakMessage = (streak: number) => {

        if(!streak || streak === 0)
            return `Not on a streak`;
        if(streak === 1)
            return `${streak} Day - Keep it going!`;
        if(streak >= 2 && streak < 5)
            return `${streak} Days - Well done!`;
        if(streak >= 5)
            return `${streak} Days - Outstanding!`;

        return "N/A"
    }

    return (
        <ScrollView
        scrollEnabled={!isRecentWorkoutsScrolling}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 12, gap: 12, paddingBottom: 90}}
        refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetchAll} progressBackgroundColor={Colors.yellow[500]}/>
        }>
        <View className='flex-row gap-4 flex-wrap'>
        <DashboardCard
        title={'Daily Calories'}
        value={user?.dailyCalorieGoal?.toString()!}
        color={Colors.amber[500]}
        icon={'fire'}/>
        <DashboardCard
        title={'Last Workout'}
        value={data?.lastWorkoutDate!}
        color={Colors.emerald[500]}
        icon={'dumbbell'}/>
        <DashboardCard
        title={'Workout Streak'}
        value={getWorkoutStreakMessage(data?.workoutStreak!)}
        color={Colors.sky[500]}
        icon={'bolt'}/>
        </View>

        <UserCard
        imageSource={avatar()}
        displayName={displayName!}
        weight={user?.currentWeight!}
        height={user?.height!}
        age={user?.age!}
        />

       <RecentWorkoutsCard
       onScrollStateChange={setIsRecentWorkoutsScrolling}
       workouts={data?.recentWorkouts!}
       />
        </ScrollView>
    )
}

export default DashboardScreen
