import WorkoutDetailsScreen from '@/src/features/workouts/screens/workout-details-screen';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

const WorkoutDetails = () => {
    const {id} = useLocalSearchParams<{id: string}>();
    const workoutId = Number(id);

    return (
        <WorkoutDetailsScreen id={workoutId}></WorkoutDetailsScreen>
    )
}

export default WorkoutDetails
