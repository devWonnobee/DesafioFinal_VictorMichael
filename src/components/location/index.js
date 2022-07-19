import * as Location from 'expo-location';

import { Alert, Button, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';

import { Colors } from "react-native/Libraries/NewAppScreen";
import MapPreview from '../map-preview';
import React from "react";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";
import { useState } from "react";

const LocationSelector = props => {

  const restaurantLocation = {
    latitude: 36.37758053238511,
    longitude: -5.2501629171868,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }

  return ( 
    <View style={styles.container}>
      <MapView 
      style={styles.map}
      initialRegion={restaurantLocation}
      >
        <Marker coordinate={restaurantLocation} />
      </MapView>
    </View>
  )
}

export default LocationSelector;