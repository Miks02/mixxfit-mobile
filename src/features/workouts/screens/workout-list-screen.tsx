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
  const { workouts, availableYears, availableMonths, isLoading, isRefetching, refetchWorkouts } =
    useWorkoutList();
  const paramsStore = useWorkoutParamsStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

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
            >

            </RefreshControl>
        }
      >
        <View className="bg-slate-200 rounded-2xl shadow-xl p-4 gap-4">
          <View className="flex-row items-start justify-between">
            <View className="gap-1">
              <Text className="text-slate-800 text-3xl font-bold">
                {numberToMonth(paramsStore.month!)} {paramsStore.year}
              </Text>
              <Text className="text-slate-600 text-base font-semibold">
                {workouts?.length} workouts logged during{" "}
                {numberToMonth(paramsStore.month!).toLowerCase()}
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
                  color={Colors.sky[600]}
                ></FontAwesome5>
              </Pressable>
              <Pressable
                onPress={() => router.push("/workouts/workout-summary")}
                className="w-11 h-11 rounded-xl bg-slate-100 items-center justify-center active:opacity-70"
              >
                <FontAwesome6
                  name="chart-simple"
                  size={17}
                  color={Colors.emerald[600]}
                ></FontAwesome6>
              </Pressable>
              <Pressable
                onPress={() => router.push("/workouts/workout-form")}
                className="w-11 h-11 rounded-xl bg-slate-100 items-center justify-center active:opacity-70"
              >
                <FontAwesome6
                  name="plus"
                  size={17}
                  color={Colors.amber[600]}
                ></FontAwesome6>
              </Pressable>
            </View>
          </View>

          <View className="gap-3">
            {workouts?.length === 0
            ? <View className="flex-1 grow justify-center p-3 items-center w-full mb-10">
                <EmptyWorkoutsCard />
             </View>
             : ''}
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
