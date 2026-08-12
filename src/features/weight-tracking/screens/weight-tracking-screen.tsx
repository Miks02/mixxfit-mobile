import { Colors } from "@/src/constants/colors";
import useUser from "@/src/core/hooks/use-user";
import { FontAwesome6 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View, useWindowDimensions } from "react-native";
import QuickLog from "../components/quick-log";
import SetTarget from "../components/set-target";
import WeightLogs from "../components/weight-logs";
import { useWeightListDetails } from "../hooks/use-weight-list-details";
import { useWeightSummary } from "../hooks/use-weight-summary";
import { useAuthStore } from "../../auth/store/auth-store";
const WeightTrackingScreen = () => {
  const { width } = useWindowDimensions();
  const isWideScreen = width >= 760;
  const [isQuickLogOpen, setIsQuickLogOpen] = useState(false);
  const [isSetTargetOpen, setIsSetTargetOpen] = useState(false);

  const targetWeight = useUser().user?.targetWeight;
  const { isLoading, isError, error, weightSummary } = useWeightSummary(targetWeight!, null, null);
  const { weightListDetails, isLoading: weightListDetailsLoading } = useWeightListDetails(null, null);
  const [availableMonths, setAvailableMonths] = useState<number[]>([]);
  const [availableYears, setAvailableYears] = useState<number[]>([]);

  useEffect(() => {
    if(weightSummary && weightListDetails) {
      setAvailableMonths(weightListDetails.months);
      setAvailableYears(weightSummary.years);
    }
  }, [weightSummary, weightListDetails, availableMonths, availableYears]);

  return (
    <View className="flex-1">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 12, paddingBottom: 96, gap: 12 }}
      >
        <View className="gap-4 flex-1">
          <View className={isWideScreen ? "flex-row gap-4" : "gap-4"}>
            <View className="bg-slate-100 border border-slate-300 p-4 gap-4 rounded-2xl shadow-sm flex-1">
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-3 items-center">
                  <View className="w-10 h-10 rounded-xl bg-violet-100 items-center justify-center">
                    <FontAwesome6 name="scale-unbalanced" size={18} color={Colors.violet[500]} />
                  </View>
                  <View>
                    <Text className="text-lg text-slate-800 font-bold">Current Weight</Text>
                    <Text className="text-xs text-slate-500 font-semibold">Latest body check</Text>
                  </View>
                </View>

                <Pressable
                  onPress={() => setIsQuickLogOpen(true)}
                  className="px-3 py-2 bg-amber-400 rounded-xl shadow-sm active:opacity-70"
                >
                  <Text className="font-semibold text-sm text-slate-800">Quick Log</Text>
                </Pressable>
              </View>

              <View className="flex-row items-end gap-2">
                <Text className="text-3xl text-slate-900 font-extrabold">{weightSummary?.currentWeight?.weight}</Text>
                <Text className="text-lg text-slate-600 font-semibold pb-1">kg</Text>
                <View className="ml-auto px-2 py-1 rounded-full">
                  <Text className="text-xs font-bold text-emerald-700">-1.4 this month</Text>
                </View>
              </View>

              <View className="flex-row justify-between items-center border-t border-slate-300 pt-3">
                <Text className="text-slate-500 font-semibold">Last measured</Text>
                <Text className="text-slate-700 font-bold">{ weightSummary?.currentWeight.createdAt }</Text>
              </View>
            </View>

            <View className="bg-slate-100 border border-slate-300 p-4 gap-4 rounded-2xl shadow-sm flex-1">
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-3 items-center">
                  <View className="w-10 h-10 rounded-xl bg-amber-100 items-center justify-center">
                    <FontAwesome6 name="bullseye" size={18} color="#b45309" />
                  </View>
                  <View>
                    <Text className="text-lg text-slate-800 font-bold">Target Weight</Text>
                    <Text className="text-xs text-slate-500 font-semibold">Goal in progress</Text>
                  </View>
                </View>

                <Pressable
                  onPress={() => setIsSetTargetOpen(true)}
                  className="px-3 py-2 bg-amber-400 rounded-xl shadow-sm active:opacity-70">
                  <Text className="font-semibold text-slate-800 text-sm">Set Target</Text>
                </Pressable>
              </View>

              <View className="flex-row items-end gap-2">
                {targetWeight ? (
                  <>
                    <Text className="text-3xl text-slate-900 font-extrabold">{targetWeight}</Text>
                    <Text className="text-lg text-slate-600 font-semibold pb-1">kg</Text>
                  </>
                ) : <Text className="text-lg text-slate-600 font-semibold pb-1">Not Set</Text>}
                <View className="ml-auto px-2 py-1 rounded-full">
                  <Text className="text-xs font-bold text-sky-700">13 kg remaining</Text>
                </View>
              </View>
            </View>
          </View>
          <WeightLogs
            isLoading={weightListDetailsLoading}
            availableYears={availableYears}
            availableMonths={availableMonths}
            weightLogs={weightListDetails?.weightLogs ?? []} />
        </View>
      </ScrollView>

      <QuickLog onDismiss={() => setIsQuickLogOpen(false)} isOpen={isQuickLogOpen}></QuickLog>
      <SetTarget
        isOpen={isSetTargetOpen}
        onDismiss={() => setIsSetTargetOpen(false)}
      ></SetTarget>

    </View>
  );
};

export default WeightTrackingScreen;
