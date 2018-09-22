
export const setToDiscard = (toDiscard) => ({
  type: "SET_TO_DISCARD",
  payload: {
    toDiscard
  }
});

export const addToDiscard = (index) => ({
  type: "ADD_TO_DISCARD",
  payload: {
    index
  }
});

export const removeToDiscard = (index) => ({
  type: "REMOVE_TO_DISCARD",
  payload: {
    index
  }
});