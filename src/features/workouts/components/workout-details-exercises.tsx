import React from "react";
import { View, Text } from "react-native";
import { ExerciseEntry } from "../types/exercise-entry";
import FontAwesome6 from "@expo/vector-icons/build/FontAwesome6";
import { Colors } from "@/src/constants/colors";
import { ExerciseType } from "../types/exercise-type";
import { ScrollView } from "react-native-gesture-handler";
import ExercisePreviewCard from "./exercise-preview-card";

type WorkoutDetailsExercisesProps = {
  exercises: ExerciseEntry[];
};

const EXERCISE_TYPES_COLORS: Record<ExerciseType, { color: string, icon: string }> = {
  [ExerciseType.Weights]: { color: String(Colors.amber[500]), icon: "dumbbell" },
  [ExerciseType.Bodyweight]: { color: String(Colors.sky[400]), icon: "child-reaching" },
  [ExerciseType.Cardio]: { color: String(Colors.danger[400]), icon: "person-running" },
  [ExerciseType.Stretching]: { color: String(Colors.emerald[400]), icon: "person-walking-arrow-loop-left" },
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
            <ExercisePreviewCard
              key={ex.id}
              exerciseName={ex.name}
              sets={ex.sets}
              exerciseType={ex.exerciseType}

            ></ExercisePreviewCard>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
