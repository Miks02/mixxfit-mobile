import React from "react";
import { Text, View, Pressable } from "react-native";

type WorkoutCardProps = {
  title: string;
  date: string;
  exerciseCount: number;
  onPress: () => void;
};

const WorkoutCard = ({ title, date, exerciseCount, onPress }: WorkoutCardProps) => {
  
  return (
    <Pressable className="bg-slate-100 p-4 w-full rounded-xl shadow-lg active:bg-amber-400" onPress={onPress}>
        <View className="flex-row justify-between w-full">
          <View className="gap-2">
            <Text className="text-xl font-semibold text-slate-800">{title}</Text>
            <Text className="text-xl font-semibold text-emerald-700">{date}</Text>
          </View>
          <Text className="text-amber-600 font-semibold self-center">
            {exerciseCount} {exerciseCount > 1 ? "exercises" : "exercise"}
          </Text>
        </View>
    </Pressable>


  );
};

export default WorkoutCard;
