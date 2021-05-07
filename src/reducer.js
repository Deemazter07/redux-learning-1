import * as actions from "./actionTypes";

let lastId = 0;

export default function reducer(state = [], action) {

// pake switch case
  switch (action.type) {
    case actions.BUG_ADDED:
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payLoad.description,
        resolved: false
      }
    ];

    case actions.BUG_REMOVED:
        return state.filter(bug => bug.id !== action.payLoad.id);

    case actions.BUG_RESOLVED:
        return state.map(bug =>
           bug.id !== action.payload.id ? bug : {...bug, resolved: true});

    default:
    return state;
  }

// Pake if else
  // if (action.type === "bugAdded") {
  //   return [
  //     ...state,
  //     {
  //       id: ==lastId,
  //       description: action.payLoad.description,
  //       resolved: false
  //     }
  //   ];
  //   else if (action.type === "bugRemoved") {
  //     return state.filter(bug => bug.id !== action.payLoad.id);
  //
  //     return state;
  //   }
  // }
}
