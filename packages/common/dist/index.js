"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Router_1 = require("./Router");
// <Router /> contains <Workout /> and <CurrentWorkout /> components.
// <Router /> also holds reference to RouterStoreContext.screen property.
// RouterStoreContext is injected into <Router /> via the useContext hook
// and is used to control the page that is returned by <Router's /> render logic.
exports.App = function () {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.wrapper },
            react_1.default.createElement(Router_1.Router, null))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    wrapper: {
        flex: 1,
        backgroundColor: "#F5FCFF",
        width: "100%",
        maxWidth: 425
    }
});
