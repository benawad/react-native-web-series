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
var CurrentWorkout_1 = require("./modules/CurrentWorkout");
var WorkoutHistory_1 = require("./modules/WorkoutHistory");
var RouterStore_1 = require("./stores/RouterStore");
// router observes the current screen page observable as defined in WorkoutStoreContext
exports.Router = mobx_react_lite_1.observer(function () {
    var routerStore = react_1.useContext(RouterStore_1.RouterStoreContext);
    return routerStore.screen === "WorkoutHistory" ? react_1.default.createElement(WorkoutHistory_1.WorkoutHistory, null) : react_1.default.createElement(CurrentWorkout_1.CurrentWorkout, null);
});
