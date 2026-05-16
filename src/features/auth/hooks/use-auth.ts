import { api } from "@/src/constants/api";
import { useMutation } from "@tanstack/react-query";
import { LoginFormData } from "../schemas/login-schema";
import { RegisterFormData } from "../schemas/register-schema";
import { useAuthStore } from "../store/auth-store";

export default function useAuth() {
    const setCredentials = useAuthStore((state) => state.setCredentials);
    const clearCredentials = useAuthStore((state) => state.clearCredentials);

    const login = useMutation({
        mutationFn: async (request: LoginFormData) => {
            const res = await api.post(`/auth/login`, request);
            console.log(res)
            return res.data;
        },
        onSuccess: async (res) => {
            await setCredentials(res.user, res.accessToken)
        },
        onError: (err) => console.log(err.message)
    })

    const register = useMutation({
        mutationFn: async (request: RegisterFormData) => {
            const res = await api.post(`/auth/register`, request);
            console.log(res)
            return res.data;
        },
        onSuccess: async (res) => {
            await setCredentials(res.user, res.accessToken)
        },
        onError: (err) => console.log(err.message)
    })

    const logout = useMutation({
        mutationFn: async () => {
            await api.post('/auth/logout');
        },
        onSuccess: async () => {
            await clearCredentials();
            alert("Logout successful")
        },
        onError: () => alert("Error occurred")
    })

    return { login, register, logout }

}
