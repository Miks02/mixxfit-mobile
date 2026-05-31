import { Colors } from "@/src/constants/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import WorkoutCard from "../components/workout-card";
import { WorkoutFiltersModal } from "../components/workout-filters-modal";
import useWorkout from "../hooks/use-workout";
import { useWorkoutParamsStore } from "../store/workout-store";
import { WorkoutListItem } from "../types/workout-list-item";
import { numberToMonth } from "@/src/constants/months";
import EmptyWorkoutsCard from "../components/empty-workouts-card";

const WorkoutListScreen = () => {
  const { workouts, availableYears, availableMonths, isLoading } = useWorkout();
  const paramsStore = useWorkoutParamsStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) {
    return (
      <View className="grow justify-center">
        <ActivityIndicator
          size={120}
          color={Colors.yellow[500]}
        ></ActivityIndicator>
      </View>
    );
  }

  if (workouts?.length === 0) {
    return (
      <View className="flex-1 grow justify-center p-3 items-center w-full mb-10">
        <EmptyWorkoutsCard />
      </View>
    );
  }

  return (
    <View className="flex-1">
      <ScrollView
        className="px-3 pt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 96 }}
      >
        <View className="bg-slate-200 rounded-2xl shadow-xl p-4 gap-4">
          <View className="flex-row items-start justify-between">
            <View className="gap-1">
              <Text className="text-slate-800 text-3xl font-bold">
                {numberToMonth(paramsStore.month!)} {paramsStore.year}
              </Text>
              <Text className="text-slate-600 text-base font-semibold">
                {workouts?.length} workouts logged during{" "}
                {numberToMonth(paramsStore.month!)}
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Pressable
                onPress={() => setIsModalOpen(true)}
                className="w-11 h-11 rounded-xl bg-slate-100 items-center justify-center active:opacity-70"
              >
                <FontAwesome5
                  name="filter"
                  size={17}
                  color={Colors.slate[700]}
                ></FontAwesome5>
              </Pressable>
            </View>
          </View>

          <View className="gap-3">
            {workouts?.map((item: WorkoutListItem) => (
              <WorkoutCard
                key={item.id}
                data={item}
                onPress={() => {}}
              ></WorkoutCard>
            ))}
          </View>
        </View>
      </ScrollView>
      <WorkoutFiltersModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        years={availableYears!}
        months={availableMonths!}
      ></WorkoutFiltersModal>
    </View>
  );
};

export default WorkoutListScreen;
