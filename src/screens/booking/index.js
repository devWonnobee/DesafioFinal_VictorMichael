import { Alert, Button, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import { addBooking } from "../../store/actions/booking.action";
import { styles } from './styles';
import { useDispatch } from 'react-redux';

const BookingScreen = () => {
  const dispatch = useDispatch();
  const [ name, setName ] = useState('');
  const [ surname, setSurname ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');

  const onHandleAddBooking = async () => {
    if( name.length == 0 || 
        surname.length == 0 ||
        phone.length == 0 ||
        date.length == 0) {
      Alert.alert('Warning', 'Please enter your data.');
    } else {
      
    }
    dispatch(addBooking(name, surname, phone, date));
  }
  return(
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.text}>Book your table</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your surname"
          onChangeText={(value) => setSurname(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          onChangeText={(value) => setPhone(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="DAY/TIME = 12:00"
          onChangeText={(value) => setDate(value)}
        />
        <Button 
          title="Reserve"
          onPress={onHandleAddBooking}
        />
      </View>
    </View>
  )
}

export default BookingScreen;