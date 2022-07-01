import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    margin: 10,
    height: 180,
    alignContent: "center",
    },
  containerTouchable: {
    flex: 1,
    borderRadius: 20,
    shadowColor: colors.shadow,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 20,
    color: colors.gray,
    fontFamily: "Roboto-Medium",
  },
  image: {
    flex: 1,
    opacity: 0.6,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 150,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto-Bold",
  },
  bgImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 10,
  },
});