import { Categories, MenuList, FoodDetails } from "../screens/index";

import { Image } from 'react-native';
import { Platform } from "react-native";
import React from "react";
import { colors } from "../constants/themes/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const MenuNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
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
        name="Menu"
        component={Categories}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen 
        name="MenuList" 
        component={MenuList}
        options={{ 
          headerTitle: () => (
            <Image style={{width: 300, height: 52}} source={require('../../assets/images/logo_header.png')} />
          ),
          // cambiar el color de la flecha
        }}
      />
      <Stack.Screen
        name="FoodDetails"
        component={FoodDetails}
        options={{
          headerTitle: () => (
            <Image style={{width: 300, height: 52}} source={require('../../assets/images/logo_header.png')} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MenuNavigator;