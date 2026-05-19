import { Colors } from '@/src/constants/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

type DrawerLinkProps = {
    name: string,
    icon: string,
    route: string,
    isFocused: boolean,
    onPress: () => void,
    color?: string
}

const DrawerLink = (props: DrawerLinkProps) => {
    const linkColor = props.color ?? Colors.gray[800]
    const positionX = useSharedValue(0);
    const opacity = useSharedValue(1);


    const animationStyle = useAnimatedStyle(() => ({transform: [{translateX: positionX.value}], opacity: opacity.value}));

    const handlePressIn = () => {
        positionX.value = withSpring(20, {duration: 0.2});
        opacity.value = withSpring(0.5, {duration: 0.2});
    }

    const handlePressOut = () => {
        positionX.value = withSpring(0, {duration: 0.2});
        opacity.value = withSpring(1, {duration: 0.2});
    }

    const getLinkColor = () => props.isFocused ? Colors.emerald[700] : linkColor
    return (
        <Pressable onPress={props.onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Animated.View style={animationStyle} className='flex-row gap-2 items-center'>
        <View className='w-8'>
        <FontAwesome5 size={20} color={getLinkColor()} name={props.icon}></FontAwesome5>
        </View>
        <Text style={{color: getLinkColor()}} className='font-semibold text-2xl'>{props.name}</Text>
        </Animated.View>
        </Pressable>
    )
}

export default DrawerLink
