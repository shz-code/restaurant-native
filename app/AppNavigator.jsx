import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import FavoriteScreen from "./screens/FavoriteScreen";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

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
const HomeBottomTabs = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerTitle: "Restaurant",
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#F53B58",
        headerRight: () => (
          <Icon
            name="menu-sharp"
            color="#000"
            action={() => navigation.toggleDrawer()}
            clickAble
          />
        ),
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              size={20}
              center
              color={focused ? "#F53B58" : "gray"}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "heart" : "heart-outline"}
              size={20}
              center
              color={focused ? "#F53B58" : "gray"}
            />
          ),
        }}
        name="Favorites"
        component={FavoriteScreen}
      />
    </Tabs.Navigator>
  );
};
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
            clickAble
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
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              color={focused ? "#F53B58" : "gray"}
              size={20}
            />
          ),
        }}
        name="Home"
        component={HomeBottomTabs}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name={focused ? "fast-food-sharp" : "fast-food-outline"}
              color={focused ? "#F53B58" : "gray"}
              size={20}
            />
          ),
        }}
        name="Menu"
        component={MenuStack}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
