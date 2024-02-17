import React, { useState } from "react";
import { Alert, Dimensions, StyleSheet, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { Card1, Card2 } from "./components/Cards";
import { Content } from "./components/Content";
import { Focus1, Focus2 } from "./components/Focus";
import { Background1, Background2 } from "./components/Backgrounds";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [index, setIndex] = useState<number>(0);

  function handleNext() {
    setIndex(index + 1);
  }

  function onBackgroundPress() {
    Alert.alert("Background pressed!");
  }

  function MaskedViewFrame() {
    return (
      <MaskedView
        maskElement={
          <View style={styles.frameWrapper}>
            {index === 0 && <Focus1 />}
            {index === 1 && <Focus2 />}
          </View>
        }
        style={styles.maskContainer}
      >
        <Content />
        {index === 0 && <Background1 onPress={onBackgroundPress} />}
        {index === 1 && <Background2 onPress={onBackgroundPress} />}
      </MaskedView>
    );
  }

  return (
    <View style={styles.layout}>
      <MaskedViewFrame />
      {index === 0 && <Card1 onNext={handleNext} />}
      {index === 1 && <Card2 onNext={handleNext} />}
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "#000",
  },
  frameWrapper: {
    flex: 1,
    backgroundColor: "#00000050",
    width,
    height,
  },
  maskContainer: {
    backgroundColor: "#000000",
    flex: 1,
  },
});
