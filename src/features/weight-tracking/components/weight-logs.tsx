import { View, Text, ScrollView, Pressable, ActivityIndicator } from "react-native";
import { WeightRecord } from "../types/weight-record";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/src/constants/colors";
import { useEffect, useState } from "react";
import { numberToMonth } from "@/src/constants/months";
import WeightLogCard from "./weight-log-card";

type WeightLogsProps = {
  isLoading: boolean;
  availableYears: number[];
  availableMonths: number[];
  weightLogs: WeightRecord[],
};

const WeightLogs = (props: WeightLogsProps) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  useEffect(() => {
    if (selectedYear === null && props.availableYears.length > 0) {
      setSelectedYear(props.availableYears[0]);
    }
    if (selectedMonth === null && props.availableMonths.length > 0) {
      setSelectedMonth(props.availableMonths[0]);
    }
  }, [props.availableYears, props.availableMonths, selectedYear, selectedMonth])


  if (props.isLoading) {
    return <ActivityIndicator size="large" color={Colors.yellow[400]} />
  }

  return (
    <View className="bg-slate-200 p-4 rounded-lg shadow-lg">
      <View className="flex-row justify-between w-full items-center">
        <View>
          <Text className="text-lg font-semibold text-slate-800">Weight logs</Text>
          <Text className="text-sm text-slate-600 font-semibold">{ selectedYear !== null && selectedMonth !== null ? `${numberToMonth(selectedMonth)} ${selectedYear}` : '' }</Text>
        </View>
        <Pressable
          onPress={() => {}}
          className="w-10 h-10 rounded-xl bg-slate-100 items-center justify-center active:opacity-70"
        >
          <FontAwesome5 name="filter" size={15} color={Colors.sky[600]} />
        </Pressable>
      </View>
      <View className="bg-slate-300 p-2 mt-2 rounded-lg max-h-300">
        {props.weightLogs?.length === 0 && <Text className="text-center text-slate-600">No weight logs available</Text>}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: 300 }}
          contentContainerStyle={{ gap: 12 }}
        >
          {props.weightLogs?.map((log, index) => (
            <WeightLogCard
              key={index}
              weight={log.weight}
              date={log.createdAt}
              time={log.timeLogged}
            ></WeightLogCard>
          ))}
        </ScrollView>
      </View>
      
    </View>
  );
}

export default WeightLogs;
