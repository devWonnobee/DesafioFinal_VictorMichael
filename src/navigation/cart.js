import { CartScreen } from "../screens/index";
import { Platform } from "react-native";
import React from "react";
import { colors } from "../constants/themes/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
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
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;