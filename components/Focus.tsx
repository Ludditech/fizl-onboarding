import { StyleProp, View, ViewStyle } from "react-native";
import { focusStyles } from "../styles/focus";

export function Focus1({ style }: { style?: StyleProp<ViewStyle> }) {
  return <View style={[focusStyles.focus1, style]} pointerEvents="none" />;
}

export function Focus2({ style }: { style?: StyleProp<ViewStyle> }) {
  return <View style={[focusStyles.focus2, style]} pointerEvents="none" />;
}
