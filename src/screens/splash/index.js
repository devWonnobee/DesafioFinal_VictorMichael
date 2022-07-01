import {
  Image,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { styles } from "./styles";

const Splash = props => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout ( () => {
      setAuthLoaded(true);
    }, 2000);
  }, []);
  
  useEffect (() => {
    if(authLoaded) {
      props.navigation.replace('Main');
    }
  }, [authLoaded, props.navigation]);

  return (
    <View style={styles.container}>   
        <Image 
          style={{
            resizeMode: "center",
          }}
          source={
            require('../../../assets/images/logo.png')
          } 
        />
    </View>
  )
}

export default Splash;