import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Mask2, Mask1 } from "./Masks";
import {
  MASK1_HEIGHT,
  MASK1_RIGHT,
  MASK1_BOTTOM,
  MASK2_TOP,
} from "../styles/masks";

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
            height: MASK1_HEIGHT,
          }}
        />
        <Mask1 style={{ position: "relative", opacity: 0 }} />
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={{
            height: MASK1_HEIGHT,
            width: MASK1_RIGHT,
          }}
        />
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={{ height: MASK1_BOTTOM }}
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
        style={{ height: MASK2_TOP }}
      />
      <Mask2 style={{ position: "relative", opacity: 0 }} />
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
