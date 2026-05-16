import { tokenInterceptor } from "./auth-interceptor"
import { problemDetailsInterceptor } from "./problem-details-interceptor";
import { refreshInterceptor } from "./refresh-interceptor";


export const setupInterceptors = () => {
    tokenInterceptor();
    refreshInterceptor();
    problemDetailsInterceptor();
}
