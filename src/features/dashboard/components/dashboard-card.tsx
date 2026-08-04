import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

type DashboardCardProps = {
    title: string,
    value?: string | number,
    color: string,
    icon: string
}

const DashboardCard = ({title, value, color, icon}: DashboardCardProps) => {
    return (
        <View style={{backgroundColor: color}} className='grow rounded-xl gap-6 shadow-xl p-4'>
        <View className='flex-row gap-2 items-center'>
        <FontAwesome5 name={icon} size={20} color={'white'}></FontAwesome5>
        <Text className='text-gray-100 font-semibold text-lg'>{title}</Text>
        </View>
        <Text className='text-gray-100 font-semibold'>{value ?? 'No Data Yet...'}</Text>
        </View>
    )
}

export default DashboardCard
