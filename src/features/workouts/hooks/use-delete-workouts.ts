
import { api } from "@/src/constants/api";
import { ProblemDetails } from "@/src/core/types/problem-details";
import {  useMutation, useQueryClient } from "@tanstack/react-query";

const deleteWorkoutAsync = async (id: number): Promise<void> => {
  await api.delete(`/workouts/${id}`);
}

export default function useDeleteWorkout() {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation<void, ProblemDetails, number>({
    mutationFn: (id: number) => deleteWorkoutAsync(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
      queryClient.invalidateQueries({ queryKey: ["workout-details"] });
      queryClient.invalidateQueries({ queryKey: ["workout-summary"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    }
  });

  return {
    deleteWorkoutMutation: deleteMutation.mutate,
    isPending: deleteMutation.isPending,
  }

}
