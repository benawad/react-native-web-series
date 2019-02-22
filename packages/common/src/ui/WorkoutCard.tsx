import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  excercise: string;
  repsAndWeight: string;
  sets: string[];
  onSetPress: (index: number) => void;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: "column",
    padding: 10,
    marginBottom: 10
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topRowText: {
    fontSize: 16
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#8FB299"
  },
  whiteText: {
    color: "#fff"
  },
  circleText: {
    fontSize: 16,
    margin: "auto"
  },
  grayText: {
    color: "#655252"
  },
  fadedBackground: {
    backgroundColor: "#B2A1A1"
  }
});

export const WorkoutCard: React.FC<Props> = observer(
  ({ excercise, repsAndWeight, sets, onSetPress }) => {
    return (
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.topRowText}>{excercise}</Text>
          <Text style={styles.topRowText}>{repsAndWeight}</Text>
        </View>
        <View style={styles.bottomRow}>
          {sets.map((set, index) => {
            if (set === "x") {
              return (
                <View
                  style={[styles.circle, styles.fadedBackground]}
                  key={set + index}
                >
                  <Text style={[styles.grayText, styles.circleText]}>X</Text>
                </View>
              );
            }

            if (set === "") {
              return (
                <TouchableOpacity
                  onPress={() => onSetPress(index)}
                  style={[styles.circle, styles.fadedBackground]}
                  key={set + index}
                />
              );
            }

            return (
              <TouchableOpacity
                onPress={() => onSetPress(index)}
                style={styles.circle}
                key={set + index}
              >
                <Text style={[styles.whiteText, styles.circleText]}>{set}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
);
