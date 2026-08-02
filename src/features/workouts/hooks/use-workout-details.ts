import { api } from "@/src/constants/api";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { WorkoutDetails } from "../types/workout-details";
import { ProblemDetails } from "@/src/core/types/problem-details";

const getWorkoutDetails = async (id: number): Promise<WorkoutDetails> => {
    const res = await api.get(`workouts/${id}`);
    return res.data;
}

export default function useWorkoutDetails(id: number) {

    const detailsQuery = useQuery<WorkoutDetails, ProblemDetails>({
        queryKey: ["workout-details", id],
        queryFn: async () => await getWorkoutDetails(id),
        select: (data: WorkoutDetails) => ({
            ...data,
            workoutDate: format(data.workoutDate, "dd.MM.yyyy")
      }),
      staleTime: 1000 * 60 * 5
    });

    const refetchDetails = async () => await detailsQuery.refetch();

    return {
        details: detailsQuery.data,
        refetch: refetchDetails,
        isLoading: detailsQuery.isLoading,
        isRefetching: detailsQuery.isRefetching,
        isError: detailsQuery.isError,
        error: detailsQuery.error?.errorCode,
    }
}
