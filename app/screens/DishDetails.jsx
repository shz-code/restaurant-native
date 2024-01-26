import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../components/ui/Icon";
import { addFavorite, removeFavorite } from "../features/filter/filterSlice";

const DishDetails = ({ route }) => {
  const { id, name, image, description } = route.params.item;
  const [selected, setSelected] = useState(false);

  const { favorites } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handlePress = () => {
    if (!selected) {
      setSelected(true);
      dispatch(addFavorite(route.params.item));
    } else {
      setSelected(false);
      dispatch(removeFavorite(id));
    }
  };

  useEffect(() => {
    if (favorites.length) {
      const ck = favorites.some((item) => item.id === id);
      if (ck) setSelected(true);
    }
  }, []);

  return (
    <View>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Pressable onPress={handlePress}>
          <Icon name={selected ? "heart" : "heart-outline"} color="#F53B58" />
        </Pressable>
        <Text style={styles.name}>{name}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
  details: {
    padding: 10,
  },
});

export default DishDetails;
