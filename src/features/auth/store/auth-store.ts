import { UserDetailsDto } from '@/src/core/types/user-details-dto';
import { create } from 'zustand';

type AuthState = {
    user: UserDetailsDto | null,
    token: string | null,
    isAuthenticated: boolean

    setCredentials: (user: UserDetailsDto, token: string) => void,
    clearCredentials: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: null,
    isAuthenticated: false,

    setCredentials: (user, token) => set({user, token, isAuthenticated: true}),
    clearCredentials: () => set({user: null, token: null, isAuthenticated: false})
}))
