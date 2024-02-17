import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Focus2, Focus1 } from "./Focus";
import {
  FOCUS1_HEIGHT,
  FOCUS1_RIGHT,
  FOCUS1_BOTTOM,
  FOCUS2_TOP,
} from "../styles/focus";

export function Background1({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.layout} pointerEvents="box-none">
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={{ flex: 1 }}
      />
      <View style={{ flexDirection: "row" }} pointerEvents="box-none">
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={{
            flex: 1,
            height: FOCUS1_HEIGHT,
          }}
        />
        <Focus1 style={{ position: "relative", opacity: 0 }} />
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={{
            height: FOCUS1_HEIGHT,
            width: FOCUS1_RIGHT,
          }}
        />
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={{ height: FOCUS1_BOTTOM }}
      />
    </View>
  );
}

export function Background2({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.layout} pointerEvents="box-none">
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={{ height: FOCUS2_TOP }}
      />
      <Focus2 style={{ position: "relative", opacity: 0 }} />
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
  },
});
