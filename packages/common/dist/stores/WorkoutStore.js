"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
///----------------
// WorkoutStore.ts
// holds mobx context for workout history page
// mobx state embedded in react context object created in RootStore.ts
// Notes:
//    - @observable property members include:
//      - currentSquat
//      - currentBenchPress
//      - currentOverheadPress
//      - currentDeadlift
//      - currentBarbellRow
//      - lastWorkoutType
//      - workoutHistory
//---------------
var mobx_1 = require("mobx");
// setup pointer back to rootContext via mobx store reference injected into construtor
var WorkoutStore = /** @class */ (function () {
    function WorkoutStore(rootStore) {
        this.currentExercises = [];
        this.rootStore = rootStore;
    }
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "currentSquat", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "currentBenchPress", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "currentOverheadPress", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "currentDeadlift", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "currentBarbellRow", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "currentExercises", void 0);
    return WorkoutStore;
}());
exports.WorkoutStore = WorkoutStore;
// Example A
/*
    {
        "2019-02-18" : [
            {exercise: "Squat", value: 50},
            {exercise: "benchpress", value: 50},
            {exercise: "deadlift", value: 50},
        ]
    }
*/
