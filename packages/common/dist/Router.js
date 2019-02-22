"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Router Component - used to switch screen pages
//
// <Router /> contains <Workout /> and <CurrentWorkout /> components (pages)
// <Router /> also holds reference to RouterStoreContext.screen property.
// RouterStoreContext is injected into <Router /> via the useContext hook
// and is used to control the page that is returned by <Router's /> render logic.
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var CurrentWorkout_1 = require("./modules/CurrentWorkout");
var WorkoutHistory_1 = require("./modules/WorkoutHistory");
var RootStore_1 = require("./stores/RootStore");
// router observes the current screen page observable as defined in WorkoutStoreContext
exports.Router = mobx_react_lite_1.observer(function () {
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    return rootStore.routerStore.screen === "WorkoutHistory" ? (react_1.default.createElement(WorkoutHistory_1.WorkoutHistory, null)) : (react_1.default.createElement(CurrentWorkout_1.CurrentWorkout, null));
});
