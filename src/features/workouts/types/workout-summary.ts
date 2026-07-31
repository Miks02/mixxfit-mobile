import { ExerciseType } from "./exercise-type"
import { MostActiveMonth } from "./most-active-month"

export type WorkoutSummary = {
    workoutCount: number,
    exerciseCount: number,
    lastWorkoutDate: string,
    favoriteExerciseType: ExerciseType,
    workoutStreak: number,
    mostActiveMonths: MostActiveMonth[]
}
