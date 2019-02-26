import * as React from "react";
import { StyleSheet, View } from "react-native";

interface Props {}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: "column",
    padding: 10
  }
});

export const Card: React.FC<Props> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};
