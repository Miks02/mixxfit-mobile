import React from "react";
import { View, Text } from "react-native";
import { ExerciseEntry } from "../types/exercise-entry";
import FontAwesome6 from "@expo/vector-icons/build/FontAwesome6";
import { Colors } from "@/src/constants/colors";
import { ExerciseType } from "../types/exercise-type";
import { ScrollView } from "react-native-gesture-handler";

type WorkoutDetailsExercisesProps = {
  exercises: ExerciseEntry[];
};

const EXERCISE_TYPES_COLORS: Record<ExerciseType, { color: string, icon: string }> = {
  [ExerciseType.Weights]: { color: String(Colors.amber[500]), icon: "dumbbell" },
  [ExerciseType.Bodyweight]: { color: String(Colors.sky[400]), icon: "child-reaching" },
  [ExerciseType.Cardio]: { color: String(Colors.sky[400]), icon: "running" },
  [ExerciseType.Stretching]: { color: String(Colors.sky[400]), icon: "stretching" },
  [ExerciseType.Other]: { color: String(Colors.slate[400]), icon: "dumbbell" },
};

export default function WorkoutDetailsExercises(
  props: WorkoutDetailsExercisesProps,
) {

  const totalSets = props.exercises.reduce((sum, x) => sum + x.sets.length, 0);
  
  return (
    <View
      className="rounded-2xl bg-slate-200 shadow-xl p-4 gap-4">
      <View className="gap-4  h-100">
        <View className="flex-row justify-between">
          <Text className="text-slate-800 text-xl font-bold">
            Exercises ({props.exercises.length})
          </Text>
          <Text className="text-slate-800 text-xl font-bold">Sets ({totalSets})</Text>
        </View>

        <ScrollView
          style={{maxHeight: 500}}
          contentContainerStyle={{ gap: 12 }}
          showsVerticalScrollIndicator={false}
          >
          {props.exercises.map((ex) => (
            <View
              key={ex.id}
              className="bg-slate-300 p-4 rounded-lg shadow-lg gap-2">
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-2 items-center">
                  <View
                    style={{ backgroundColor: EXERCISE_TYPES_COLORS[ex.exerciseType].color }}
                    className="p-2 shadow-md rounded-lg w-10 items-center">
                    <FontAwesome6
                      name={EXERCISE_TYPES_COLORS[ex.exerciseType].icon}
                      size={16}
                      color={Colors.slate[800]}
                    ></FontAwesome6>
                  </View>
                  <Text className="font-semibold text-lg">
                    {ex.name}
                  </Text>
                </View>
                <Text className="font-semibold">{ex.sets.length} Sets</Text>
              </View>
              <View className="gap-2 p-2 visible">
                {ex.sets.map((set, index) => (
                  <Text key={index} className="font-semibold">Set {index + 1}: {set.weight} kg x {set.reps} reps</Text>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
