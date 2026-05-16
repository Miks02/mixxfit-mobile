import { api } from "@/src/constants/api";
import { ProblemDetails } from "@/src/core/types/problem-details";
import { UserDetailsDto } from "@/src/core/types/user-details-dto";
import { useMutation } from "@tanstack/react-query";
import { LoginFormData } from "../schemas/login-schema";
import { RegisterFormData } from "../schemas/register-schema";
import { useAuthStore } from "../store/auth-store";

export default function useAuth() {
    const setCredentials = useAuthStore((state) => state.setCredentials);
    const clearCredentials = useAuthStore((state) => state.clearCredentials);

    const login = useMutation<{user: UserDetailsDto, accessToken: string}, ProblemDetails, LoginFormData>({
        mutationFn: async (request: LoginFormData) => {
            const res = await api.post(`/auth/login`, request);
            return res.data;
        },
        onSuccess: async (res) => {
            await setCredentials(res.user, res.accessToken)
        },
        onError: (err) => Promise.reject(err)
    })

    const register = useMutation<{user: UserDetailsDto, accessToken: string}, ProblemDetails, RegisterFormData>({
        mutationFn: async (request: RegisterFormData) => {
            const res = await api.post(`/auth/register`, request);
            return res.data;
        },
        onSuccess: async (res) => {
            await setCredentials(res.user, res.accessToken)
        },
        onError: (err) => Promise.reject(err)
    })

    const logout = useMutation({
        mutationFn: async () => {
            await api.post('/auth/logout');
        },
        onSuccess: async () => {
            await clearCredentials();
        },
        onError: (err) => Promise.reject(err)
    })

    return { login, register, logout }

}
