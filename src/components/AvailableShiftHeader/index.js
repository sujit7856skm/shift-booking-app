import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../ui/CustomText";

export default function AvailableShiftHeader({
  shiftArea,
  selected,
  onShiftSelect = () => {},
}) {
  const handleOnPress = (area) => {
    onShiftSelect(selected === area ? "" : area);
  };

  return (
    <View style={styles.container}>
      {Object?.keys(shiftArea)
        ?.sort()
        ?.map((area) => {
          return (
            <TouchableOpacity key={area} onPress={() => handleOnPress(area)}>
              <CustomText
                color={selected === area ? "#4F6c92" : "#CBD2E1"}
                label={`${area}(${shiftArea[area]?.length})`}
              />
            </TouchableOpacity>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
