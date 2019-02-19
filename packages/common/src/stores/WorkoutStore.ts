import { createContext } from "react";

type WorkoutDay = "a" | "b";

interface WorkoutHistory {
    [key: string]: Array<{
        exercist: string;
        value: number;
    }>;
}
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
class WorkoutStore {
    currentSquat: number;
    currentBenchPress: number;
    currentOverheadPress: number;
    currentDeadlift: number;
    currentBarbellRow: number;

    lastWorkoutType: WorkoutDay;
    history: WorkoutHistory;
}

export const WorkoutStoreContext = createContext(new WorkoutStore());
