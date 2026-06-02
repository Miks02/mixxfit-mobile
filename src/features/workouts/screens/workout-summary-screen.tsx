
import { Colors } from "@/src/constants/colors";
import { numberToMonth } from "@/src/constants/months";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { ExerciseType } from "../types/exercise-type";
import { WorkoutSummary } from "../types/workout-summary";

const workoutSummary: WorkoutSummary = {
  workoutCount: 42,
  exerciseCount: 186,
  lastWorkoutDate: "2026-06-01",
  favoriteExerciseType: ExerciseType.Weights,
  workoutStreak: 8,
  mostActiveMonths: [
    { month: 6, year: 2026, workoutCount: 15 },
    { month: 5, year: 2026, workoutCount: 13 },
    { month: 4, year: 2026, workoutCount: 10 },
    { month: 3, year: 2026, workoutCount: 4 },
  ],
};

const exerciseTypeToLabel = (type: ExerciseType): string => {
  if (type === ExerciseType.Weights) return "Weight Lifting";
  if (type === ExerciseType.Bodyweight) return "Bodyweight";
  if (type === ExerciseType.Cardio) return "Cardio";
  if (type === ExerciseType.Stretching) return "Stretching";
  return "Other";
};

const WorkoutSummaryScreen = () => {
  return (
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 12, paddingBottom: 96, gap: 12 }}
    >
      <View className="rounded-2xl bg-slate-200 shadow-xl p-5 gap-5">
        <View className="gap-1">
          <Text className="text-slate-800 text-3xl font-bold">
            Workout Summary
          </Text>
          <Text className="text-slate-600 text-base font-semibold">
            Snapshot of your training consistency and activity
          </Text>
        </View>

        <View className="flex-row gap-3 flex-wrap">
          <View className="grow min-w-[160px] rounded-xl bg-amber-100 p-4 gap-2">
            <View className="flex-row items-center gap-2">
              <FontAwesome5
                name="dumbbell"
                size={14}
                color={Colors.amber[700]}
              ></FontAwesome5>
              <Text className="text-amber-800  font-bold">
                Workouts
              </Text>
            </View>
            <Text className="text-amber-900 text-3xl font-bold">
              {workoutSummary.workoutCount}
            </Text>
          </View>

          <View className="grow min-w-[160px] rounded-xl bg-sky-100 p-4 gap-2">
            <View className="flex-row items-center gap-2">
              <FontAwesome6
                name="dumbbell"
                size={14}
                color={Colors.sky[700]}
              ></FontAwesome6>
              <Text className="text-sky-800  font-bold">Exercises</Text>
            </View>
            <Text className="text-sky-900 text-3xl font-bold">
              {workoutSummary.exerciseCount}
            </Text>
          </View>
        </View>

        <View className="rounded-xl bg-zinc-200 border border-slate-300 p-4 gap-3">
          <View className="flex-row items-center gap-2">
            <FontAwesome5
              name="calendar-alt"
              size={16}
              color={Colors.slate[700]}
            ></FontAwesome5>
            <Text className="text-slate-700 font-bold">Last Workout</Text>
          </View>
          <Text className="text-slate-900 text-xl font-bold">
            {workoutSummary.lastWorkoutDate}
          </Text>
        </View>

        <View className="flex-row gap-3 flex-wrap">
          <View className="grow min-w-[160px] rounded-xl bg-red-100 p-4 gap-2">
            <View className="flex-row items-center gap-2">
              <FontAwesome5
                name="star"
                size={16}
                color={Colors.emerald[700]}
              ></FontAwesome5>
              <Text className="text-emerald-800  font-bold">
                Favorite Type
              </Text>
            </View>
            <Text className="text-emerald-900 text-2xl font-bold">
              {exerciseTypeToLabel(workoutSummary.favoriteExerciseType)}
            </Text>
          </View>

          <View className="grow min-w-[160px] rounded-xl bg-orange-200/80 p-4 gap-2">
            <View className="flex-row items-center gap-2">
              <FontAwesome5
                name="bolt"
                size={16}
                color={Colors.slate[700]}
              ></FontAwesome5>
              <Text className="text-gray-700 font-bold">Streak</Text>
            </View>
            <Text className="text-gray-900 text-2xl font-bold">
              {workoutSummary.workoutStreak} days
            </Text>
          </View>
        </View>
      </View>

      <View className="rounded-2xl bg-slate-200 shadow-xl p-5 gap-4">
        <View className="flex-row items-center gap-2">
          <FontAwesome6
            name="chart-column"
            size={16}
            color={Colors.slate[700]}
          ></FontAwesome6>
          <Text className="text-slate-800 text-xl font-bold">
            Workout Trend by Month
          </Text>
        </View>
        <View className="h-52 rounded-xl border-2 border-dashed border-slate-400 bg-slate-100 items-center justify-center px-6">
          <Text className="text-slate-700 text-lg font-bold text-center">
            Bar chart placeholder
          </Text>
          <Text className="text-slate-500 text-sm font-semibold text-center mt-1">
            Reserved space for monthly workout chart
          </Text>
        </View>
      </View>

      <View className="rounded-2xl bg-slate-200 shadow-xl p-5 gap-4">
        <View className="flex-row items-center gap-2">
          <FontAwesome5
            name="calendar-check"
            size={14}
            color={Colors.slate[700]}
          ></FontAwesome5>
          <Text className="text-slate-800 text-xl font-bold">Most Active Months</Text>
        </View>

        <View className="gap-3">
          {workoutSummary.mostActiveMonths.map((item) => (
            <View
              key={`${item.year}-${item.month}`}
              className="rounded-xl bg-slate-100 border border-slate-300 p-4"
            >
              <View className="flex-row justify-between items-center gap-3">
                <Text className="text-slate-800 text-lg font-bold">
                  {numberToMonth(item.month)} {item.year}
                </Text>
                <View className="bg-emerald-100 px-3 py-2 rounded-lg flex-row items-center gap-2">
                  <FontAwesome5
                    name="dumbbell"
                    size={12}
                    color={Colors.emerald[700]}
                  ></FontAwesome5>
                  <Text className="text-emerald-800 text-sm font-bold">
                    {item.workoutCount} workouts
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default WorkoutSummaryScreen;
