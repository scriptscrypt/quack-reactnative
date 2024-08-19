import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabsNavigators";
import HelpScreen from "../screens/HelpScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
