import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const globalStyles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: "#2B2A2A",
    alignItems: "center",
    justifyContent: "center",
  },

  pageCointainer: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "#2B2A2A",
  },

  invearnBrandBackgroundColor: {
    backgroundColor: "#2B2A2A",
  },

  invearnBasicInputElementContainer: {
    backgroundColor: "#242424",

    height: 43,
    borderWidth: 0.5,
    borderColor: "#434343",
    borderRadius: 5,
    paddingLeft: 10,
    elevation: 6,
  },
});
