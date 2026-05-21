import React from 'react'
import { Text, View } from 'react-native'

const UserCard = () => {
  return (
    <View className='bg-slate-200 rounded-xl shadow-2xl gap-6 items-center p-6'>
        <View className='rounded-full w-24 h-24 bg-sky-200'>
            <Text className='self-center my-auto text-4xl font-bold text-emerald-600'>MN</Text>
        </View>

        <Text className='text-xl text-slate-800 font-semibold'>Milan Nikolic</Text>
      <View className='flex-row gap-12'>
            <View className='items-center'>
                <Text className='text-xl text-slate-500 font-semibold'>Weight</Text>
                <Text className='text-amber-600 font-semibold text-xl'>92 kg</Text>
            </View>
            <View className='items-center'>
                <Text className='text-xl text-slate-500 font-semibold'>Height</Text>
                <Text className='text-amber-600 font-semibold text-xl'>172</Text>
            </View>
            <View className='items-center'>
                <Text className='text-xl text-slate-500 font-semibold'>Age</Text>
                <Text className='text-amber-600 font-semibold text-xl'>23</Text>
            </View>
      </View>
    </View>
  )
}

export default UserCard
