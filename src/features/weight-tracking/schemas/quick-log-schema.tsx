import z from "zod";


export const QuickLogSchema = z.object({
  weight: z.coerce
    .number("Enter a number")
    .min(25, "Weight must be at least 25kg")
    .max(400, "Weight must be at most 400kg"),
  time: z.string()
    .min(1, "Time is required"),
  notes: z.string()
    .max(100, "Notes must cannot exceed 100 characters")
    .optional(),
})

export type QuickLogFormData = z.infer<typeof QuickLogSchema>
