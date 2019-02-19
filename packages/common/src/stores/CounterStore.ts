import { observable } from "mobx";
import { createContext } from "react";

class CounterStore {
  @observable count = 0;
}

export const CounterStoreContext = createContext(new CounterStore());
