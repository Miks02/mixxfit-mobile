
import { api } from '@/src/constants/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../../auth/store/auth-store';
import { ProblemDetails } from '@/src/core/types/problem-details';
import { TargetWeight } from '../types/target-weight';

const setTargetWeight = async (targetWeight: number | null): Promise<TargetWeight> => {
  const res = await api.patch("/fitness-profile/target-weight", { targetWeight })
  return res.data;
}

export const useSetTargetWeight = () => {
  const queryClient = useQueryClient();
  const authStore = useAuthStore();
  const user = authStore.user;

  const setTargetWeightMutation = useMutation<TargetWeight, ProblemDetails, number | null>({
    mutationFn: async (targetWeight: number | null) => await setTargetWeight(targetWeight),
    onSuccess: (res) => {
      authStore.setUser({ ...user!, targetWeight: res.targetWeight ?? undefined })
      queryClient.invalidateQueries({ queryKey: ['weight-summary'] })
    }
  });

  return {
    setTargetWeight: setTargetWeightMutation.mutate,
    isPending: setTargetWeightMutation.isPending,
    error: setTargetWeightMutation.error,
  };
}
