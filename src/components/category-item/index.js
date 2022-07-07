import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import FastImage from "react-native-fast-image";
import React from "react";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const CategoryItem = ({ item, onSelected }) => {
  const FoodImages = () => (
    <FastImage
       style={{ width: 300, height: 200 }}
       source={{
        uri: item.img
       }} />
  )
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: item.color, alignItems: "stretch"}}
        onPress={() => onSelected(item)}
      >
        {/* <View style={styles.bgImage}> */}
          <ImageBackground source={{FoodImages}} resizeMode="cover" style={{}}>
            <Text style={styles.text}>{item.title}</Text>
          </ImageBackground>
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;