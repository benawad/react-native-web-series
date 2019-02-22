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
import { observable } from "mobx";
import { RootStore } from "./RootStore";

type WorkoutDay = "a" | "b";

// see example A below, for sample object layout.
interface WorkoutHistory {
    [key: string]: Array<{
        exercist: string;
        value: number;
    }>;
}
interface CurrentExercise {
    weight: number;
    reps: number;
    numSets: number;
    exercise: string;
    sets: string[];
}
// setup pointer back to rootContext via mobx store reference injected into construtor
export class WorkoutStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
    @observable currentSquat: number;
    @observable currentBenchPress: number;
    @observable currentOverheadPress: number;
    @observable currentDeadlift: number;
    @observable currentBarbellRow: number;

    @observable currentExercises: CurrentExercise[] = [];

    lastWorkoutType: WorkoutDay;
    history: WorkoutHistory;
}

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
