import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    containerKeyboard: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
    },
    containerForm: {
      height: "80%",
      maxWidth: 400,
      padding: 15,
      margin: 15,
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: colors.white,
      alignItems: 'center',
    },
    buttonContainer: {
      height: "10%",
      alignItems: 'center',
      
    },
    label: {
      fontSize: 14,
      fontFamily: "Roboto-Bold",
      marginVertical: 5,
    },
    title: {
      fontSize: 18,
      fontFamily: 'Roboto-Bold',
      marginBottom: 15,
      textAlign: 'center',
    },
    propmt: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    propmtMessage: {
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      color: colors.text,
      marginRight: 15
    },
    propmtButton: {
      fontSize: 14,
      fontFamily: 'Roboto-Bold',
      color: colors.primary,
      textAlign: 'center',
    },
    input: {
      width: 300,
      borderWidth: 1,
      borderColor: '#555',
      borderRadius: 10,
      backgroundColor: '#ffffff',
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 10,
    }
});