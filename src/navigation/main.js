import { Booking, Categories, FoodDetails, Main, MenuList, Splash } from "../screens/index";

import { Image } from 'react-native';
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#563635',
        },
        headerTintColor: '#fff'
      }}

      initialRouteName="Splash"
    >
      <Stack.Screen 
        name="Splash" 
        component={Splash}
        options={{animationEnabled: true, header: () => null}} 
      />
      <Stack.Screen 
        name="Main" 
        component={Main}
        options={{ 
          headerTitle: () => (
            <Image style={{width: 300, height: 52}} source={require('../../assets/images/logo_header.png')} /> 
          ),
        }}
      />
      <Stack.Screen 
        name="Booking" 
        component={Booking}
        options={{ 
          headerTitle: () => (
            <Image style={{width: 300, height: 52}} source={require('../../assets/images/logo_header.png')} /> 
          ),
          headerTitle: "white",
        }} 
      />
      <Stack.Screen 
        name="Categories" 
        component={Categories}
        options={{ 
          headerTitle: () => (
            <Image style={{width: 300, height: 52}} source={require('../../assets/images/logo_header.png')} /> 
          ),
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
  )
}

export default MainNavigator;