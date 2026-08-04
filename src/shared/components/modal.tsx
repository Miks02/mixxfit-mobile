import { Colors } from "@/src/constants/colors";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, Pressable, Modal as RnModal, Text, View } from "react-native";

type ModalProps = {
  isVisible: boolean,
  title: string,
  text: string,
  icon: 'info' | 'danger' | 'warning' | 'success',
  onConfirm: () => void,
  onClose: () => void,
  isConfirming: boolean,
}

const ICON_MAP: Record<'info' | 'danger' | 'warning' | 'success', {color: string, name: string}> = {
  info: { color: Colors.sky[500], name: 'info-circle' },
  danger: { color: Colors.danger[500], name: 'exclamation-circle' },
  warning: { color: Colors.amber[500], name: 'exclamation-triangle' },
  success: { color: Colors.emerald[700], name: 'check-circle' },
};

export const Modal = (props: ModalProps) => {
  return (
    <RnModal
      visible={props.isVisible}
      statusBarTranslucent={true}
      transparent={true}
      onRequestClose={props.onClose}
      animationType="fade"

    >
      <View className="flex-1 justify-center p-8 bg-slate-500/50 backdrop-blur-xl">
        <View className="bg-slate-200 rounded-lg gap-4 shadow-xl" style={{ height: 'auto' }}>
          <View className="flex-row justify-between bg-amber-400 p-2 items-center rounded-t-lg">
            <Text className="font-semibold text-slate-800 text-lg">{props.title}</Text>
            <Pressable onPress={props.onClose}>
              <FontAwesome6 name="xmark" size={24} color={Colors.danger[700]}></FontAwesome6>
            </Pressable>
          </View>
          <View className="justify-center items-center p-4 gap-4">
            <FontAwesome5 name={ICON_MAP[props.icon].name} size={44} color={ICON_MAP[props.icon].color}></FontAwesome5>
            <Text className="text-xl font-semibold text-slate-800 text-center">{props.text}</Text>
          </View>
          <View className="my-auto mx-auto flex-row gap-4 mb-4">
            <Pressable onPress={props.onConfirm}
              disabled={props.isConfirming}
              className="bg-emerald-400 px-4 py-2 rounded-lg shadow-lg active:opacity-70 transition duration-200 flex-row justify-between gap-2 items-center disabled:opacity-50">
              {props.isConfirming && <ActivityIndicator color={Colors.amber[400]} size={16}></ActivityIndicator>}
              <Text className="text-white font-semibold">Confirm</Text>
            </Pressable>
            <Pressable onPress={props.onClose} className="bg-red-500 px-4 py-2 rounded-lg shadow-lg active:opacity-70 transition duration-200">
              <Text className="text-white font-semibold">Close</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </RnModal>
  );
}
