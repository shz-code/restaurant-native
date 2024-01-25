import { Button, Text, View } from "react-native";

const MenuScreen = ({ navigation }) => {
  return (
    <View>
      <Text>MenuScreen</Text>
      <Button
        title="Switch"
        onPress={() => navigation.navigate("Dish Detail")}
      />
    </View>
  );
};

export default MenuScreen;
