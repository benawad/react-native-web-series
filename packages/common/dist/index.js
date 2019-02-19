"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var CounterStore_1 = require("./stores/CounterStore");
exports.App = mobx_react_lite_1.observer(function () {
    // const [count, setCount] = useState(0);
    var counterStore = react_1.useContext(CounterStore_1.CounterStoreContext);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.welcome }, "React Native running from common project library"),
        react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, "Same code running on web, and as app!"),
        react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, counterStore.count),
        react_1.default.createElement(react_native_1.Button, { title: "Increment", onPress: function () { return counterStore.count++; } })));
});
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
