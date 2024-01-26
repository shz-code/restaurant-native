import { Text, View } from "react-native";
import { useGetMealsQuery } from "../features/meal/mealApi";

const DishDetails = () => {
  const { data, isLoading } = useGetMealsQuery();

  console.log(data, isLoading);
  return (
    <View>
      <Text>DishDetails</Text>
    </View>
  );
};

export default DishDetails;
