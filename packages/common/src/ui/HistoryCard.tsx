import * as React from "react";
import { Text } from "react-native";
import { CurrentExcercise } from "../stores/WorkoutStore";
import { Card } from "./Card";

interface Props {
  header: string;
  currentExercises: CurrentExcercise[];
  onPress: () => void;
}

const exerciseShortName = {
  Squat: "SQ",
  Deadlift: "DL",
  "Bench Press": "BP",
  "Overhead Press": "OHP",
  "Barbell Row": "ROW"
};

export const HistoryCard: React.FC<Props> = ({
  header,
  currentExercises,
  onPress
}) => {
  return (
    <Card onPress={onPress}>
      <Text>{header}</Text>
      {currentExercises.map(ce => {
        return (
          <Text key={ce.exercise}>{`${
            exerciseShortName[ce.exercise as keyof typeof exerciseShortName]
          } ${ce.numSets}x${ce.reps} ${ce.weight}`}</Text>
        );
      })}
    </Card>
  );
};
