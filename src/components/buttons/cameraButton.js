import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function CameraButton({title, onPress, icon, color}) {
  return(
    <TouchableOpacity
      onPress={onPress} style={styles.button}>
      <Ionicons name={icon} size={28} color={color ? color : 'ff4242'}/>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1a1d1a',
    marginLeft: 10,
  }
})