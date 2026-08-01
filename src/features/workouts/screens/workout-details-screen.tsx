import { Colors } from "@/src/constants/colors";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Pressable, RefreshControl, ScrollView } from "react-native-gesture-handler";
import useWorkoutDetails from "../hooks/use-workout-details";
import { router } from "expo-router";
import useToast from "@/src/core/hooks/use-toast";
import { getWorkoutError } from "../utilities/workout-errors";

const WorkoutDetailsScreen = (props: { id: number }) => {
  const { details, refetch, isRefetching, isError, isLoading, error } =
    useWorkoutDetails(props.id);

  const toast = useToast();

  useEffect(() => {
    if (isError) {
      const errorMessage = getWorkoutError(error!)
      router.back();
      toast.showError(errorMessage);
    }
  }, [isError, toast, error])

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

        <View className="bg-red-600 p-2 rounded-lg justify-center self-center active:opacity-50 transition duration-200">
          <Pressable>
            <FontAwesome6 name='trash-can' size={24} color='white'></FontAwesome6>
          </Pressable>
        </View>
      </View>

      <View className="rounded-2xl bg-slate-200 shadow-xl p-4 gap-4">
        <View className="gap-4">
          <View className="flex-row justify-between">
            <Text className="text-slate-800 text-xl font-bold">Exercises (3)</Text>
            <Text className="text-slate-800 text-xl font-bold">Sets (12)</Text>
          </View>

          <View className="gap-4">
            <View className="bg-slate-300 p-4 rounded-lg shadow-lg gap-2">
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-2 items-center">
                  <View className="p-2 bg-amber-500 shadow-md rounded-lg">
                    <FontAwesome6
                      name={"dumbbell"}
                      size={16}
                      color={Colors.slate[800]}
                    ></FontAwesome6>
                  </View>
                  <Text className="font-semibold text-lg">
                    Bench Press (Dumbell)
                  </Text>
                </View>
                <Text className="font-semibold">3 Sets</Text>
              </View>
              <View className="gap-2 p-2 visible">
                  <Text className="font-semibold">Set 1: 10 kg x 16 reps</Text>
                  <Text className="font-semibold">Set 2: 10 kg x 16 reps</Text>
                  <Text className="font-semibold">Set 3: 10 kg x 16 reps</Text>
                  <Text className="font-semibold">Set 4: 10 kg x 16 reps</Text>
              </View>
            </View>

            <View className="bg-slate-300 p-4 rounded-lg shadow-lg gap-2">
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-2 items-center">
                  <View className="p-2 bg-amber-500 shadow-md rounded-lg">
                    <FontAwesome6
                      name={"dumbbell"}
                      size={16}
                      color={Colors.slate[800]}
                    ></FontAwesome6>
                  </View>
                  <Text className="font-semibold text-lg">
                    Shoulder Press (Dumbell)
                  </Text>
                </View>
                <Text className="font-semibold">3 Sets</Text>
              </View>
              <View className="gap-2 p-2 visible">
                  <Text className="font-semibold">Set 1: 10 kg x 16 reps</Text>
                  <Text className="font-semibold">Set 2: 10 kg x 16 reps</Text>
                  <Text className="font-semibold">Set 3: 10 kg x 16 reps</Text>
                  <Text className="font-semibold">Set 4: 10 kg x 16 reps</Text>
              </View>
            </View>

            <View className="bg-slate-300 p-4 rounded-lg shadow-lg gap-2">
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-2 items-center">
                  <View className="p-2 bg-amber-500 shadow-md rounded-lg">
                    <FontAwesome6
                      name={"dumbbell"}
                      size={16}
                      color={Colors.slate[800]}
                    ></FontAwesome6>
                  </View>
                  <Text className="font-semibold text-lg">
                    Overhead Press (Barbell)
                  </Text>
                </View>
                <Text className="font-semibold">3 Sets</Text>
              </View>
              <View className="gap-2 p-2 visible">
                  <Text className="font-semibold">Set 1: 10 kg x 16 reps</Text>
                  <Text className="font-semibold">Set 2: 10 kg x 16 reps</Text>
                  <Text className="font-semibold">Set 3: 10 kg x 16 reps</Text>
                  <Text className="font-semibold">Set 4: 10 kg x 16 reps</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="bg-slate-200 gap-4 shadow-xl p-4 rounded-lg">
        <Text className="font-semibold text-xl">Notes</Text>

        <View className="bg-slate-300/70 p-4 rounded-lg shadow-md">
          <Text className="text-lg text-slate-900 font-semibold">
            These are some placeholder workout notes that are used for testing purposes only
          </Text>
        </View>


      </View>

      <View className="bg-slate-200 gap-4 shadow-xl p-4 rounded-lg">
        <Text className="font-semibold text-xl">Exercise Types</Text>

        <View className="flex-row flex-wrap gap-4">
          <View className="flex-row grow gap-4">
            <View className="bg-amber-200 p-4 grow rounded-lg shadow-md flex-row gap-4 items-center">
              <View className="p-2 bg-amber-400 rounded-xl w-14 items-center">
                <FontAwesome5 name="dumbbell" size={26} color={Colors.slate[100]} />
              </View>
              <Text className="text-3xl font-bold text-amber-900">3</Text>
            </View>

            <View className="bg-red-200 p-4 grow rounded-lg shadow-md flex-row gap-4 items-center">
              <View className="p-2 bg-red-400 rounded-xl w-14 items-center">
                <FontAwesome5 name="running" size={26} color={Colors.slate[100]} />
              </View>
              <Text className="text-3xl font-bold text-red-900">0</Text>
            </View>
          </View>

          <View className="flex-row grow gap-4">
            <View className="bg-blue-300 p-4 grow rounded-lg shadow-md flex-row gap-4 items-center">
              <View className="p-2 bg-blue-400 rounded-xl w-14 items-center">
                <FontAwesome6 name="child-reaching" size={26} color={Colors.slate[100]} />
              </View>
              <Text className="text-3xl font-bold text-sky-900">0</Text>
            </View>

            <View className="bg-purple-300 p-4 grow rounded-lg shadow-md flex-row gap-4 items-center">
              <View className="p-2 bg-purple-400 rounded-xl w-14 items-center">
                <FontAwesome6 name="person-walking-arrow-loop-left" size={26} color={Colors.slate[100]} />
              </View>
              <Text className="text-3xl font-bold text-purple-900">0</Text>
            </View>
          </View>


        </View>
      </View>
    </ScrollView>
  );
};

export default WorkoutDetailsScreen;
