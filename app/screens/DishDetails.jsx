import { Image, StyleSheet, Text, View } from "react-native";

const DishDetails = ({ route }) => {
  const { name, image, description } = route.params.item;
  return (
    <View>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
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
