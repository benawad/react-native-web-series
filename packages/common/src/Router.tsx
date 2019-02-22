import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { CurrentWorkout } from "./modules/CurrentWorkout";
import { WorkoutHistory } from "./modules/WorkoutHistory";
import { RootStoreContext } from "./stores/RootStore";

export const Router = observer(() => {
  const rootStore = useContext(RootStoreContext);

  return rootStore.routerStore.screen === "WorkoutHistory" ? (
    <WorkoutHistory />
  ) : (
    <CurrentWorkout />
  );
});
