import { Location } from "../screens/index";
import { Platform } from "react-native";
import React from "react";
import { colors } from "../constants/themes/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const LocationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Location"
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
        name="Location"
        component={Location}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LocationNavigator;