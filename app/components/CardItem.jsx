import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function CardItem({ item }) {
  const { name, image, description } = item.item;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>{name}</Text>
        <Image source={{ uri: image }} style={{ height: 200, width: "100%" }} />
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 16,
  },
  card: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#888888",
  },
});

export default CardItem;
