// Router Component - used to switch screen pages
//
// <Router /> contains <Workout /> and <CurrentWorkout /> components (pages)
// <Router /> also holds reference to RouterStoreContext.screen property.
// RouterStoreContext is injected into <Router /> via the useContext hook
// and is used to control the page that is returned by <Router's /> render logic.
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { CurrentWorkout } from "./modules/CurrentWorkout";
import { WorkoutHistory } from "./modules/WorkoutHistory";
import { RootStoreContext } from "./stores/RootStore";

// router observes the current screen page observable as defined in WorkoutStoreContext
export const Router = observer(() => {
    const rootStore = useContext(RootStoreContext);
    return rootStore.routerStore.screen === "WorkoutHistory" ? (
        <WorkoutHistory />
    ) : (
        <CurrentWorkout />
    );
});
