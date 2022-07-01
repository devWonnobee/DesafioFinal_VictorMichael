import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const FoodItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerTouchable}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.title}>{item.calories}</Text>
          <Text style={styles.price}>{item.price} €</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FoodItem;