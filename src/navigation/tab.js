import BookingNavigator from "./bookings";
import CartNavigator from "./cart";
import IonicIcons from "@expo/vector-icons/Ionicons";
import LocationNavigator from "./location";
import MainNavigator from "./main";
import MenuNavigator from "./menuNav";
import React from "react";
import { Text } from "react-native";
import { colors } from "../constants/themes/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

const LabelBottomTab = (focused, label) => (
  <Text
    style={{
      color: focused ? colors.primary : colors.secondary,
      fontFamily: focused ? "Roboto-Bold" : "Roboto-Regular",
    }}
  >
    {label}
  </Text>
);

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTabs.Screen
        name="HomeTab"
        component={MainNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab( focused, "Home"),
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? "home" : "home-outline"}
              size={20}
              color={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="MapTab"
        component={LocationNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab( focused, "Map"),
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? "map" : "map-outline"}
              size={20}
              color={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="BookingTab"
        component={BookingNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab( focused, "Booking"),
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? "book" : "book-outline"}
              size={20}
              color={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="MenuTab"
        component={MenuNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab( focused, "Menu"),
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? "restaurant" : "restaurant-outline"}
              size={20}
              color={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={CartNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab( focused, "Orders"),
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? "md-basket" : "md-basket-outline"}
              size={20}
              color={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigator;