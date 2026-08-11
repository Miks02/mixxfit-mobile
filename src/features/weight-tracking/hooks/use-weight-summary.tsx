import { useQuery, useQueryClient } from "@tanstack/react-query"
import { WeightSummary } from "../types/weight-summary";
import { ProblemDetails } from "@/src/core/types/problem-details";
import { api } from "@/src/constants/api";
import { format, parse } from "date-fns";

const getWeightSummary = async (month: number | null, year: number | null, targetWeight: number | null): Promise<WeightSummary> => {
  const res = await api.get<WeightSummary>(`/weight-entries/`, { params: { month, year, targetWeight } })
  return res.data;
}

export const useWeightSummary = (targetWeight: number | null, month: number | null, year: number | null) => {
  const queryClient = useQueryClient();

  const weightSummaryQuery = useQuery<WeightSummary, ProblemDetails>({
    queryKey: ["weight-summary", targetWeight],
    queryFn: async () => {
      const res = await getWeightSummary(month, year, targetWeight);
      queryClient.setQueryData(["weight-list-details", month, year], res.weightListDetails)
      return res;
    },
    select: (data) => ({
      ...data,
      currentWeight: {
        ...data.currentWeight,
        createdAt: format(data.currentWeight.createdAt, "MMM dd, yyyy"),
      },
      weightListDetails: {
        ...data.weightListDetails,
        weightLogs: data.weightListDetails.weightLogs.map((log) => ({
          ...log,
          createdAt: format(log.createdAt, "MMM dd, yyyy"),
          timeLogged: format(parse(log.timeLogged, "HH:mm:ss", new Date()), "HH:mm"),
        })),
      }
    }),
    enabled: targetWeight !== undefined
  })

  return {
    weightSummary: weightSummaryQuery.data,
    isLoading: weightSummaryQuery.isLoading,
    isError: weightSummaryQuery.isError,
    error: weightSummaryQuery.error,
  }
}
