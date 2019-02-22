/// <reference types="react" />
import { RouterStore } from "./RouterStore";
import { WorkoutStore } from "./WorkoutStore";
export declare class RootStore {
    routerStore: RouterStore;
    workoutStore: WorkoutStore;
}
export declare const RootStoreContext: import("react").Context<RootStore>;
