import React, { useState } from "react";
import { Alert, Dimensions, StyleSheet, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { Card1, Card2 } from "./components/Cards";
import { Content } from "./components/Content";
import { Mask1, Mask2 } from "./components/Masks";
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
        style={styles.container}
        maskElement={
          <View style={styles.masks}>
            {index === 0 && <Mask1 />}
            {index === 1 && <Mask2 />}
          </View>
        }
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
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  masks: {
    flex: 1,
    backgroundColor: "#00000050",
    width,
    height,
  },
});
