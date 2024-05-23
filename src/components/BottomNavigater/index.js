import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import { ROUTES_NAME } from "../../appConfig/navigation/routeConstant";
import CustomText from "../ui/CustomText";

const tabs = [
  {
    key: 1,
    name: ROUTES_NAME.myShift,
    label: "My Shift",
  },
  {
    key: 2,
    name: ROUTES_NAME.availableShift,
    label: "Available Shifts",
  },
];

export default function BottomNavigater({ navigation, route, ...rest }) {
  const styles = getStyles();

  const handleOnTabPress = useCallback(
    (screenName) => {
      navigation.navigate(screenName);
    },
    [route]
  );

  return (
    <View style={styles.container}>
      {tabs?.map((tab) => (
        <TouchableOpacity
          key={tab?.key}
          onPress={() => handleOnTabPress(tab?.name)}
          style={styles.tab}
        >
          <CustomText
            label={tab?.label}
            color={route?.name === tab?.name ? "#004FB4" : "#A4B8D3"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const getStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: "#F7F8FB",
      flexDirection: "row",
      alignItems: "center",
    },
    tab: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center",
      height: 50,
    },
  });
