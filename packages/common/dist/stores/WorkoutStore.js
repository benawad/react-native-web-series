"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// example
/*
    {
        "2019-02-18" : [
            {exercise: "Squat", value: 50},
            {exercise: "benchpress", value: 50},
            {exercise: "deadlift", value: 50},
        ]
    }
*/
var WorkoutStore = /** @class */ (function () {
    function WorkoutStore() {
    }
    return WorkoutStore;
}());
exports.WorkoutStoreContext = react_1.createContext(new WorkoutStore());
