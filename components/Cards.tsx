import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleProp,
  ViewStyle,
} from "react-native";
import {
  MASK1_BOTTOM,
  MASK1_HEIGHT,
  MASK2_HEIGHT,
  MASK2_TOP,
} from "../styles/masks";

const { width } = Dimensions.get("window");
const OFFSET = 10;

type Props = {
  title?: string;
  description?: string;
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
};

function Card(props: Props) {
  const { title, description, onNext, style } = props;

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.label}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export function Card1(props: Props) {
  return (
    <Card
      {...props}
      style={styles.card1}
      title="First step"
      description="You can interact with the `Focus 1` button on your content."
    />
  );
}

export function Card2(props: Props) {
  return (
    <Card
      {...props}
      style={styles.card2}
      title="Last step"
      description="The `Focus 1` button in your content is now inaccessible and less visible."
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    borderRadius: 10,
    width: width * 0.9,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  label: {
    color: "#fff",
  },
  card1: {
    position: "absolute",
    bottom: MASK1_BOTTOM + MASK1_HEIGHT + OFFSET,
    alignSelf: "center",
  },
  card2: {
    top: 0,
    alignSelf: "center",
    position: "absolute",
    marginTop: MASK2_TOP + MASK2_HEIGHT + OFFSET,
  },
});
