//----------------
// RouterStore.ts
// holds mobx context for <Router />, which navigates to current page
// mobx state embedded in react context object defined/created in RootStore.ts
// ClassMembers include:
//    - @observable.screen
//----------------

// load mbox for observable state members
import { observable } from "mobx";
import { RootStore } from "./RootStore";

// define router routes
type Routes = "WorkoutHistory" | "CurrentWorkout";

// define class & observable properties,
// setup pointer back to rootContext via mobx store reference injected into construtor
export class RouterStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
    @observable screen: Routes = "WorkoutHistory";
}
