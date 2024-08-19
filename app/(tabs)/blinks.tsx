import { StyleSheet, Text, View } from "react-native";
import { BlinksExampleScreen } from "../screens/BlinksExampleScreen";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ScrollView } from "react-native-gesture-handler";

export default function BlinksScreen() {
  return (
    <>
      <ScrollView>
        <BlinksExampleScreen url="https://blinktochat.fun/-1002232395603/3Coor2Baqhi8GUZqFF3uRvd4xiCKX6XU2KbgsSVqkcbW" />
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
