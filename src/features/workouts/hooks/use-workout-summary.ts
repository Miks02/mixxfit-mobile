import { api } from "@/src/constants/api";
import { WorkoutSummary } from "../types/workout-summary";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns/format";

const getWorkoutSummary = async (): Promise<WorkoutSummary> => {
  const { data } = await api.get("/workouts/summary");

  return data;
};

export default function useWorkoutSummary() {
  const summaryQuery = useQuery({
    queryKey: ["workout-summary"],
    queryFn: getWorkoutSummary,
    select: (data: WorkoutSummary) => ({
      ...data,
      lastWorkoutDate: data.lastWorkoutDate ? format(new Date(data.lastWorkoutDate), "MMM dd, yyyy") : "",
    })
  });

  const refetchSummary = () => summaryQuery.refetch();

  return {
    summary: summaryQuery.data,
    isLoading: summaryQuery.isLoading,
    isRefetching: summaryQuery.isRefetching,
    refetchSummary,
  };
}
