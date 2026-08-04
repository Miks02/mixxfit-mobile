

export const getWorkoutError = (errorCode: string) => {
  const messages: Record<string, string> = {
    "Workout.NotFound": "Requested workout has not been found. Please try again.",
    "Workout.LimitReached": "You have reached the limit of workouts for today. Please try again later."
  }
  return messages[errorCode] ?? "Something went wrong. Try again later."
}
