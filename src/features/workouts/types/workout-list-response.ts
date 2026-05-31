import { WorkoutListItem } from "./workout-list-item"

export type WorkoutListResponse = {
    year: number | null,
    month: number | null,
    availableYears: number[],
    availableMonths: number[],
    workouts: WorkoutListItem[]
}
