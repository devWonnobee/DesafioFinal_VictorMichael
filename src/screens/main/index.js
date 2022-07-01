import { Button, Image, ImageBackground, Text, View } from 'react-native';

import Card from '../../components/card';
import React from "react";
import { styles } from './styles';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
            source={require('../../../assets/images/restaurante1.jpg')}
            style={styles.imgBackground}
            resizeMode={"cover"}
          >
            <View style={styles.header}>
            <Text style={styles.headerTitle}>
              Bienvenido!
            </Text>
            </View>
            <View style={styles.p}>
              <Text style={styles.description}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur."</Text>
            </View>
          {/* <Card style={styles.feature}>
            <ImageBackground
              source={require('../../../assets/images/hamburguesa.jpg')}
              style={styles.img}
              resizeMode={"cover"}
            >
            <Text style={styles.textCard}>Pide ya tu hamburguesa!</Text>
            </ImageBackground>
          </Card> */}

      </ImageBackground>

      {/* <Button
        title="Go to Categories"
        onPress={() => navigation.navigate('Categories')}
      />
      <Button
        title="Go to Reservation"
        onPress={() => navigation.navigate('Booking')}
      /> */}
    </View>
  )
}

export default Main;