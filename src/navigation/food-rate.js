import { FoodRate } from "../screens/index";
import { Platform } from "react-native";
import React from "react";
import { colors } from "../constants/themes/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const FoodRateNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FoodRateScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.secondary : colors.primary,
        },
        headerTintColor: isIOS ? colors.black : colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto-Bold",
        },
      }}
    >
      <Stack.Screen
        name="Food Rate"
        component={FoodRate}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default FoodRateNavigator;