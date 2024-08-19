import { StyleSheet, Text, View } from "react-native";
import { BlinksExampleScreen } from "../screens/BlinksExampleScreen";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ScrollView } from "react-native-gesture-handler";

export default function BlinksScreen() {
  return (
    <>
      <ScrollView>
        <Text style={styles?.titleContainer}>Blinks</Text>
        <BlinksExampleScreen url="https://checkmate.sendarcade.fun/" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
