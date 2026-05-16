import { UserDetailsDto } from '@/src/core/types/user-details-dto';
import { create } from 'zustand';
import * as SecureStore from "expo-secure-store";

type AuthState = {
    user: UserDetailsDto | null,
    token: string | null,
    isAuthenticated: boolean,

    setToken: (token: string) => Promise<void>,
    setUser: (user: UserDetailsDto) => Promise<void>,
    setCredentials:  (user: UserDetailsDto, token: string) => Promise<void>,
    clearCredentials: () => Promise<void>,
    hydrateUserData: () => Promise<void>
}

const USER_KEY = "user";
const TOKEN_KEY = "token";

export const useAuthStore = create<AuthState>((set) => ({
    user:  null,
    token: null,
    isAuthenticated: false,

    setToken: async (token) => set({token, isAuthenticated: true}),
    setUser: async (user) => set({user}),

    setCredentials: async (user, token) => {
        await SecureStore.setItemAsync(USER_KEY, JSON.stringify(user))
        await SecureStore.setItemAsync(TOKEN_KEY, JSON.stringify(token))
        set({user, token, isAuthenticated: true})
    },
    clearCredentials: async () => {
        await SecureStore.deleteItemAsync(USER_KEY);
        await SecureStore.deleteItemAsync(TOKEN_KEY);
        set({user: null, token: null, isAuthenticated: false})
    },
    hydrateUserData: async () => {
        const rawUser = await SecureStore.getItemAsync(USER_KEY)
        const rawToken = await SecureStore.getItemAsync(TOKEN_KEY)

        if(rawUser && rawToken)
            set({user: JSON.parse(rawUser), token: JSON.parse(rawToken), isAuthenticated: true})

    }
}))
