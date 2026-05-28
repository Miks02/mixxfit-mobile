import { create } from "zustand";

type WorkoutParams = {
    year?: number;
    month?: number;
    search?: string;
    sort?: string;
    actions: WorkoutParamsActions;
}

type WorkoutParamsActions = {
    setYear: (year: number) => void;
    setMonth: (month: number) => void;
    initWorkoutParams: (year:number, month:number) => void;
}

export const useWorkoutParamsStore = create<WorkoutParams>((set) => ({
    year: undefined,
    month: undefined,
    search: undefined,
    sort: undefined,
    actions: {
        setYear: (year: number) => set({ year: year }),
        setMonth: (month: number) => set({ month: month }),
        initWorkoutParams: (year:number, month:number) => set({year: year, month: month})
    }
}))
