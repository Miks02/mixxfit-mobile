import { api } from "@/src/constants/api"
import { CreateWeightRequest } from "../types/weight-create-request"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProblemDetails } from "@/src/core/types/problem-details";


const logWeight = async (request: CreateWeightRequest): Promise<void> => {
  const res = await api.post("/weight-entries", request)
  return res.data;
}

export const useQuickLog = () => {
  const queryClient = useQueryClient()

  const logWeightMutation = useMutation<void, ProblemDetails, CreateWeightRequest>({
    mutationFn: async (request: CreateWeightRequest) => await logWeight(request),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ["weight-summary"]})
  })

  return {
    logWeight: logWeightMutation.mutate,
    isPending: logWeightMutation.isPending,
  }
}
