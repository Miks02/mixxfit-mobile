
import { z } from "zod";

export const SetTargetSchema = z.object({
  targetWeight: z.coerce.number("Enter a valid number")
    .min(25, "Target must be at least 25 kg")
    .max(400, "Target weight must be at most 400 kg")
});

export type SetTargetData = z.infer<typeof SetTargetSchema>;
