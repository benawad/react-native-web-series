"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var ErrorBoundary_1 = require("../modules/ErrorBoundary");
var WorkoutCard_1 = require("../ui/WorkoutCard");
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "#fafafa",
        margin: 10
    }
});
exports.CurrentWorkout = function () {
    return (React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(ErrorBoundary_1.ErrorBoundary, null,
            React.createElement(WorkoutCard_1.WorkoutCard, { exercise: "Squat", repsAndWeight: "5x5 212lbs", sets: ["1", "2", "3", "", "x"] }))));
};
