import { api } from "@/src/constants/api";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns/format";
import { WorkoutSummary } from "../types/workout-summary";

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
    }),
    staleTime: 1000 * 60 * 5
  });

  const refetchSummary = () => summaryQuery.refetch();

  return {
    summary: summaryQuery.data,
    isLoading: summaryQuery.isLoading,
    isRefetching: summaryQuery.isRefetching,
    refetchSummary,
  };
}
