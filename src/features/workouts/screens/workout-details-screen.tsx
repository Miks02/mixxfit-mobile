import { Colors } from "@/src/constants/colors";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View, Pressable } from "react-native";
import {
  RefreshControl,
  ScrollView,
} from "react-native-gesture-handler";
import useWorkoutDetails from "../hooks/use-workout-details";
import { router } from "expo-router";
import useToast from "@/src/core/hooks/use-toast";
import { getWorkoutError } from "../utilities/workout-errors";
import WorkoutDetailsExercises from "../components/workout-details-exercises";
import { ExerciseType } from "../types/exercise-type";
import { ExerciseEntry } from "../types/exercise-entry";
import { Modal } from "@/src/shared/components/modal";
import useDeleteWorkout from "../hooks/use-delete-workouts";

const WorkoutDetailsScreen = (props: { id: number }) => {
  const { details, refetch, isRefetching, isError, isLoading, error } =
    useWorkoutDetails(props.id);
  const { deleteWorkoutMutation, isPending } = useDeleteWorkout();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const exerciseCounts = computeExerciseCounts(details?.exercises);
  const toast = useToast();

  const closeModal = () => setIsModalVisible(false);

  const deleteWorkout = (id: number) => {
    deleteWorkoutMutation(id, {
      onSuccess: () => {
        closeModal();
        toast.showSuccess("Workout deleted successfully");
        router.dismissTo("/workouts");
      },
      onError: (err) => {
        toast.showError(getWorkoutError(err.errorCode));
      },
    });

  }

  useEffect(() => {
    if (isError) {
      const errorMessage = getWorkoutError(error!);
      router.back();
      toast.showError(errorMessage);
    }
  }, [isError, toast, error]);

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
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 12, paddingBottom: 96, gap: 12 }}
      refreshControl={
        <RefreshControl
          refreshing={isRefetching}
          onRefresh={refetch}
          progressBackgroundColor={Colors.yellow[500]}
        ></RefreshControl>
      }
    >
      <View className="rounded-2xl bg-slate-200 shadow-xl p-5 gap-5 flex-row justify-between">
        <View className="gap-1">
          <Text className="text-slate-800 text-3xl font-bold">
            {details?.name}
          </Text>
          <Text className="text-slate-600 text-base font-semibold">
            Completed at {details?.workoutDate}
          </Text>
        </View>

        <Pressable
          onPress={() => setIsModalVisible(true)}
          className="bg-red-600 p-2 rounded-lg justify-center self-center active:opacity-50 transition duration-200"
        >
          <FontAwesome6
            name="trash-can"
            size={24}
            color="white"
          ></FontAwesome6>
        </Pressable>
      </View>

      <WorkoutDetailsExercises
        exercises={details?.exercises ?? []}
      ></WorkoutDetailsExercises>

      {details?.notes && (
        <View className="bg-slate-200 gap-4 shadow-xl p-4 rounded-lg">
          <Text className="font-semibold text-xl">Notes</Text>

          <View className="bg-slate-300/70 p-4 rounded-lg shadow-md">
            <Text className="text-lg text-slate-900 font-semibold">
              {details?.notes}
            </Text>
          </View>
        </View>
      )}

      <View className="bg-slate-200 gap-4 shadow-xl p-4 rounded-lg">
        <Text className="font-semibold text-xl">Exercise Types</Text>

        <View className="flex-row flex-wrap gap-4">
          <View className="flex-row grow gap-4">
            <View className="bg-amber-200 p-4 grow rounded-lg shadow-md flex-row gap-4 items-center">
              <View className="p-2 bg-amber-400 rounded-xl w-14 items-center">
                <FontAwesome5
                  name="dumbbell"
                  size={26}
                  color={Colors.slate[100]}
                />
              </View>
              <Text className="text-3xl font-bold text-amber-900">{exerciseCounts.WeightLifting}</Text>
            </View>

            <View className="bg-red-200 p-4 grow rounded-lg shadow-md flex-row gap-4 items-center">
              <View className="p-2 bg-red-400 rounded-xl w-14 items-center">
                <FontAwesome5
                  name="running"
                  size={26}
                  color={Colors.slate[100]}
                />
              </View>
              <Text className="text-3xl font-bold text-red-900">{exerciseCounts.Cardio}</Text>
            </View>
          </View>

          <View className="flex-row grow gap-4">
            <View className="bg-blue-300 p-4 grow rounded-lg shadow-md flex-row gap-4 items-center">
              <View className="p-2 bg-blue-400 rounded-xl w-14 items-center">
                <FontAwesome6
                  name="child-reaching"
                  size={26}
                  color={Colors.slate[100]}
                />
              </View>
              <Text className="text-3xl font-bold text-sky-900">{exerciseCounts.BodyWeight}</Text>
            </View>

            <View className="bg-purple-300 p-4 grow rounded-lg shadow-md flex-row gap-4 items-center">
              <View className="p-2 bg-purple-400 rounded-xl w-14 items-center">
                <FontAwesome6
                  name="person-walking-arrow-loop-left"
                  size={26}
                  color={Colors.slate[100]}
                />
              </View>
              <Text className="text-3xl font-bold text-purple-900">{exerciseCounts.Stretching}</Text>
            </View>
          </View>
        </View>
      </View>
      <Modal
        isVisible={isModalVisible}
        isConfirming={isPending}
        icon="warning"
        title="Delete a workout"
        text="Are you sure you want to delete this workout? This action cannot be undone."
        onConfirm={() => deleteWorkout(props.id)} onClose={closeModal}></Modal>
    </ScrollView>
  );
};

export default WorkoutDetailsScreen;

const computeExerciseCounts = (exercises?: ExerciseEntry[]) => {
  const counts: Record<ExerciseType, number> = {
    [ExerciseType.Weights]: 0,
    [ExerciseType.Cardio]: 0,
    [ExerciseType.Bodyweight]: 0,
    [ExerciseType.Stretching]: 0,
    [ExerciseType.Other]: 0,
  };

  exercises?.forEach((ex) => {
    counts[ex.exerciseType]++;
  })

  return counts
}
