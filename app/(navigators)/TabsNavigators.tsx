import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BlinksScreen from "../(tabs)/blinks";
import DebugScreen from "../(tabs)";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Navigator>
        <Tab.Screen name="Blinks" component={BlinksScreen} />
        <Tab.Screen name="Debug" component={DebugScreen} />
      </Tab.Navigator>
    </Tab.Navigator>
  );
}
