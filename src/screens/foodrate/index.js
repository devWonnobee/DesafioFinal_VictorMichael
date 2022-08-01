import { Button, Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "../splash/styles";

const FoodRateScreen = ({navigation}) => {
  function ButtonCamera() {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("RatePic")}>
        <Image
        style={{width: 50, height: 50}}
        source={require('../../../assets/images/camera.png')}
        
        />
      </TouchableOpacity>
      
    );
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonCamera />
      ),
    });
  },[]);
  
  return (
    <View style={styles.container}>
      <Button title="Hello"></Button>
    </View>

    //Lista para los rated
    
  )
}

export default FoodRateScreen;