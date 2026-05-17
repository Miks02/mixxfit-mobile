import { useAuthStore } from '@/src/features/auth/store/auth-store';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import TabBar from './_components/tab-bar';
import TopBar from './_components/top-bar';

const TabLayout = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    if(!isAuthenticated)
        return <Redirect href="/(auth)"></Redirect>

    return (
        <Tabs
        screenOptions={{
            header: () => <TopBar></TopBar>,}}
            tabBar={(props) => (<TabBar state={props.state} descriptors={props.descriptors} navigation={props.navigation} insets={props.insets}></TabBar>)}>
        <Tabs.Screen name='dashboard' options={{title: 'Dashboard'}}></Tabs.Screen>
        <Tabs.Screen name='workouts' options={{title: 'Workouts'}}></Tabs.Screen>
        <Tabs.Screen name='weight-tracking' options={{title: 'Weight Tracking'}}></Tabs.Screen>
        <Tabs.Screen name='exercise-library' options={{title: 'Weight Tracking'}}></Tabs.Screen>
        <Tabs.Screen name='profile' options={{title: 'Profile'}}></Tabs.Screen>
        </Tabs>
    )
}

export default TabLayout
