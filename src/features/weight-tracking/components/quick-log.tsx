import useToast from "@/src/core/hooks/use-toast";
import BottomSheetModal, {
  BottomSheetRef,
} from "@/src/shared/components/bottom-sheet-modal";
import FontAwesome6 from "@expo/vector-icons/build/FontAwesome6";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {z} from "zod";
import { useQuickLog } from "../hooks/use-quick-logs";
import { QuickLogFormData, QuickLogSchema } from "../schemas/quick-log-schema";



const SNAP_POINTS = ["40%"];
const CURRENT_TIME = new Date().toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

type QuickLogProps = {
  isOpen: boolean;
  onDismiss: () => void;
};

type QuickLogInput = z.input<typeof QuickLogSchema>;
type QuickLogOutput = z.output<typeof QuickLogSchema>;


const QuickLog = (props: QuickLogProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<QuickLogInput, any, QuickLogOutput>({ resolver: zodResolver(QuickLogSchema) });
  const [isTimePickerVisible, setTimePickerVisibility] = useState<boolean>(false);
  const sheetRef = useRef<BottomSheetRef>(null);
  const { logWeight, isPending } = useQuickLog();
  const toast = useToast();

  const openSheet = () => {
    sheetRef.current?.open()
  };

  useEffect(() => {
    if (props.isOpen) {
      openSheet();
    }
  }, [props.isOpen]);

  const onSubmit = (data: QuickLogFormData) => {
    logWeight(data, {
      onSettled: () => {
        sheetRef?.current?.close();
        reset();
      },
      onSuccess: () => {
        toast.showSuccess("Weight log saved successfully!");
      },
      onError: (err) => {
        if (err.errorCode === "WeightEntry.LimitReached") {
          toast.showInfo("You have reached the weight entry limit for today.")
          return;
        }
        toast.showError("Failed to save weight log. Please try again.");
      }
    });

  };

  return (
    <BottomSheetModal
      onDismiss={props.onDismiss}
      ref={sheetRef}
      snapPoints={SNAP_POINTS}
    >
      <View className="items-center gap-4">
        <Text className="text-xl font-semibold text-slate-800">Quick log</Text>
        <View className="w-full gap-3">
          <View className="flex-row flex-1 w-full gap-4 items-center">
            <View className="gap-1 grow">
              <Text className="text-sm font-semibold text-slate-600 ml-1">
                Weight
              </Text>
              <View
                className={`flex-row items-center gap-2 bg-slate-200/50 rounded-lg px-3 ${errors.weight ? "border border-red-500" : ""}`}
              >
                <FontAwesome6 name="weight-scale" size={14} color="#64748b" />
                <Controller
                  control={control}
                  name="weight"
                  defaultValue={0}
                  render={({ field: { onChange, value } }) => (
                    <BottomSheetTextInput
                      className="flex-1 py-2.5 text-slate-800"
                      onChangeText={onChange}
                      value={value ? String(value) : undefined}

                      keyboardType="number-pad"
                      placeholder="Enter weight (kg)..."
                    />
                  )}
                ></Controller>
              </View>
              {errors.weight && (
                <Text style={{ color: "red" }}>{errors.weight.message}</Text>
              )}
            </View>
            <Controller
              control={control}
              name="time"
              defaultValue={CURRENT_TIME}
              render={({ field: { onChange, value } }) => (
                <>
                  <Pressable
                    onPress={() => setTimePickerVisibility(true)}
                    className="gap-2 self-center rounded-lg px-3 py-2.5 flex-row items-center justify-between active:bg-slate-200"
                  >
                    <View className="flex-row items-center gap-2">
                      <FontAwesome6 name="clock" size={14} color="#64748b" />
                      <Text className="text-slate-800 text-base">{value}</Text>
                    </View>
                    <Text className="text-xs font-bold text-amber-600">Change</Text>
                  </Pressable>

                  <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={(date) => {
                      const formatted = date.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      });
                      onChange(formatted);
                      setTimePickerVisibility(false);
                    }}
                    onCancel={() => setTimePickerVisibility(false)}
                  />
                </>
              )}
            />
          </View>

          <View className="gap-1">
            <Text className="text-sm font-semibold text-slate-600 ml-1">
              Notes
            </Text>
            <View
              className={`flex-row items-start gap-2 bg-slate-200/50 rounded-lg px-3 py-2.5 ${errors.notes ? "border border-red-500" : ""}`}
            >
              <FontAwesome6
                name="note-sticky"
                size={14}
                color="#64748b"
                style={{ marginTop: 3 }}
              />
              <Controller
                control={control}
                name="notes"
                render={({ field: { onChange, value } }) => (
                  <BottomSheetTextInput
                    className="flex-1 text-slate-800"
                    onChangeText={onChange}
                    value={value}
                    placeholder="Add a note (optional)..."
                    multiline
                    numberOfLines={3}
                    style={{ minHeight: 60, textAlignVertical: "top" }}
                  />
                )}
              ></Controller>
            </View>
            {errors.notes && (
              <Text style={{ color: "red" }}>{errors.notes.message}</Text>
            )}
          </View>



          <Pressable
            className="bg-emerald-400 rounded-lg px-3 py-2 flex-row items-center justify-between active:opacity-70 mx-auto"
            disabled={isPending}
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="font-semibold text-white">Save</Text>
          </Pressable>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default QuickLog;
