import { api } from "@/src/constants/api";
import { useAuthStore } from "@/src/features/auth/store/auth-store";


export const tokenInterceptor = () => {
    api.interceptors.request.use((config) => {
        let token = useAuthStore.getState().token;

        if(!token)
            return config

        config.headers.Authorization = `Bearer ${token}`;
        return config
    });
}
