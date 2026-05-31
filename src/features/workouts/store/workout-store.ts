import { create } from "zustand";

type WorkoutParams = {
  year?: number;
  month?: number;
  sort?: string;
  actions: WorkoutParamsActions;
};

type WorkoutParamsActions = {
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  initWorkoutParams: (year: number, month: number, sort?: string) => void;
};

export const useWorkoutParamsStore = create<WorkoutParams>((set) => ({
  year: undefined,
  month: undefined,
  sort: undefined,
  actions: {
    setYear: (year: number) => set({ year: year }),
    setMonth: (month: number) => set({ month: month }),
    initWorkoutParams: (year: number, month: number, sort: string = "newest") =>
      set({ year: year, month: month, sort: sort }),
  },
}));
