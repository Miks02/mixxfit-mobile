import { api } from "@/src/constants/api";
import { useAuthStore } from "@/src/features/auth/store/auth-store";
import axios from "axios";

export const refreshInterceptor = () => {
    let isRefreshing = false;
    let failedQueue: Array<{ resolve: (token: string) => void ,reject: (error: unknown) => void}> = [];

    const processQueue = (error: unknown, token: string | null) => {
        failedQueue.forEach(f => {
            if(error) f.reject(error)
                else f.resolve(token!)
        })
        failedQueue = [];
    }

    api.interceptors.response.use(null, async (error) => {
        let token = useAuthStore.getState().token;
        let originalRequest = error.config;

        if(error.response?.status !== 401 || !token || originalRequest._retry)
            return Promise.reject(error);

        if(isRefreshing) {
            return new Promise((resolve, reject) => {
                failedQueue.push({resolve, reject});
            }).then(token => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return api(originalRequest);
            })
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
            const res = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/auth/refresh-token`);
            useAuthStore.getState().setToken(res.data.accessToken);
            processQueue(null, res.data.accessToken)
            return api(originalRequest);
        } catch(refreshError) {
            console.error(refreshError);
            useAuthStore.getState().clearCredentials();
            processQueue(error, null);

            return Promise.reject(refreshError)
        } finally {
            isRefreshing = false;
        }

    });

}
