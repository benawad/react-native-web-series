import dayjs from "dayjs";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, StyleSheet, View } from "react-native";
import { RouteComponentProps } from "react-router";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutCard } from "../ui/WorkoutCard";
import { WorkoutTimer } from "../ui/WorkoutTimer";

interface Props extends RouteComponentProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 10
  }
});

export const CurrentWorkout: React.FC<Props> = observer(({ history }) => {
  const rootStore = React.useContext(RootStoreContext);
  React.useEffect(() => {
    return () => {
      rootStore.workoutTimerStore.stopTimer();
    };
  }, []);

  return (
    <View style={styles.container}>
      {rootStore.workoutStore.currentExercises.map(e => {
        return (
          <WorkoutCard
            onSetPress={setIndex => {
              rootStore.workoutTimerStore.startTimer();
              const v = e.sets[setIndex];

              let newValue: string;

              if (v === "") {
                newValue = `${e.reps}`;
              } else if (v === "0") {
                rootStore.workoutTimerStore.stopTimer();
                newValue = "";
              } else {
                newValue = `${parseInt(v) - 1}`;
              }

              e.sets[setIndex] = newValue;
            }}
            key={e.exercise}
            sets={e.sets}
            excercise={e.exercise}
            repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`}
          />
        );
      })}
      <Button
        title="SAVE"
        onPress={() => {
          rootStore.workoutStore.history[
            dayjs(
              new Date(+new Date() - Math.floor(Math.random() * 10000000000))
            ).format("YYYY-MM-DD")
          ] = rootStore.workoutStore.currentExercises;
          rootStore.workoutStore.currentExercises = [];
          history.push("/");
        }}
      />
      {rootStore.workoutTimerStore.isRunning ? (
        <WorkoutTimer
          percent={rootStore.workoutTimerStore.percent}
          currentTime={rootStore.workoutTimerStore.display}
          onXPress={() => rootStore.workoutTimerStore.stopTimer()}
        />
      ) : null}
    </View>
  );
});
