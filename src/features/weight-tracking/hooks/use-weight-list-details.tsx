import { api } from "@/src/constants/api";
import { WeightListDetails } from "../types/weight-list-details";
import { useQuery } from "@tanstack/react-query";
import { format, parse } from "date-fns";

const getWeightListDetails = async (month: number | null, year: number | null): Promise<WeightListDetails> => {
  const res = await api.get<WeightListDetails>("/weight-entries/logs", { params: { month, year } });
  return res.data;
}

export const useWeightListDetails = (month: number | null, year: number | null) => {

  const workoutListDetailsQuery = useQuery({
    queryKey: ["weight-list-details", month, year],
    queryFn: async () => {
      const res = await getWeightListDetails(month, year);
      return res;
    },
    select: (data) => ({
      ...data,
      weightLogs: data.weightLogs.map((log) => ({
        ...log,
        createdAt: format(log.createdAt, "MMM dd, yyyy"),
        timeLogged: format(parse(log.timeLogged, "HH:mm:ss", new Date()), "HH:mm"),
      }))
    }),
    enabled: month !== null && year !== null
  })

  return {
    weightListDetails: workoutListDetailsQuery.data,
    isLoading: workoutListDetailsQuery.isLoading,
    isError: workoutListDetailsQuery.isError,
    error: workoutListDetailsQuery.error,
  }

}
