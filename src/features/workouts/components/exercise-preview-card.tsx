
import { View, Text } from "react-native";
import { ExerciseType } from "../types/exercise-type";
import { SetEntry } from "../types/set-entry";
import FontAwesome6 from "@expo/vector-icons/build/FontAwesome6";
import { Colors } from "@/src/constants/colors";

type ExercisePreviewCardProps = {
  exerciseType: ExerciseType;
  exerciseName: string;
  sets: SetEntry[];
};

const EXERCISE_TYPES_COLORS: Record<ExerciseType, { color: string, icon: string }> = {
  [ExerciseType.Weights]: { color: String(Colors.amber[500]), icon: "dumbbell" },
  [ExerciseType.Bodyweight]: { color: String(Colors.sky[400]), icon: "child-reaching" },
  [ExerciseType.Cardio]: { color: String(Colors.danger[400]), icon: "person-running" },
  [ExerciseType.Stretching]: { color: String(Colors.emerald[400]), icon: "person-walking-arrow-loop-left" },
  [ExerciseType.Other]: { color: String(Colors.slate[400]), icon: "dumbbell" },
};

const ExercisePreviewCard = (props: ExercisePreviewCardProps) => {
  return (
    <View>
      <View
        className="bg-slate-300 p-4 rounded-lg shadow-lg gap-2">
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-2 items-center">
            <View
              style={{ backgroundColor: EXERCISE_TYPES_COLORS[props.exerciseType].color }}
              className="p-2 shadow-md rounded-lg w-10 items-center">
              <FontAwesome6
                name={EXERCISE_TYPES_COLORS[props.exerciseType].icon}
                size={16}
                color={Colors.slate[800]}
              ></FontAwesome6>
            </View>
            <Text className="font-semibold text-lg">
              {props.exerciseName}
            </Text>
          </View>
          <Text className="font-semibold">{props.sets.length} Sets</Text>
        </View>
        <View className="gap-2 p-2 visible">
          {props.sets.map((set, index) => (
            <Text key={index} className="font-semibold">{renderSetTest(set, index, props.exerciseType)}</Text>
          ))}
        </View>
      </View>
    </View>
  );
}

export default ExercisePreviewCard;

const renderSetTest = (set: SetEntry, index: number, exerciseType: ExerciseType) => {
  switch (exerciseType) {
      case ExerciseType.Weights:
        return `Set ${index + 1}: ${set.weight} kg x ${set.reps} reps`;
      case ExerciseType.Cardio:
        return `Set ${index + 1}: ${set.durationMinutes} min | ${set.durationSeconds} sec | ${set.distance} km`;
      case ExerciseType.Bodyweight:
      return `Set ${index + 1}: ${set.weight} kg x ${set.reps} reps`;
      case ExerciseType.Stretching:
        return `Set ${index + 1}: ${set.durationMinutes} min | ${set.durationSeconds} sec`;
      default:
      return null;
    }
}
