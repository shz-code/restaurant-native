import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DishDetails from "./screens/DishDetails";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Menu"
        component={MenuScreen}
      />
      <Stack.Screen
        // options={{ headerShown: false }}
        name="Dish Detail"
        component={DishDetails}
      />
    </Stack.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Menu" component={MenuStack} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
