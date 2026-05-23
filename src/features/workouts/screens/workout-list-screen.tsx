import { Colors } from '@/src/constants/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import WorkoutCard from '../components/workout-card'
import { WorkoutListItem } from '../types/workout-list-item'



const workouts: WorkoutListItem[] = [
  { id: 1, name: 'Push Strength A', workoutDate: '02 May 2026', exerciseCount: 6, setCount: 21, hasCardio: true, hasWeights: true, hasBodyWeight: true },
  { id: 2, name: 'Lower Body Power', workoutDate: '04 May 2026', exerciseCount: 7, setCount: 24, hasCardio: false, hasWeights: false, hasBodyWeight: true},
  { id: 3, name: 'Pull Hypertrophy', workoutDate: '05 May 2026', exerciseCount: 5, setCount: 18, hasCardio: true, hasWeights: false, hasBodyWeight: true },
  { id: 4, name: 'Core and Mobility', workoutDate: '07 May 2026', exerciseCount: 8, setCount: 20, hasCardio: true, hasWeights: true, hasBodyWeight: true },
  { id: 5, name: 'Upper Body Volume', workoutDate: '09 May 2026', exerciseCount: 7, setCount: 23, hasCardio: false, hasWeights: true, hasBodyWeight: false },
  { id: 6, name: 'Leg Day Heavy', workoutDate: '11 May 2026', exerciseCount: 6, setCount: 22, hasCardio: true, hasWeights: true, hasBodyWeight: true },
  { id: 7, name: 'Conditioning Circuit', workoutDate: '13 May 2026', exerciseCount: 9, setCount: 27, hasCardio: true, hasWeights: true, hasBodyWeight: true },
  { id: 8, name: 'Push Strength B', workoutDate: '15 May 2026', exerciseCount: 6, setCount: 21, hasCardio: false, hasWeights: false, hasBodyWeight: true },
  { id: 9, name: 'Back and Biceps', workoutDate: '17 May 2026', exerciseCount: 7, setCount: 24, hasCardio: true, hasWeights: true, hasBodyWeight: true },
  { id: 10, name: 'Glutes and Hamstrings', workoutDate: '19 May 2026', exerciseCount: 6, setCount: 20, hasCardio: true, hasWeights: true, hasBodyWeight: true },
  { id: 11, name: 'Athletic Full Body', workoutDate: '22 May 2026', exerciseCount: 8, setCount: 26, hasCardio: true, hasWeights: true, hasBodyWeight: true },
  { id: 12, name: 'Chest Focus Session', workoutDate: '24 May 2026', exerciseCount: 5, setCount: 17, hasCardio: true, hasWeights: true, hasBodyWeight: true },
  { id: 13, name: 'Shoulders and Core', workoutDate: '27 May 2026', exerciseCount: 7, setCount: 22, hasCardio: true, hasWeights: true, hasBodyWeight: true },
  { id: 14, name: 'May Peak Finisher', workoutDate: '30 May 2026', exerciseCount: 10, setCount: 30, hasCardio: true, hasWeights: true, hasBodyWeight: true },
]

const WorkoutListScreen = () => {
  return (
    <ScrollView
      className='px-3 pt-3'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 96 }}>
      <View className='bg-slate-200 rounded-2xl shadow-xl p-4 gap-4'>
        <View className='flex-row items-start justify-between'>
          <View className='gap-1'>
            <Text className='text-slate-800 text-3xl font-bold'>May 2026</Text>
            <Text className='text-slate-600 text-base font-semibold'>{workouts.length} workouts logged</Text>
          </View>
          <View className='flex-row items-center gap-2'>
            <Pressable className='w-11 h-11 rounded-xl bg-slate-100 items-center justify-center active:opacity-70'>
              <FontAwesome5 name='filter' size={17} color={Colors.slate[700]}></FontAwesome5>
            </Pressable>
            <Pressable className='w-11 h-11 rounded-xl bg-slate-100 items-center justify-center active:opacity-70'>
              <FontAwesome5 name='sort-amount-down' size={17} color={Colors.slate[700]}></FontAwesome5>
            </Pressable>
          </View>
        </View>

        <View className='gap-3'>
          {workouts.map((item) => {
            return (
              <WorkoutCard key={item.id} data={item} onPress={() => {}} ></WorkoutCard>
            )
          })}
        </View>
      </View>
    </ScrollView>
  )
}

export default WorkoutListScreen
