// CurrentWorkout.tsx - React function object
// 0. Sample exercise set created by <WorkoutHistory.onPress() /> prior to invocation.
// 1. Iterate through each exercise in exercises[] provided and create a <WorkoutCard /> for each.
// 2. Specify the <WorkoutCard.onSetPress(setIndex) /> logic to be called should it's
//    circle widget ever be clicked
//
// Implementation Notes
// 1. Global RootStoreContext is imported via react.useContext (provides access to mobx state data)
// 2. main function is decorated with observer() to register listener for any @observable() changes in state
// 3. Since using mobx for state management, can just mutate directly as in "e.sets[setIndex] = newValue"
import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutCard } from "../ui/WorkoutCard";

interface Props {}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        padding: 10
    }
});

export const CurrentWorkout: React.FC<Props> = observer(() => {
    const rootStore = React.useContext(RootStoreContext);
    return (
        <View style={styles.container}>
            {rootStore.workoutStore.currentExercises.map(e => {
                return (
                    // CONFIRM: setIndex is passed in by React as int offest automatically?
                    <WorkoutCard
                        exercise={e.exercise}
                        key={e.exercise}
                        repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`}
                        sets={e.sets}
                        onSetPress={setIndex => {
                            let newValue: string;
                            const v = e.sets[setIndex]; // string value like "5"

                            if (v === "") {
                                newValue = `${e.reps}`;
                            } else if (v === "0") {
                                newValue = "";
                            } else {
                                newValue = `${parseInt(v) - 1}`;
                            }
                            e.sets[setIndex] = newValue;
                        }}
                    />
                );
            })}
        </View>
    );
});
