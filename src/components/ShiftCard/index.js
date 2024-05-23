import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useMemo } from "react";
import CustomText from "../ui/CustomText";
import { dateUtils } from "../../utils/dateUtils";
import CustomButton from "../ui/CustomButton";
import { useUpdateShiftMutation } from "../../sevices/api";

export default function ShiftCard({ shift, isMyShift = false }) {
  const [updateShift, { isSuccess, isLoading, error }] =
    useUpdateShiftMutation();

  const isPassed = useMemo(() => {
    return new Date(shift?.startTime) < new Date();
  }, [shift]);

  const isBooked = useMemo(() => {
    return shift?.booked;
  }, [shift?.booked]);

  const btnColor = useMemo(() => {
    return isPassed ? "#CBD2E1" : isBooked ? "#E2006A" : "#16A64D";
  }, [isBooked, isPassed]);

  const btnLabel = useMemo(() => {
    return isLoading ? "Loading" : isBooked ? "Cancel" : "Book";
  });

  const handleOnBtnPress = useCallback(() => {
    updateShift({ ...shift, booked: !isBooked });
  }, [shift, isBooked]);

  return (
    <View style={styles.container}>
      <View>
        <CustomText
          label={`${dateUtils?.formaTime(
            shift?.startTime
          )} - ${dateUtils?.formaTime(shift?.endTime)}`}
        />
        <CustomText label={shift?.area} />
      </View>
      <CustomButton
        disabled={isPassed}
        label={btnLabel}
        color={btnColor}
        loading={isLoading}
        redLoader={isBooked}
        onPress={handleOnBtnPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#CBD2E1",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});
