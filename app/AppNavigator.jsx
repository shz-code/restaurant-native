import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "./components/ui/Icon";
import DishDetails from "./screens/DishDetails";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MenuStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F53B58",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => <Icon onPress={() => navigation.toggleDrawer()} />,
      }}
    >
      <Stack.Screen
        // options={{ headerShown: false }}
        name="Menu"
        component={MenuScreen}
      />
      <Stack.Screen
        options={({ route }) => ({ title: route.params.item.name })}
        name="Dish Detail"
        component={DishDetails}
      />
    </Stack.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Menu"
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        options={{ drawerIcon: () => <Icon /> }}
        name="Menu"
        component={MenuStack}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
