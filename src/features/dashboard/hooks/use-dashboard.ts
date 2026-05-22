import { api } from "@/src/constants/api";
import { useQuery } from "@tanstack/react-query";
import { format } from 'date-fns';
import { DashboardDto } from "../models/dashboard-dto";
import { RecentWorkout } from "../models/recent-workout";

const getDashboardData = async (): Promise<DashboardDto> => {
    const { data } = await api.get('/dashboard');
    return data;
}

export default function useDashboard() {
    const dashboardQuery = useQuery({
        queryKey: ['dashboard'],
        queryFn: getDashboardData,
        staleTime: 1000 * 60 * 2,
        select: (data: DashboardDto) => ({
            ...data,
            lastWorkoutDate: data.lastWorkoutDate === null ? null : format(new Date(data.lastWorkoutDate), 'dd.MM.yyyy'),
            recentWorkouts: data.recentWorkouts.map((workout: RecentWorkout) => ({
                ...workout,
                workoutDate: workout.workoutDate
            }))
        })
    })

    const refetchAll = async () => {
        await dashboardQuery.refetch();
    }

    return {
        data: dashboardQuery.data,
        isLoading: dashboardQuery.isLoading,
        isError: dashboardQuery.isError,
        isRefetching: dashboardQuery.isRefetching,
        refetchAll: refetchAll
    }
}
