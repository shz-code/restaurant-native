import { FlatList, Text, View } from "react-native";
import MenuItem from "../components/MenuItem";
import { useGetMealsQuery } from "../features/meal/mealApi";

const MenuScreen = ({ navigation }) => {
  const { data, isLoading, isError, error } = useGetMealsQuery();

  let content = null;
  if (isLoading) content = <Text>Loading</Text>;
  if (!isLoading && isError) content = <Text>{error.message}</Text>;
  if (!isLoading && !isError && !data.length)
    content = <Text>Nothing Found</Text>;
  if (!isLoading && !isError && data.length)
    content = (
      <FlatList
        data={data}
        renderItem={(item) => (
          <MenuItem
            item={item}
            onPress={() =>
              navigation.navigate("Dish Detail", {
                item: item.item,
                hideHeader: true,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  return (
    <View>
      <View>{content}</View>
    </View>
  );
};

export default MenuScreen;
