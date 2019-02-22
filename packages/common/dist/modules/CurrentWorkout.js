"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var mobx_react_lite_1 = require("mobx-react-lite");
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var RootStore_1 = require("../stores/RootStore");
var WorkoutCard_1 = require("../ui/WorkoutCard");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        padding: 10
    }
});
exports.CurrentWorkout = mobx_react_lite_1.observer(function () {
    var rootStore = React.useContext(RootStore_1.RootStoreContext);
    return (React.createElement(react_native_1.View, { style: styles.container }, rootStore.workoutStore.currentExercises.map(function (e) {
        return (
        // CONFIRM: setIndex is passed in by React as int offest automatically?
        React.createElement(WorkoutCard_1.WorkoutCard, { exercise: e.exercise, key: e.exercise, repsAndWeight: e.numSets + "x" + e.reps + " " + e.weight, sets: e.sets, onSetPress: function (setIndex) {
                var newValue;
                var v = e.sets[setIndex]; // string value like "5"
                if (v === "") {
                    newValue = "" + e.reps;
                }
                else if (v === "0") {
                    newValue = "";
                }
                else {
                    newValue = "" + (parseInt(v) - 1);
                }
                e.sets[setIndex] = newValue;
            } }));
    })));
});
