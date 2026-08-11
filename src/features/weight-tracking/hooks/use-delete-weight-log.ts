
import { api } from '@/src/constants/api';
import { ProblemDetails } from '@/src/core/types/problem-details';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteWeightLog = async (id: number): Promise<void> => {
  const res = await api.delete(`/weight-entries/${id}`)
  return res.data;
};

export const useDeleteWeightLog = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation<void, ProblemDetails, number>({
    mutationFn: async (id: number) => await deleteWeightLog(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['weight-summary'] });
    },
  })

  return {
   deleteWeightLog: deleteMutation.mutate,
   isDeleting: deleteMutation.isPending,
 }
};
