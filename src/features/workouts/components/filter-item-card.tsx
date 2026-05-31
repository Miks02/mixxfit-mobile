import { Pressable, Text, View } from "react-native";

type FilterItemCardProps = {
  value: any;
  isSelected: boolean;
  isActive: boolean;
  onPress: () => void;
};

const FilterItemCard = (props: FilterItemCardProps) => {
  return (
    <Pressable
      onPress={() => props.onPress()}
      className={`p-2 ${props.isSelected ? "bg-emerald-500" : props.isActive ? "bg-sky-500" : "bg-amber-500"} w-28 rounded-md items-center active:opacity-50 transition duration-200`}
    >
      <Text className="font-semibold text-slate-100">
        {props.value}
      </Text>
    </Pressable>
  );
}

export default FilterItemCard