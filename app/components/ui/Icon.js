import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Icon({ name, color, action, size, center, clickAble }) {
  const styles = StyleSheet.create({
    container: {
      paddingRight: !center && 10,
    },
  });

  return clickAble ? (
    <TouchableOpacity style={styles.container} onPress={action}>
      <Ionicons name={name} size={size ? size : 24} color={color} />
    </TouchableOpacity>
  ) : (
    <Ionicons name={name} size={size ? size : 24} color={color} />
  );
}
