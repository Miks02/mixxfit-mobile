import { api } from "@/src/constants/api";
import { useQuery } from "@tanstack/react-query";
import { useWorkoutParamsStore } from "../store/workout-store";
import { WorkoutListItem } from "../types/workout-list-item";
import { WorkoutPageDto } from "../types/workout-page-dto";
import { format } from "date-fns";
import { WorkoutListResponse } from "../types/workout-list-response";

const getWorkouts = async (
  sort?: string,
  year?: number,
  month?: number,
): Promise<WorkoutListResponse> => {
  const {
    actions,
    year: currYear,
    month: currMonth,
  } = useWorkoutParamsStore.getState();

  const params = { sort, year, month };

  const { data } = await api.get("/workouts/", { params: params });

  if (!currMonth || !!currYear)
    actions.initWorkoutParams(data?.year, data?.month);

  return data;
};

export default function useWorkout() {
  const { year, month, sort } = useWorkoutParamsStore.getState();

  const workoutsQuery = useQuery({
    queryKey: ["workouts", { year, month, sort }],
    queryFn: async () => await getWorkouts(sort, year, month),
    select: (data: WorkoutListResponse) => ({
      ...data,
      workouts: data.workouts.map((workout: WorkoutListItem) => {
        workout.workoutDate = format(workout.workoutDate, "yyyy.MM.dd");
        return workout;
      }),
    }),
  });

  return {
    workouts: workoutsQuery.data?.workouts as WorkoutListItem[],
    availableYears: workoutsQuery.data?.availableYears,
    availableMonths: workoutsQuery.data?.availableMonths,
    isLoading: workoutsQuery.isFetching,
  };
}
