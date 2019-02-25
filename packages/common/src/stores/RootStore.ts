import { create } from "mobx-persist";
import { createContext } from "react";
import { AsyncStorage } from "react-native";
import { WorkoutStore } from "./WorkoutStore";
import { WorkoutTimerStore } from "./WorkoutTimerStore";

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true
});
export class RootStore {
  workoutStore = new WorkoutStore(this);
  workoutTimerStore = new WorkoutTimerStore();

  constructor() {
    hydrate("workoutTimer", this.workoutTimerStore).then(() => {
      if (this.workoutTimerStore.isRunning) {
        this.workoutTimerStore.measure();
      }
    });
    hydrate("workout", this.workoutStore);
  }
}

export const RootStoreContext = createContext(new RootStore());
