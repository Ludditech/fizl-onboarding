import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const MASK1_BOTTOM = 70;
export const MASK1_RIGHT = 20;
export const MASK1_HEIGHT = 70;

export const MASK2_HEIGHT = 150;
export const MASK2_TOP = 100;

export const masksStyles = StyleSheet.create({
  mask1: {
    backgroundColor: "green",
    position: "absolute",
    bottom: MASK1_BOTTOM,
    right: MASK1_RIGHT,
    width: MASK1_HEIGHT,
    aspectRatio: 1,
    borderRadius: 10,
  },
  mask2: {
    borderWidth: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    position: "absolute",
    width: width * 0.8,
    borderRadius: 10,
    height: MASK2_HEIGHT,
    top: MASK2_TOP,
    alignItems: "center",
    justifyContent: "center",
  },
});
