/// <reference types="react" />
declare type Routes = "WorkoutHistory" | "CurrentWorkout";
declare class RouterStore {
    screen: Routes;
}
export declare const RouterStoreContext: import("react").Context<RouterStore>;
export {};
