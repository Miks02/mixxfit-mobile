import { Colors } from '@/src/constants/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { Pressable } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

type TabBarProps = {
    icon: string,
    route: string,
    isFocused: boolean,
    onPress: () => void
}

const TabBarButton = (props: TabBarProps) => {
    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    const getButtonColor = () => props.isFocused ? Colors.emerald[700] : Colors.slate[800]
    const animatedStyle = useAnimatedStyle(() => ({transform: [{scale: scale.value}], opacity: opacity.value}))

    const handlePressIn = () => {
        scale.value = withSpring(0.85, { mass: 0.5, damping: 10 });
        opacity.value = withSpring(0.5, {duration: 150});
    }

    const handlePressOut = () => {
        scale.value = withSpring(1, { mass: 0.5, stiffness: 150,damping: 10 });
        opacity.value = withSpring(1, {duration: 150});
    }

    return (
        <Pressable
        onPress={props.onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
            <Animated.View style={animatedStyle} className={`${props.isFocused ? 'bg-slate-200/50' : ''} p-2 rounded-full`}>
                <FontAwesome5 size={22} color={getButtonColor()} name={props.icon}></FontAwesome5>
            </Animated.View>
        </Pressable>
    )
}



export default TabBarButton
