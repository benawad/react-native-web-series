"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// "root" store - the master store that provides wrapper around more specialized
// stores (like "router" or "workout" stores) that can be accessed from anywhere
//
//
var react_1 = require("react");
var RouterStore_1 = require("./RouterStore");
var WorkoutStore_1 = require("./WorkoutStore");
// 1. Create RootStoreContext, the primary store container for child mobx stores.
//    This way, only need one "react context" to access all of the child
//    "mobx" stores from anywhere.
// 2. Instantiate child mobx stores for "routing" and "workout"
// 3. Inject this "root store" into each "moxx child store" by passing it's "this" reference
//    into the constructor, thus allowing the child to point back to root.
// 4. Inject "root store" into the ui via useContext in the component, thus allowing access
//    to the mobx managed variables from anywhere on the ui
// 5. exports or returns a new singleton react context containing one "root store"
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.routerStore = new RouterStore_1.RouterStore(this);
        this.workoutStore = new WorkoutStore_1.WorkoutStore(this);
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = react_1.createContext(new RootStore());
