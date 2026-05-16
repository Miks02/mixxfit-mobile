import { api } from "@/src/constants/api";
import { ProblemDetails } from "../types/problem-details";

const isProblemDetails = (error: unknown): error is ProblemDetails => {
    if(typeof error !== 'object' || error === null)
        return false;

    const e = error as ProblemDetails
    return (
        typeof e.detail === 'string' &&
        typeof e.status === 'number' &&
        typeof e.title === 'string' &&
        typeof e.instance === 'string' &&
        typeof e.errorCode === 'string'
    )
}

export const problemDetailsInterceptor = () => {
    api.interceptors.response.use(null, async (err) => {
        const apiError = err.response?.data;
        if(!isProblemDetails(apiError))
            return Promise.reject(err)

        return Promise.reject(apiError);
    })

}
