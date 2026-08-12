import { View, Text, ScrollView, Pressable, ActivityIndicator } from "react-native";
import { WeightRecord } from "../types/weight-record";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/src/constants/colors";
import { useEffect, useState } from "react";
import { numberToMonth } from "@/src/constants/months";
import WeightLogCard from "./weight-log-card";
import { Modal } from "@/src/shared/components/modal";
import { useDeleteWeightLog } from "../hooks/use-delete-weight-log";
import useToast from "@/src/core/hooks/use-toast";

type WeightLogsProps = {
  isLoading: boolean;
  availableYears: number[];
  availableMonths: number[];
  weightLogs: WeightRecord[],
};

const WeightLogs = (props: WeightLogsProps) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWeightLogId, setSelectedWeightLogId] = useState<number | null>(null);
  const { deleteWeightLog, isDeleting } = useDeleteWeightLog();
  const toast = useToast();

  const onSelectWeightLog = (id: number) => {
    setSelectedWeightLogId(id);
    setIsModalOpen(true);
  }

  const onDeleteWeightLog = (id: number | null) => {
    if (id === null) {
      toast.showError("No weight log selected");
      return;
    };

    deleteWeightLog(id, {
      onSuccess: () => {
        setIsModalOpen(false);
        toast.showSuccess("Weight log deleted successfully");
      },
      onError: () => toast.showError("Failed to delete weight log"),
      onSettled: () => setIsModalOpen(false)
    });
  }

  useEffect(() => {
    if (props.availableYears.length > 0) {
      setSelectedYear(props.availableYears[0]);
    }
    if (props.availableMonths.length > 0) {
      setSelectedMonth(props.availableMonths[0]);
    }
    console.log("Years: ", props.availableYears)
    console.log("Months: ", props.availableMonths)
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
          {props.weightLogs?.map((log) => (
            <WeightLogCard
              key={log.id}
              id={log.id}
              onClick={() => onSelectWeightLog(log.id)}
              weight={log.weight}
              date={log.createdAt}
              time={log.timeLogged}
            ></WeightLogCard>
          ))}
        </ScrollView>
      </View>

      <Modal
        isConfirming={isDeleting}
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Delete Weight Log | #${selectedWeightLogId}`}
        text='Are you sure you want to delete this weight log? This action cannot be undone.'
        icon='warning'
        onConfirm={() => onDeleteWeightLog(selectedWeightLogId)}></Modal>
    </View>
  );
}

export default WeightLogs;
