import { ExerciseEntry } from "./exercise-entry"

export type WorkoutDetails = {
    id: number,
    name: string,
    notes?: string,
    workoutDate: string,
    createdAt: string,
    exercises: ExerciseEntry[]
}
