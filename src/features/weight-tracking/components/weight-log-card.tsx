import { Colors } from "@/src/constants/colors";
import { FontAwesome6 } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";

type WeightLogCardProps = {
  id: number;
  weight: number;
  date: string;
  time: string;
  onClick: () => void;
};

const WeightLogCard = (props: WeightLogCardProps) => {
  return (
    <Pressable
      onPress={props.onClick}
      className="flex-1 px-4 py-2 bg-slate-100 flex-row justify-between items-center rounded-lg gap-4 active:opacity-70 shadow-xl">
      <View className="gap-2">
        <View className="flex-row gap-2 items-center">
          <FontAwesome6 name="weight-scale" size={16} color={Colors.amber[600]} /><Text className="text-lg text-amber-600 font-bold">{props.weight} KG</Text>
        </View>
        <View className="flex-row gap-2 items-center">
          <FontAwesome6 name="calendar" size={16} color={Colors.emerald[800]} /><Text className="text-emerald-800 font-bold">{props.date}</Text>
        </View>
      </View>
      <View className="flex-row gap-2 items-center">
        <FontAwesome6 name="clock" size={16} color={Colors.sky[700]} /><Text className="text-sky-700 font-bold">{props.time}</Text>
      </View>
    </Pressable>
  );
}

export default WeightLogCard;
