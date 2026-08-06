import { Colors } from '@/src/constants/colors';
import { BottomSheetBackdrop, BottomSheetModal as BottomSheetModalComponent, BottomSheetView } from '@gorhom/bottom-sheet';
import React, { ReactNode, Ref, useCallback, useImperativeHandle, useRef } from 'react';

export type BottomSheetRef = {
  open: () => void;
  close: () => void;
}

type BottomSheetModalProps = {
  ref: Ref<BottomSheetRef>;
  snapPoints: string[];
  onDismiss?: () => void;
  children: ReactNode;
}

const BottomSheetModal = (props: BottomSheetModalProps) => {
  const modalRefs = useRef<BottomSheetModalComponent>(null);

  useImperativeHandle(props.ref, () => ({
    open: () => modalRefs.current?.present(),
    close: () => modalRefs.current?.dismiss(),
  }))

  const renderBottomSheetBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );

  return (
    <BottomSheetModalComponent
      ref={modalRefs}
      snapPoints={props.snapPoints}
      enableDynamicSizing={false}
      enablePanDownToClose={true}
      onDismiss={props.onDismiss}
      keyboardBehavior="interactive"
      keyboardBlurBehavior='restore'
      backdropComponent={renderBottomSheetBackdrop}
      backgroundStyle={{ backgroundColor: Colors.yellow[400] }}
    >
      <BottomSheetView style={{ padding: 16 }}>
        {props.children}
      </BottomSheetView>
    </BottomSheetModalComponent>
  );
}
export default BottomSheetModal;
