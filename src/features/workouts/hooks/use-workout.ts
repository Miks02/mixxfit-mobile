import { api } from "@/src/constants/api";
import { useQuery } from "@tanstack/react-query";
import { useWorkoutParamsStore } from "../store/workout-store";
import { WorkoutListItem } from "../types/workout-list-item";
import { WorkoutPageDto } from "../types/workout-page-dto";
import { format } from "date-fns";
import { WorkoutListResponse } from "../types/workout-list-response";

const getWorkoutPage = async (
  sort?: string,
  search?: string,
  year?: number,
  month?: number,
): Promise<WorkoutPageDto> => {
  const { actions } = useWorkoutParamsStore.getState();
  const params = { sort, search, year, month };

  const { data } = await api.get("/workouts/overview", { params: params });
  actions.initWorkoutParams(data?.availableYears[0], data?.availableMonths[0]);

  return data;
};

const getWorkouts = async (
  sort?: string,
  search?: string,
  year?: number,
  month?: number,
): Promise<WorkoutListResponse> => {
  const params = { sort, search, year, month };
  const { data } = await api.get("/workouts", { params: params });
  return data;
};

export default function useWorkout() {
  const { year, month, search, sort } = useWorkoutParamsStore.getState();

  const summaryQuery = useQuery({
    queryKey: ["workouts-page"],
    queryFn: () => getWorkoutPage(sort, search, year, month),
    staleTime: 1000 * 60 * 2,
    select: (data: WorkoutPageDto) => ({
      ...data,
      workouts: data.workouts.map((workout) =>
        format(workout.workoutDate, "yyyy.MM.dd"),
      ),
    }),
  });

  const workoutsQuery = useQuery({
    queryKey: ["workouts", { year, month, search, sort }],
    queryFn: () => getWorkouts(sort, search, year, month),
    staleTime: 1000 * 60 * 2,
    enabled:
      year !== undefined &&
      month !== undefined &&
      summaryQuery.data?.workoutSummary !== undefined,
    select: (data: WorkoutListResponse) => ({
      ...data,
      workouts: data.workouts.map((workout: WorkoutListItem) => {
        workout.workoutDate = format(workout.workoutDate, "yyyy.MM.dd");
        return workout;
      }),
    }),
  });

  return {
    summary: summaryQuery.data?.workoutSummary,
    workouts: (workoutsQuery.data?.workouts ??
      summaryQuery.data?.workouts) as WorkoutListItem[],
    availableYears: summaryQuery.data?.availableYears,
    availableMonths: summaryQuery.data?.availableMonths,
    isLoading: summaryQuery.isLoading,
  };
}
