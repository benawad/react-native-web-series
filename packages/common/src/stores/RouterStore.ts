// Router Store is a React Context object that holds state variables
// managed by mobx as "observeables".
//
// "screen" property used by <Router /> to determine which page to render
// (e.g. either <CurrentWorkout /> or <Workout History />
//
// this context can be injected into any react component via
// useContext hook, like:
// const routerStore = useContext(RouterStoreContext)
import { observable } from "mobx";
import { createContext } from "react";

type Routes = "WorkoutHistory" | "CurrentWorkout";

class RouterStore {
    @observable screen: Routes = "WorkoutHistory";
}

export const RouterStoreContext = createContext(new RouterStore());
