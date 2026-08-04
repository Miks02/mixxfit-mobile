import { Colors } from "@/src/constants/colors";
import { numberToMonth } from "@/src/constants/months";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import EmptyWorkoutsCard from "../components/empty-workouts-card";
import WorkoutCard from "../components/workout-card";
import { WorkoutFiltersModal } from "../components/workout-filters-modal";
import useWorkoutList from "../hooks/use-workout-list";
import { useWorkoutParamsStore } from "../store/workout-params-store";
import { WorkoutListItem } from "../types/workout-list-item";

const WorkoutListScreen = () => {
  const {
    workouts,
    availableYears,
    availableMonths,
    isLoading,
    isRefetching,
    refetchWorkouts,
  } = useWorkoutList();
  const paramsStore = useWorkoutParamsStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasAvailableYears = availableYears.length > 0;
  const router = useRouter();

  if (isLoading) {
    return (
      <View className="grow justify-center">
        <ActivityIndicator size={120} color={Colors.yellow[500]} />
      </View>
    );
  }

  return (
    <View className="flex-1">
      <ScrollView
        className="px-3 pt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 96 }}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetchWorkouts}
            progressBackgroundColor={Colors.yellow[500]}
          />
        }
      >
        <View className="bg-slate-200 rounded-2xl shadow-xl p-4 gap-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-1 mr-2">
              <Text 
                className="text-slate-800 text-2xl font-bold"
                numberOfLines={1}
                adjustsFontSizeToFit
                maxFontSizeMultiplier={1.2}
              >
                {hasAvailableYears ? `${numberToMonth(paramsStore.month!)} ${paramsStore.year}` : null}
              </Text>
              <Text 
                className="text-slate-600 text-xs font-semibold"
                maxFontSizeMultiplier={1.2}
              >
                {hasAvailableYears ? `${workouts?.length} workouts logged during ${numberToMonth(paramsStore.month!).toLowerCase()}` : null}
              </Text>
            </View>

            {hasAvailableYears ? (
              <View className="flex-row items-center gap-1.5 flex-shrink-0">
                <Pressable
                  onPress={() => setIsModalOpen(true)}
                  className="w-10 h-10 rounded-xl bg-slate-100 items-center justify-center active:opacity-70"
                >
                  <FontAwesome5 name="filter" size={15} color={Colors.sky[600]} />
                </Pressable>

                <Pressable
                  onPress={() => router.push("/workouts/workout-summary")}
                  className="w-10 h-10 rounded-xl bg-slate-100 items-center justify-center active:opacity-70"
                >
                  <FontAwesome6 name="chart-simple" size={15} color={Colors.emerald[600]} />
                </Pressable>

                <Pressable
                  onPress={() => router.push("/workouts/workout-form")}
                  className="w-10 h-10 rounded-xl bg-slate-100 items-center justify-center active:opacity-70"
                >
                  <FontAwesome6 name="plus" size={15} color={Colors.amber[600]} />
                </Pressable>
              </View>
            ) : null}
          </View>

          <View className="gap-3">
            {workouts?.length === 0 ? <EmptyWorkoutsCard /> : null}

            {workouts?.map((item: WorkoutListItem) => (
              <WorkoutCard
                key={item.id}
                data={item}
                onPress={() => {
                  router.push({
                    pathname: "/workouts/[id]",
                    params: { id: item.id },
                  });
                }}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <WorkoutFiltersModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        years={availableYears!}
        months={availableMonths!}
      />
    </View>
  );
};

export default WorkoutListScreen;