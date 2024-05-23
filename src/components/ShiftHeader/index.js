import { View, StyleSheet } from "react-native";
import React from "react";
import CustomText from "../ui/CustomText";

export default function ShiftHeader({ title, index }) {
  return (
    <View
      style={[styles.shiftHeaderContainer, index === 0 && styles.borderTop]}
    >
      <CustomText label={title} color="#4F6C92" />
    </View>
  );
}

const styles = StyleSheet.create({
  shiftHeaderContainer: {
    backgroundColor: "#F1F4F8",
    padding: 10,
    justifyContent: "center",
    borderBottomColor: "#CBD2E1",
    borderBottomWidth: 1,
  },
  borderTop: {
    borderTopColor: "#CBD2E1",
    borderTopWidth: 1,
  },
});
