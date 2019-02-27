import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from "react-router";
import { RootStoreContext } from "../stores/RootStore";
import { CurrentExcercise } from "../stores/WorkoutStore";
import { HistoryCard } from "../ui/HistoryCard";

interface Props extends RouteComponentProps {}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  cardContainer: {
    flex: 1,
    padding: 10
  }
});

export const WorkoutHistory: React.FC<Props> = observer(({ history }) => {
  const rootStore = React.useContext(RootStoreContext);

  const rows: Array<
    Array<{
      date: string;
      exercises: CurrentExcercise[];
    }>
  > = [];

  Object.entries(rootStore.workoutStore.history).forEach(
    ([date, exercises], i) => {
      if (i % 3 === 0) {
        rows.push([
          {
            date,
            exercises
          }
        ]);
      } else {
        rows[rows.length - 1].push({
          date,
          exercises
        });
      }
    }
  );

  return (
    <View>
      <Text>Workout History page</Text>
      <Button
        title="create workout"
        onPress={() => {
          rootStore.workoutStore.currentExercises.push(
            {
              exercise: "Squat",
              numSets: 5,
              reps: 5,
              sets: ["", "", "", "", ""],
              weight: 260
            },
            {
              exercise: "Bench Press",
              numSets: 5,
              reps: 5,
              sets: ["5", "5", "5", "5", "5"],
              weight: 200
            },
            {
              exercise: "Deadlift",
              numSets: 1,
              reps: 5,
              sets: ["5", "x", "x", "x", "x"],
              weight: 360
            }
          );

          history.push("/current-workout");
        }}
      />
      {/* "date1 date2 date3" */}
      <FlatList
        renderItem={({ item }) => (
          <View style={styles.row}>
            {item.map(({ date, exercises }) => (
              <View key={date} style={styles.cardContainer}>
                <HistoryCard
                  onPress={() => {
                    const parts = date.split("-");
                    history.push(
                      `/workout/${parts[0]}/${parts[1]}/${parts[2]}`
                    );
                  }}
                  header={date}
                  currentExercises={exercises}
                />
              </View>
            ))}
            {item.length < 3 ? <View style={styles.cardContainer} /> : null}
            {item.length < 2 ? <View style={styles.cardContainer} /> : null}
          </View>
        )}
        data={rows}
        keyExtractor={item => item.reduce((pv, cv) => pv + " " + cv.date, "")}
      />
    </View>
  );
});
