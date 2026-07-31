import { api } from "@/src/constants/api";
import { ProblemDetails } from "@/src/core/types/problem-details";
import { UserDetailsDto } from "@/src/core/types/user-details-dto";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useWorkoutParamsStore } from "../../workouts/store/workout-params-store";
import { LoginFormData } from "../schemas/login-schema";
import { RegisterFormData } from "../schemas/register-schema";
import { useAuthStore } from "../store/auth-store";

export default function useAuth() {
    const queryClient = useQueryClient();
    const setCredentials = useAuthStore((state) => state.setCredentials);
    const clearCredentials = useAuthStore((state) => state.clearCredentials);

    const login = useMutation<{user: UserDetailsDto, accessToken: string}, ProblemDetails, LoginFormData>({
        mutationFn: async (request: LoginFormData) => {
            const res = await api.post(`/auth/login`, request);
            return res.data;
        },
        onSuccess: async (res) => {
            await setCredentials(res.user, res.accessToken)
        }
    })

    const register = useMutation<{user: UserDetailsDto, accessToken: string}, ProblemDetails, RegisterFormData>({
        mutationFn: async (request: RegisterFormData) => {
            const res = await api.post(`/auth/register`, request);
            return res.data;
        },
        onSuccess: async (res) => {
            await setCredentials(res.user, res.accessToken)
        }
    })

    const logout = useMutation({
        mutationFn: async () => {
            const token = useAuthStore.getState().token;
            await clearCredentials();
            await api.post('/auth/logout', {}, {headers: {'Authorization': `Bearer ${token}`}})
        },
        onSettled: async () => {
            queryClient.clear();
            useWorkoutParamsStore.getState().actions.reset();
        }
    })

    return { login, register, logout }

}
