import { View, SectionList } from "react-native";
import React, { useCallback, useState } from "react";
import { useShiftsQuery } from "../../sevices/api";
import ShiftCard from "../../components/ShiftCard";
import useShiftSections from "../../hooks/useShiftSections";
import ShiftHeader from "../../components/ShiftHeader";
import AvailableShiftHeader from "../../components/AvailableShiftHeader";
import useAvailableShift from "../../hooks/useAvailableShift";

export default function AvailableShift() {
  const { data } = useShiftsQuery();
  const { shiftArea } = useAvailableShift(data);
  const [selectedCity, setSelectedCity] = useState("");
  const { shiftSections } = useShiftSections(
    selectedCity ? shiftArea[selectedCity] : data
  );

  return (
    <View style={{ flex: 1 }}>
      <AvailableShiftHeader
        shiftArea={shiftArea}
        selected={selectedCity}
        onShiftSelect={setSelectedCity}
      />
      <SectionList
        sections={shiftSections}
        renderItem={({ item, index }) => (
          <ShiftCard shift={item} index={index} />
        )}
        renderSectionHeader={({ section: { title, index } }) => (
          <ShiftHeader index={index} title={title} />
        )}
      />
    </View>
  );
}
