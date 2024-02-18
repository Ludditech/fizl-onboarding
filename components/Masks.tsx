import { StyleProp, View, ViewStyle } from "react-native";
import { masksStyles } from "../styles/masks";

export function Mask1({ style }: { style?: StyleProp<ViewStyle> }) {
  return <View style={[masksStyles.mask1, style]} pointerEvents="none" />;
}

export function Mask2({ style }: { style?: StyleProp<ViewStyle> }) {
  return <View style={[masksStyles.mask2, style]} pointerEvents="none" />;
}
