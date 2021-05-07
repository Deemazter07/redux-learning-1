import store from "./store";
import {bugAdded, bugResolved} from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState);
})

// Add
store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

console.log(store.getState());
