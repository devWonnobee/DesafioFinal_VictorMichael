import { Button, Text, View } from 'react-native';

import { LocationSelector } from "../../components/index";
import React from "react";
import { styles } from './styles';

const Location = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LocationSelector />
    </View>
  )
}

export default Location;