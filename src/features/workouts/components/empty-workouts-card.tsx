import { Colors } from "@/src/constants/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

const EmptyWorkoutsCard = () => {
  const router = useRouter();
  
  return (
    <View className=" bg-slate-200 rounded-2xl shadow-xl w-full border border-slate-300">
      <View className="items-center justify-center p-4 gap-4 mt-6">
        <FontAwesome5
          name="dumbbell"
          size={32}
          color={Colors.slate[600]}
        ></FontAwesome5>
        <View className="gap-2">
          <Text className="text-slate-600 text-3xl font-semibold text-center">
            No Workouts Found
          </Text>
          <Text className="text-slate-600 text-xl font-semibold text-center">
            Start logging your fitness journey by clicking on a button below
          </Text>
        </View>
        <Pressable
          onPress={() => router.push("/workouts/workout-form")}
          className="w-[50%] mx-auto rounded-lg bg-yellow-500 shadow-xl p-2 mb-6"
        >
          <Text className="text-slate-600 text-xl font-semibold text-center">
            Add Workout
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EmptyWorkoutsCard;
