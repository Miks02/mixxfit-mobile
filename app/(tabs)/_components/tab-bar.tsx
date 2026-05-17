import { Colors } from '@/src/constants/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Pressable, View } from 'react-native'

const links = [
    {
        icon: "chart-bar",
        route: 'dashboard'
    },
    {
        icon: "dumbbell",
        route: 'workouts'
    },
    {
        icon: "weight",
        route: 'weight-tracking'
    },
    {
        icon: "book-open",
        route: 'exercise-library'
    },
    {
        icon: "user",
        route: 'profile'
    },
    {
        icon: "plus",
        route: 'workout-form'
    },
]

const linkColor = (linkIndex: number, stateIndex: number) => linkIndex === stateIndex ? Colors.emerald[700]  : Colors.slate[800];
const isActiveLink = (linkIndex: number, stateIndex: number) => linkIndex === stateIndex;

const TabBar = ({navigation, state, descriptors}: BottomTabBarProps) => {
    return (
        <View className='flex-row gap-2 w-full p-6 absolute bottom-0'>
        <View className='flex-row grow gap-2' style={{borderRadius: 24}}>
            <LinearGradient
        colors={[Colors.yellow[500], Colors.yellow[600]]}
        start={{x: 0, y:0}}
        end={{x:0, y:1}}
        className='flex-row grow justify-between p-5 shadow-2xl'
        style={{borderRadius: 24}}>

        {links.map((l, index) => (

            l.route !== "workout-form" &&
            <Pressable
            key={l.route}
            onPress={() => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: l.route,
                    canPreventDefault: true
                })
                if(!isActiveLink(index, state.index) && !event.defaultPrevented)
                    navigation.navigate(l.route)
                else
                    navigation.navigate(l.route, {screen: 'index'})
            }}
            className={`active:opacity-50 transition duration-200`}>
                <FontAwesome5 color={linkColor(index, state.index)} size={24} name={l.icon}></FontAwesome5>
            </Pressable>
        ))}

        </LinearGradient>
        <Pressable onPress={() => navigation.navigate('workouts', {screen: 'workout-form'})} className='active:opacity-50 transition duration-200 shadow-2xl'>
            <LinearGradient
        colors={[Colors.yellow[400], Colors.yellow[500]]}
        className='flex-row justify-between p-5 shadow-xl '
        style={{borderRadius: 100}}>
                <FontAwesome5 color={Colors.slate[800]} size={24} name={"plus"}></FontAwesome5>
        </LinearGradient>
        </Pressable>

        </View>
        </View>
    )
}

export default TabBar
