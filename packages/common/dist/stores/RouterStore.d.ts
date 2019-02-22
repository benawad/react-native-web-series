import { RootStore } from "./RootStore";
declare type Routes = "WorkoutHistory" | "CurrentWorkout";
export declare class RouterStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    screen: Routes;
}
export {};
