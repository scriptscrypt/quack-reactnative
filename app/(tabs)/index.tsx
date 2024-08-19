import { useActionsRegistryInterval } from "@dialectlabs/blinks";
import axios from "axios";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BlinksLayoutScreen } from "../screens/BlinksLayoutScreen";

interface RegistryItem {
  actionUrl: string;
  blinkUrl: string;
  websiteUrl: string;
  createdAt: String;
  tags: String[];
}
export default function DebugScreen() {
  const { isRegistryLoaded } = useActionsRegistryInterval();
  const [registryItems, setRegistryItems] = useState<RegistryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    fetchRegistryItems();
  }, []);

  const fetchRegistryItems = async () => {
    console.log("fetching registry items");
    try {
      // let response: any;
      const response = await axios.get("https://registry.dial.to/v1/list");
      setRegistryItems(response.data?.results);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to fetch registry items");
      setIsLoading(false);
    }

    console.log("registry items fetched");
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (!isRegistryLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <ScrollView>
      {registryItems.length > 0 &&
        registryItems.map(
          (item, index) =>
            item.actionUrl &&
            item.blinkUrl &&
            item.websiteUrl &&
            index < 10 && (
              <View
                key={index}
                style={{
                  padding: 16,
                  borderBottomWidth: 0.2,
                  borderBottomColor: "#808080",
                }}
              >
                <BlinksLayoutScreen
                  key={index}
                  url={item.actionUrl || item?.websiteUrl}
                />
              </View>
            )
        )}
    </ScrollView>
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
