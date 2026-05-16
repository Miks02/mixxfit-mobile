import { tokenInterceptor } from "./auth-interceptor"
import { refreshInterceptor } from "./refresh-interceptor";


export const setupInterceptors = () => {
    tokenInterceptor();
    refreshInterceptor();
}
