import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "./routes";
import { ROUTES_NAME } from "./routeConstant";
import Layout from "../../components/HOC/Layout";

const navigationStack = createStackNavigator();

export default function AppNavigater() {
  return (
    <NavigationContainer>
      <navigationStack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
        initialRouteName={ROUTES_NAME.myShift}
      >
        {ROUTES?.map((route) => (
          <navigationStack.Screen key={route?.key} name={route?.name}>
            {(props) => <Layout {...props} Componnet={route?.component} />}
          </navigationStack.Screen>
        ))}
      </navigationStack.Navigator>
    </NavigationContainer>
  );
}
