import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
      width: '100%',
      height: 200,
      marginBottom: 10,
      justifyContent: 'center',
      borderColor: colors.gray,
      borderWidth: 1,
    },
    image: '100%',
    height: '100%',
    
    map: {
      flex: 1, 
    },
})