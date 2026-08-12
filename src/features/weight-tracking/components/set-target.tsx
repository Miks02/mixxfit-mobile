import BottomSheetModal, {
  BottomSheetRef,
} from "@/src/shared/components/bottom-sheet-modal";
import React, { useEffect, useRef } from "react";
import { View, Text, Pressable } from "react-native";
import { SetTargetSchema } from "../schemas/set-target-schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { FontAwesome6 } from "@expo/vector-icons";
import { useSetTargetWeight } from "../hooks/use-set-target-weight";
import useToast from "@/src/core/hooks/use-toast";

const SNAP_POINTS = ["30%"];

type SetTargetProps = {
  isOpen: boolean;
  onDismiss: () => void;
};
type SetTargetInput = z.input<typeof SetTargetSchema>;
type SetTargetOutput = z.output<typeof SetTargetSchema>;

const SetTarget = (props: SetTargetProps) => {
  const sheetRef = useRef<BottomSheetRef>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SetTargetInput, any, SetTargetOutput>({
    resolver: zodResolver(SetTargetSchema),
  });
  const { setTargetWeight, isPending } = useSetTargetWeight();
  const toast = useToast();

  useEffect(() => {
    if (props.isOpen) {
      sheetRef.current?.open();
    }
  }, [props.isOpen]);

  const onSubmit = (data: SetTargetOutput) => {
    setTargetWeight(data.targetWeight as number, {
      onSuccess: () => {
        toast.showSuccess("Target weight set successfully.");
      },
      onError: () => {
        toast.showError("Failed to set target weight. Please try again");
      },
      onSettled: () => {
        sheetRef?.current?.close();
      },
    });
  };

  const clearTargetWeight = () => {
    setTargetWeight(null, {
      onSuccess: () => {
        toast.showSuccess("Target weight cleared successfully.");
      },
      onError: () => {
        toast.showError("Failed to clear target weight. Please try again");
      },
      onSettled: () => {
        sheetRef?.current?.close();
      },
    });
  };

  return (
    <BottomSheetModal
      onDismiss={props.onDismiss}
      ref={sheetRef}
      snapPoints={SNAP_POINTS}
    >
      <View className="items-center gap-4">
        <Text className="text-xl font-semibold text-slate-800">Set target</Text>
        <View className="w-full gap-3">
          <View className="grow gap-1">
            <Text className="text-sm font-semibold text-slate-600 ml-1">
              Target weight
            </Text>
            <View
              className={`flex-row items-center gap-2 bg-slate-200/50 rounded-lg px-3 ${errors.targetWeight ? "border border-red-500" : ""}`}
            >
              <FontAwesome6
                name="bullseye"
                size={14}
                color="#64748b"
              ></FontAwesome6>
              <Controller
                control={control}
                name="targetWeight"
                defaultValue={0}
                render={({ field: { onChange, onBlur, value } }) => (
                  <BottomSheetTextInput
                    className="flex-1 py-2.5 text-slate-800"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    keyboardType="numeric"

                  />
                )}
              />
            </View>
          </View>
          {errors.targetWeight && (
            <Text style={{ color: "red" }}>{errors.targetWeight.message}</Text>
          )}

          <View className="flex-row gap-2 justify-center">
            <Pressable
              className="bg-emerald-400 rounded-lg px-3 py-2 flex-row items-center justify-between active:opacity-70"
              onPress={handleSubmit(onSubmit)}
            >
              <Text className="font-semibold text-white">Save</Text>
            </Pressable>
            <Pressable
              className="bg-red-400 rounded-lg px-3 py-2 flex-row items-center justify-between active:opacity-70"
              onPress={clearTargetWeight}
            >
              <Text className="font-semibold text-white">Clear</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default SetTarget;
