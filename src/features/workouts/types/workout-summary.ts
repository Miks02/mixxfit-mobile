import { ExerciseType } from "./exercise-type"

export type WorkoutSummary = {
    workoutCount: number,
    exerciseCount: number,
    lastWorkoutDate: string,
    favoriteExerciseType: ExerciseType
}
