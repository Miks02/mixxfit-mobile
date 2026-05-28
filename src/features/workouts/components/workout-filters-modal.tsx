import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { useWorkoutParamsStore } from "../store/workout-store";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/src/constants/colors";
import { numberToMonth } from "@/src/constants/months";

type WorkoutFiltersModalProps = {
  years: number[];
  months: number[];
  isModalOpen: boolean;
  onClose: () => void;
};

export const WorkoutFiltersModal = (props: WorkoutFiltersModalProps) => {
  const activeMonth = useWorkoutParamsStore((state) => state.month);
  const activeYear = useWorkoutParamsStore((state) => state.year);
  const [selectedMonth, setSelectedMonth] = useState(activeMonth);
  const [selectedYear, setSelectedYear] = useState(activeYear);

  const applyFilters = () => {
    useWorkoutParamsStore
      .getState()
      .actions.initWorkoutParams(selectedYear!, selectedMonth!);
    props.onClose();
  };

  return (
    <Modal
      animationType="fade"
      visible={props.isModalOpen}
      statusBarTranslucent={true}
      transparent={true}
    >
      <View className="flex-1 justify-center p-8 bg-slate-800/60">
        <View className="bg-slate-200 gap-4 p-4 rounded-xl">
          <View className="flex-row justify-between  border-b border-slate-300 pb-2">
            <Text className="text-2xl font-bold text-slate-800">Filters</Text>
            <Pressable
              onPress={props.onClose}
              className="active:opacity-50 transition duration-200"
            >
              <FontAwesome5 name="times" size={24} color={Colors.slate[800]} />
            </Pressable>
          </View>
          <Text className="text-lg font-semibold text-slate-800">Years</Text>
          <View className="flex-row gap-2 flex-wrap w-full justify-center">
            {props.years.map((yearItem) => {
              const isSelected: boolean = yearItem === selectedYear;
              const isActive: boolean = yearItem === activeYear;
              return (
                <Pressable
                  key={yearItem}
                  onPress={() => setSelectedYear(yearItem)}
                  className={`p-2 ${isSelected ? "bg-emerald-500" : isActive ? "bg-sky-500" : "bg-amber-500"} w-28 rounded-md items-center active:opacity-50 transition duration-200`}
                >
                  <Text className="font-semibold text-slate-100">
                    {yearItem}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <Text className="text-lg font-semibold text-slate-800">Months</Text>

          <View className="flex-row gap-2 flex-wrap w-full justify-center">
            {props.months.map((monthItem) => {
              const isSelected: boolean = monthItem === selectedMonth;
              const isActive: boolean = monthItem === activeMonth;
              return (
                <Pressable
                  key={monthItem}
                  onPress={() => setSelectedMonth(monthItem)}
                  className={`p-2 ${isSelected ? "bg-emerald-500" : isActive ? "bg-sky-500" : "bg-amber-500"} w-28 rounded-md  items-center active:opacity-50 transition duration-200`}
                >
                  <Text className="font-semibold text-slate-100">
                    {numberToMonth(monthItem)}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Pressable
            onPress={() => applyFilters()}
            className="bg-yellow-500 active:opacity-50 transition duration-200 p-2 mt-2 rounded-md shadow-lg"
          >
            <Text className="text-center text-xl text-gray-800 font-semibold">
              Apply Filters
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
