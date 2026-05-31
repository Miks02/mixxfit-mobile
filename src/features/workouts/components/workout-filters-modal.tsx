import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/src/constants/colors";
import { numberToMonth } from "@/src/constants/months";
import { useWorkoutParamsStore } from "../store/workout-store";
import FilterItemCard from "./filter-item-card";

type WorkoutFiltersModalProps = {
  years: number[];
  months: number[];
  isModalOpen: boolean;
  onClose: () => void;
};

const sortMap: Record<string, string> = {
  newest: "Newest First",
  oldest: "Oldest First",
};

export const WorkoutFiltersModal = (props: WorkoutFiltersModalProps) => {
  const activeMonth = useWorkoutParamsStore((state) => state.month);
  const activeYear = useWorkoutParamsStore((state) => state.year);
  const activeSort = useWorkoutParamsStore((state) => state.sort);
  const [selectedMonth, setSelectedMonth] = useState(activeMonth);
  const [selectedYear, setSelectedYear] = useState(activeYear);
  const [selectedSort, setSelectedSort] = useState(activeSort);

  const applyFilters = () => {
    useWorkoutParamsStore
      .getState()
      .actions.initWorkoutParams(selectedYear!, selectedMonth!, selectedSort!);
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
          <Text className="text-lg font-semibold text-slate-800">Sort</Text>
          <View className="flex-row gap-2 flex-wrap w-full justify-center">
            {Object.entries(sortMap).map(([sortKey, sortValue]) => {
              const isSelected: boolean = sortKey === selectedSort;
              const isActive: boolean = sortKey === activeSort;
              return (
                <Pressable
                  key={sortKey[0]}
                  onPress={() => setSelectedSort(sortKey)}
                  className={`p-2 ${isSelected ? "bg-emerald-500" : isActive ? "bg-sky-500" : "bg-amber-500"} w-28 rounded-md items-center active:opacity-50 transition duration-200`}
                >
                  <Text className="font-semibold text-slate-100">
                    {sortValue}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <Text className="text-lg font-semibold text-slate-800">Years</Text>
          <View className="flex-row gap-2 flex-wrap w-full justify-center">
            {props.years.map((yearItem) => {
              return (
                <FilterItemCard
                  key={yearItem}
                  value={yearItem}
                  isSelected={yearItem === selectedYear}
                  isActive={yearItem === activeYear}
                  onPress={() => setSelectedYear(yearItem)}
                />
              );
            })}
          </View>
          <Text className="text-lg font-semibold text-slate-800">Months</Text>

          <View className="flex-row gap-2 flex-wrap w-full justify-center">
            {props.months.map((monthItem) => {
              return (
                <FilterItemCard
                  key={monthItem}
                  value={numberToMonth(monthItem)}
                  isSelected={monthItem === selectedMonth}
                  isActive={monthItem === activeMonth}
                  onPress={() => setSelectedMonth(monthItem)}
                />
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
