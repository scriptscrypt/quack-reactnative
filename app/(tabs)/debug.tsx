import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BlinksLayoutScreen } from "../screens/BlinksLayoutScreen";

export default function DebugScreen() {
  return (
    <>
      <ScrollView>
        <BlinksLayoutScreen url="https://blinktochat.fun/-1002232395603/3Coor2Baqhi8GUZqFF3uRvd4xiCKX6XU2KbgsSVqkcbW" />
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
