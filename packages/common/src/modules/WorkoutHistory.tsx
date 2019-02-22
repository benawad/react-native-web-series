// WorkoutHistory.tsx - React function object
// 0. Sample exercise set created from <WorkoutHistory />.onPress()  before calling.
// 1. Iterate through each exercise in exercises[] and create a <WorkoutCard /> for each.
// 2. Specify the onSetPress(setIndex) logic to be called by <WorkoutCard /> should
//    it's circle widget ever be clicked
//
// Implementation Notes
// 1. Global RootStoreContext is imported via react.useContext (provides access to mobx state data)
// 2. main function is decorated with observer() to register listener for any @observable() changes in state
// 3. Since using mobx for state management, can just mutate directly as in "e.sets[setIndex] = newValue"
// WorkoutHistory page
// observes RouterStore.screen via RouterStoreContext
import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { RootStoreContext } from "../stores/RootStore";

interface Props {}

// load up sample exercises when user clicks "Create Workout"
export const WorkoutHistory: React.FC<Props> = observer(() => {
    const rootStore = React.useContext(RootStoreContext);
    return (
        <View>
            <Text>Workout History Page</Text>
            <Button
                title="Create Workout"
                onPress={() => {
                    // push set of sample exercises onto currentExercise[]
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
                            sets: ["", "", "", "", ""],
                            weight: 200
                        },
                        {
                            exercise: "Deadlift",
                            numSets: 1,
                            reps: 5,
                            sets: ["", "x", "x", "x", "x"],
                            weight: 360
                        }
                    );
                    rootStore.routerStore.screen = "CurrentWorkout";
                }}
            />
        </View>
    );
});
