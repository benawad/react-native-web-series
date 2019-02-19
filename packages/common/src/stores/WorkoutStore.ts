import { createContext } from "react";

type WorkoutDay = "a" | "b";

interface WorkoutHistory {
  [key: string]: Array<{
    excercise: string;
    value: number;
  }>;
}

/*
{
  '02-18-2019': [
    {
      excercise: 'squat',
      value: 90
    },
    {
      excercise: 'benchpress',
      value: 100
    }
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
