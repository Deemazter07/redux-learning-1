import * as actions from "./actionTypes";


export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payLoad: {
      description
  }
});

export const bugResolved = id =>({
  type: actions.BUG_RESOLVED,
  payload: {
    id: id
  }
})
