import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const MenuItem = ({ item, onPress }) => {
  const { name, description, image } = item.item;
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  details: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    fontWeight: "500",
  },
  description: {
    color: "#6e6969",
  },
});

export default MenuItem;
