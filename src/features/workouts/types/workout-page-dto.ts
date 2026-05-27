import { WorkoutListItem } from "./workout-list-item"
import { WorkoutSummary } from "./workout-summary"

export type WorkoutPageDto = {
  year: number | null,
  month: number | null,
  availableYears: number[],
  availableMonths: number[]
  workouts: WorkoutListItem[],
  workoutSummary: WorkoutSummary
}