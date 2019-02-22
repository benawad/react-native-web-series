// "root" store - the master store that provides wrapper around more specialized
// stores (like "router" or "workout" stores) that can be accessed from anywhere
//
//
import { createContext } from "react";
import { RouterStore } from "./RouterStore";
import { WorkoutStore } from "./WorkoutStore";

// 1. Create RootStoreContext, the primary store container for child mobx stores.
//    This way, only need one "react context" to access all of the child
//    "mobx" stores from anywhere.
// 2. Instantiate child mobx stores for "routing" and "workout"
// 3. Inject this "root store" into each "moxx child store" by passing it's "this" reference
//    into the constructor, thus allowing the child to point back to root.
// 4. Inject "root store" into the ui via useContext in the component, thus allowing access
//    to the mobx managed variables from anywhere on the ui
// 5. exports or returns a new singleton react context containing one "root store"
export class RootStore {
    routerStore = new RouterStore(this);
    workoutStore = new WorkoutStore(this);
}

export const RootStoreContext = createContext(new RootStore());
