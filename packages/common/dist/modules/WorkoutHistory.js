"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var mobx_react_lite_1 = require("mobx-react-lite");
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var RootStore_1 = require("../stores/RootStore");
// load up sample exercises when user clicks "Create Workout"
exports.WorkoutHistory = mobx_react_lite_1.observer(function () {
    var rootStore = React.useContext(RootStore_1.RootStoreContext);
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.Text, null, "Workout History Page"),
        React.createElement(react_native_1.Button, { title: "Create Workout", onPress: function () {
                // push set of sample exercises onto currentExercise[]
                rootStore.workoutStore.currentExercises.push({
                    exercise: "Squat",
                    numSets: 5,
                    reps: 5,
                    sets: ["", "", "", "", ""],
                    weight: 260
                }, {
                    exercise: "Bench Press",
                    numSets: 5,
                    reps: 5,
                    sets: ["", "", "", "", ""],
                    weight: 200
                }, {
                    exercise: "Deadlift",
                    numSets: 1,
                    reps: 5,
                    sets: ["", "x", "x", "x", "x"],
                    weight: 360
                });
                rootStore.routerStore.screen = "CurrentWorkout";
            } })));
});
