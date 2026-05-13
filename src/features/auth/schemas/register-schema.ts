import { z } from 'zod';

export const registerSchema = z.object({
    email: z.email("Please enter a valid email address"),
    username: z.string()
        .min(1, "Username is required")
        .min(4, "Username needs to be at least 4 characters long"),
    password: z.string()
        .min(6, "Minimum 6 characters required"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword || data.password === "", { message: "Passwords don't match", path: ['confirmPassword'] })

export type RegisterFormData = z.infer<typeof registerSchema>;
