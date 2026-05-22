import { RecentWorkout } from "./recent-workout"

export type DashboardDto = {
    lastWorkoutDate: string,
    dailyCalories: string,
    recentWorkouts: RecentWorkout[],
    workoutStreak: number
}
