import { Colors } from '@/src/constants/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useNavigation } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const TopBar = (props: BottomTabHeaderProps) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<DrawerNavigationProp<any>>();

    return (
        <View className='p-4' style={{paddingTop: insets.top, backgroundColor: Colors.yellow[500]} }>
            <View className='flex-row justify-between  items-center'>
        <Text className='text-4xl font-bold text-slate-800'>{props.options.title}</Text>
        <Pressable className='active:opacity-50 transition duration-200' onPress={() => navigation.openDrawer()}>
            <FontAwesome5 name="list" size={24} color={Colors.slate[800]}></FontAwesome5>
        </Pressable>
        </View>
        </View>
    )
}

export default TopBar
