import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CardItem from "../components/CardItem";

const FavoriteScreen = () => {
  const { favorites } = useSelector((state) => state.filter);

  let content = null;
  if (favorites.length) {
    content = (
      <FlatList
        data={favorites}
        renderItem={(item) => <CardItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    );
  } else content = <Text style={style.notFound}>Nothing in favorite</Text>;
  return <View>{content}</View>;
};

const style = StyleSheet.create({
  notFound: {
    backgroundColor: "red",
    color: "#fff",
    padding: 10,
    textAlign: "center",
  },
});

export default FavoriteScreen;
