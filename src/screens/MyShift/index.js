import { View, SectionList, StyleSheet } from "react-native";
import React from "react";
import { useShiftsQuery } from "../../sevices/api";
import ShiftCard from "../../components/ShiftCard";
import useShiftSections from "../../hooks/useShiftSections";
import ShiftHeader from "../../components/ShiftHeader";

export default function MyShift() {
  const { data } = useShiftsQuery();
  const { shiftSections } = useShiftSections(data?.filter(shift => shift?.booked));

  return (
    <View style={{ flex: 1 }}>
      <SectionList
        sections={shiftSections}
        renderItem={({ item, index }) => (
          <ShiftCard shift={item} index={index} isMyShift={true} />
        )}
        renderSectionHeader={({ section: { title, index } }) => (
          <ShiftHeader index={index} title={title} />
        )}
      />
    </View>
  );
}
