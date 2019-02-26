import { observable } from "mobx";
import { persist } from "mobx-persist";
import { RootStore } from "./RootStore";

type WorkoutDay = "a" | "b";

export interface CurrentExcercise {
  weight: number;
  reps: number;
  numSets: number;
  exercise: string;
  sets: string[];
}

interface WorkoutHistory {
  [key: string]: CurrentExcercise[];
}

export class WorkoutStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @persist @observable currentSquat: number;
  @persist @observable currentBenchPress: number;
  @persist @observable currentOverheadPress: number;
  @persist @observable currentDeadlift: number;
  @persist @observable currentBarbellRow: number;

  @persist @observable lastWorkoutType: WorkoutDay;

  @persist("list") @observable currentExercises: CurrentExcercise[] = [];

  @persist("object") @observable history: WorkoutHistory = {};
}
