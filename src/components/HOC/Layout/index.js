import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BottomNavigater from "../../BottomNavigater";

export default function Layout({ Componnet, ...rest }) {
  const styles = getStyle();
  return (
    <View style={styles.container}>
      <Componnet {...rest} />
      <BottomNavigater {...rest} />
    </View>
  );
}

const getStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: "#FFFFFF",
    },
  });
