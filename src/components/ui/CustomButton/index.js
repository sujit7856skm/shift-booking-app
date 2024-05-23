import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { SVG } from "../../../assets";

export default function CustomButton({
  label = "Buttton",
  color = "#CBD2E1",
  loading = false,
  redLoader = false,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      style={[styles.btn, { borderColor: color }]}
      onPress={onPress}
    >
      {!loading && <CustomText label={label} color={color} />}
      {loading && !redLoader && <SVG.spinner_green width={25} height={25} />}
      {loading && redLoader && <SVG.spinner_red width={25} height={25} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});
