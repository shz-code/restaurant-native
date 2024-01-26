import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import Icon from "./components/ui/Icon";
import DishDetails from "./screens/DishDetails";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          padding: 20,
          flex: 1,
          alignItems: "center",
        }}
      >
        <Icon name="restaurant-sharp" color="#F53B58" size={32} />
        <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5 }}>
          Restaurant - Native
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

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
        headerRight: () => (
          <Icon
            name="menu-sharp"
            color="#fff"
            action={() => navigation.toggleDrawer()}
          />
        ),
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
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#F53B58",
        drawerPosition: "right",
        drawerItemStyle: {
          alignItems: "center",
        },
      }}
      initialRouteName="Menu"
    >
      <Drawer.Screen
        options={{
          drawerIcon: () => <Icon name="home-outline" />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <Icon name="fast-food-outline" />,
        }}
        name="Menu"
        component={MenuStack}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
