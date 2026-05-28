import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { useWorkoutParamsStore } from "../store/workout-store";

type WorkoutFiltersModalProps = {
    years: number[],
    months: number[],
    isModalOpen: boolean,
    onClose: () => void
}

export const WorkoutFiltersModal = (props: WorkoutFiltersModalProps) => {

    const activeMonth = useWorkoutParamsStore((state) => state.month);
    const activeYear = useWorkoutParamsStore((state) => state.year);
    const [selectedMonth, setSelectedMonth ] = useState(activeMonth);
    const [selectedYear, setSelectedYear] = useState(activeYear);

    const applyFilters = () => {
        useWorkoutParamsStore.getState().actions.initWorkoutParams(selectedYear!, selectedMonth!)
        props.onClose();
    }

    return (
        <Modal animationType="fade" visible={props.isModalOpen} statusBarTranslucent={true} transparent={true}>
        <View className="flex-1 justify-center p-8 bg-slate-800/60">
        <View className="bg-slate-200 gap-4 p-4 rounded-xl">
        <Text className="text-2xl font-bold border-b border-slate-300 text-slate-800">Filters</Text>
        <Text className="text-lg font-semibold text-slate-800">Years</Text>
        <View className="flex-row gap-2">
        {props.years.map((yearItem) => {
            const isActive: boolean = yearItem == selectedYear
            return (
                <Pressable key={yearItem} onPress={() => setSelectedYear(yearItem)} className={`p-2 ${isActive ? 'bg-emerald-500' : 'bg-amber-500'} rounded-md active:opacity-50 transition duration-200`}>
                <Text className="text-slate-800 font-semibold">{yearItem}</Text>
                </Pressable>
            )
        })}
        </View>
        <Text className="text-lg font-semibold text-slate-800">Months</Text>

        <View className="flex-row gap-2">
        {props.months.map((monthItem) => {
            const isActive: boolean = monthItem == selectedMonth
            return (
                <Pressable key={monthItem} onPress={() => setSelectedMonth(monthItem)} className={`p-2 ${isActive ? 'bg-emerald-500' : 'bg-amber-500'} rounded-md active:opacity-50 transition duration-200`}>
                <Text className="text-slate-800 font-semibold">{monthItem}</Text>
                </Pressable>
            )
        })}
        </View>

        <Pressable onPress={() => applyFilters()} className="bg-yellow-500 active:opacity-50 transition duration-200 p-2 rounded-md shadow-lg">
        <Text className="text-center text-xl text-gray-800 font-semibold">
        Apply Filters
        </Text>
        </Pressable>
        </View>
        </View>
        </Modal>
    );
};
