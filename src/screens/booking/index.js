import React, { useReducer, useState } from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { UPDATED_FORM, onInputChange } from '../../utils/forms';

import { Input } from '../../components';
import { addBooking } from "../../store/actions/booking.action";
import { colors } from '../../constants/themes/colors';
import { styles } from './styles';
import { useDispatch } from 'react-redux';

const initialState = {
  pname: {value: '', touched: false, hasError: true, error: ''},
  surname: {value: '', touched: false, hasError: true, error: ''},
  phone: {value: '', touched: false, hasError: true, error: ''},
  date: {value: '', touched: false, hasError: true, error: ''},
  _time: {value: '', touched: false, hasError: true, error: ''},
  isFormValid: false
}

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const {name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value, 
          hasError,
          error,
          touched,
        },
        isFormValid
      }
  default:
    return state;
  }
}
const Booking = () => {
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [id, setId] = useState(1);
  const dispatch = useDispatch();
  const onHandlerAuth = () => {
    dispatch(addBooking(id, name, surname, phone, date));
    console.log("send the data to the sql");
  }
  const onHandleChange = (text, type) => {
    onInputChange(type, text, dispatchFormState, formState);
    console.log(formState)
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.text}>Book your table</Text>
        <Input
          placeholder='Name'
          placeholderTextColor={colors.text}
          autoCapitalize='none'
          onChangeText={(text) => onHandleChange(text, 'pname')}
          autoCorrect={false}
          value={formState.pname.value}
          hasError={formState.pname.hasError}
          error={formState.pname.error}
          touched={formState.pname.touched}
          label='Name'
        />
        <Input
          label='Surname'
          placeholder='Surname'
          placeholderTextColor={colors.text}
          onChangeText={(text) => onHandleChange(text, 'surname')}
          autoCorrect={false}
          value={formState.surname.value}
        />
        <Input
          label='Phone Number'
          placeholder='+1'
          placeholderTextColor={colors.text}
          onChangeText={(text) => onHandleChange(text, 'phone')}
          autoCorrect={false}
          value={formState.phone.value}
        />
        <Input
          label='Date'
          placeholder='00/00/0000'
          placeholderTextColor={colors.text}
          onChangeText={(text) => onHandleChange(text, 'date')}
          autoCorrect={false}
          value={formState.date.value}
        />
        <Input
          label='Time'
          placeholder='00:00'
          placeholderTextColor={colors.text}
          onChangeText={(text) => onHandleChange(text, '_time')}
          autoCorrect={false}
          value={formState._time.value}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.propmtButton}
          onPress={onHandlerAuth}
        >
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default Booking;