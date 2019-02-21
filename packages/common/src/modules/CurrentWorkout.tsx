import * as React from "react";
import { StyleSheet, View } from "react-native";
import { WorkoutCard } from "../ui/WorkoutCard";

interface Props {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    margin: 10
  }
});

export const CurrentWorkout: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <WorkoutCard
        sets={["5", "5", "5", "", "x"]}
        excercise="Squat"
        repsAndWeight="5x5 260"
      />
    </View>
  );
};
