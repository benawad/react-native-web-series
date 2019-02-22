"use strict";
// rh - snippet for react object component
// rnss - snippet for react styles
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// WorkoutCard.tsx - react JSX function object.
// ------------------------
// 1. React function object using JSX.
// 2. Receives exercise, reps, sets[] as properties from above.
//    (these are @observable state properties, so entire component definition is
//     decorated with observer() call to listen in on @observable changes in state)
// 4. Clickable circle uses <TouchableOpacity/> rather than <View /> for "onPress" event.
// 5. "onPress" event logic is passed in as property from <CurentWorkout /> above.
var mobx_react_lite_1 = require("mobx-react-lite");
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
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
        backgroundColor: "#337f7b"
    },
    whiteText: {
        color: "#fff"
    },
    grayText: {
        color: "#655252"
    },
    circleText: {
        fontSize: 16,
        margin: "auto"
    },
    fadedBackground: {
        backgroundColor: "#B2A1A1"
    }
});
// react function definition placed within observer() decorator to register for listening
exports.WorkoutCard = mobx_react_lite_1.observer(function (_a) {
    var exercise = _a.exercise, repsAndWeight = _a.repsAndWeight, sets = _a.sets, onSetPress = _a.onSetPress;
    return (React.createElement(react_native_1.View, { style: styles.card },
        React.createElement(react_native_1.View, { style: styles.topRow },
            React.createElement(react_native_1.Text, { style: styles.topRowText }, exercise),
            React.createElement(react_native_1.Text, { style: styles.topRowText }, repsAndWeight)),
        React.createElement(react_native_1.View, { style: styles.bottomRow }, sets.map(function (set, index) {
            // state X
            if (set.toUpperCase() === "X") {
                return (React.createElement(react_native_1.View, { style: [styles.circle, styles.fadedBackground], key: set + index },
                    React.createElement(react_native_1.Text, { style: [styles.circleText, styles.grayText], key: set + index }, "X")));
            }
            // state ""
            if (set === "") {
                return (React.createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSetPress(index); }, style: [styles.circle, styles.fadedBackground], key: set + index },
                    React.createElement(react_native_1.Text, { style: styles.circleText, key: set + index })));
            }
            // default
            // clickable, so onPress() call the onSetPress() handler logic
            // passed in as property from above.
            // call it with this component's current "index" value.
            // e.g. onSetPress(indes).
            return (React.createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSetPress(index); }, style: styles.circle, key: set + index },
                React.createElement(react_native_1.Text, { style: [styles.whiteText, styles.circleText], key: set + index }, set)));
        }))));
});
