import {ImageBackground} from 'react-native-web';
import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3d3d',
    alignItems: "center",

  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
  },
  header: {
    flex: 0.2,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    
  },
  feature: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 350,

  },
  img: {
    flex: 1,
    width: "100%",
    height: 300,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 10,
  },
  textCard: {
    fontFamily: "OpenSans-Bold",
    fontSize: 25,
    textAlign: "center",
    color: colors.white,
    lineHeight: 50,
    backgroundColor: "#000000c0",
  },
  imgBackground: {
    flex: 1,  //? hará falta esto
    width: "100%",
    height: "100%",
  },
  headerTitle: {
    fontFamily: "OpenSans-ExtraBold",
    fontSize: 50,
    color: colors.white,
    marginTop: 10,
    marginLeft: 20,
  },
  p: {
    flex: 1,
  },
  description: {
    margin: 10,
    fontFamily: "OpenSans-Bold",
    fontSize: 20,
    color: "#fff",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10

  },
});