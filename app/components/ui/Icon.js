import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Icon({ name, color, action, size }) {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <Ionicons name={name} size={size ? size : 24} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
  },
});
