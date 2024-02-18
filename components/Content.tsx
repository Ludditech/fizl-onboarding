import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { masksStyles } from "../styles/masks";

export function Content() {
  return (
    <View style={styles.container}>
      <View style={masksStyles.mask2}>
        <Text style={styles.text}>
          Now that we have the focus, you can press the "Focus 2" button.
        </Text>
        <TouchableOpacity onPress={() => Alert.alert("Focus 2")}>
          <Text style={styles.focus2Button}>Focus 2</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={masksStyles.mask1}
        activeOpacity={0.8}
        onPress={() => Alert.alert("Focus 1")}
      >
        <Text style={styles.focus1Button}>Focus 1</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
    color: "#000",
    fontWeight: "bold",
  },
  focus1Button: {
    textAlign: "center",
    textAlignVertical: "center",
    width: "100%",
    height: "100%",
  },
  focus2Button: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "green",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,
  },
});
