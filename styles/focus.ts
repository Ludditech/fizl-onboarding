import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const FOCUS1_BOTTOM = 70;
export const FOCUS1_RIGHT = 20;
export const FOCUS1_HEIGHT = 70;

export const FOCUS2_HEIGHT = 150;
export const FOCUS2_TOP = 50;

export const focusStyles = StyleSheet.create({
  focus1: {
    backgroundColor: "green",
    position: "absolute",
    bottom: FOCUS1_BOTTOM,
    right: FOCUS1_RIGHT,
    width: FOCUS1_HEIGHT,
    aspectRatio: 1,
    borderRadius: 10,
  },
  focus2: {
    borderWidth: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    position: "absolute",
    width: width * 0.8,
    borderRadius: 10,
    height: FOCUS2_HEIGHT,
    top: FOCUS2_TOP,
    alignItems: "center",
    justifyContent: "center",
  },
});
