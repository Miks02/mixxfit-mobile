import { Colors } from "@/src/constants/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { RecentWorkout } from "../models/recent-workout";
import WorkoutCard from "./workout-card";
import { router } from "expo-router";

type RecentWorkoutsCardProps = {
  workouts: RecentWorkout[];
  onScrollStateChange?: (isScrolling: boolean) => void;
};

const RecentWorkoutsCard = ({
  workouts,
}: RecentWorkoutsCardProps) => {
  const hasWorkouts = workouts.length > 0;

  return (
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}

      style={{ height: hasWorkouts ? 400 : 'auto' }}
      className="bg-slate-200 rounded-xl p-4 shadow-xl"
    >
      {!hasWorkouts ? (
        <View className="w-full border border-slate-400 p-6 gap-1 items-center rounded-md">
          <FontAwesome5
            name={"dumbbell"}
            size={32}
            color={Colors.slate[600]}
          ></FontAwesome5>
          <Text className="text-2xl font-semibold text-slate-800">
            No Workouts Found
          </Text>
          <Text className="text-lg font-semibold text-slate-700/80 text-center">
            Your recent workouts will appear here after you start tracking them
          </Text>
        </View>
      ) : (
        <View className="gap-4 overflow-y-auto">
          <View className="flex-row gap-2 items-center">
            <FontAwesome5
              name="dumbbell"
              color={Colors.slate[600]}
              size={14}
            ></FontAwesome5>
            <Text className="text-lg text-slate-700 font-semibold">
              Recent Workouts
            </Text>
          </View>
          {workouts.map((item: RecentWorkout) => {
            return (
              <WorkoutCard
                key={item.id}
                onPress={() => {
                  router.push({
                    pathname: "/workouts/[id]",
                    params: {id: item.id}
                  })
                }}
                title={item.name}
                date={item.workoutDate}
                exerciseCount={item.exerciseCount}
              />
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

export default RecentWorkoutsCard;
