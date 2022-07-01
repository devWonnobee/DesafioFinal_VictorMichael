import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const CategoryItem = ({ item, onSelected }) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: item.color, alignItems: "stretch"}}
        onPress={() => onSelected(item)}
      >
        {/* <View style={styles.bgImage}> */}
          <ImageBackground source={item.img} resizeMode="cover" style={{}}>
            <Text style={styles.text}>{item.title}</Text>
          </ImageBackground>
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;