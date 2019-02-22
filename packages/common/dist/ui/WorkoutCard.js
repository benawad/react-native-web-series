"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// rh - snippet for react object component
// rnss - snippet for react styles
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
        padding: 10
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
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "#337f7b",
        padding: 15
    },
    whiteText: {
        height: 26,
        width: 26,
        color: "#fff"
    },
    grayText: {
        color: "gray"
    },
    circleText: {
        fontSize: 18
    },
    fadedBackground: {
        backgroundColor: "#B2A1A1"
    }
});
exports.WorkoutCard = function (_a) {
    var exercise = _a.exercise, repsAndWeight = _a.repsAndWeight, sets = _a.sets;
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
                return (React.createElement(react_native_1.View, { style: [styles.circle, styles.fadedBackground], key: set + index },
                    React.createElement(react_native_1.Text, { style: styles.circleText, key: set + index })));
            }
            // default
            return (React.createElement(react_native_1.View, { style: styles.circle, key: set + index },
                React.createElement(react_native_1.Text, { style: [styles.whiteText, styles.circleText], key: set + index }, set)));
        }))));
};
