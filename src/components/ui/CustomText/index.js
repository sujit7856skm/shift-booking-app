import { Text } from "react-native";
import React from "react";

export default function CustomText({ label = "", color = "#CBD2E1" }) {
  return (
    <Text
      style={{
        fontSize: 16,
        fontWeight: 600,
        color,
      }}
    >
      {label}
    </Text>
  );
}
