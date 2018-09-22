
export const setDiscardQueue = (queue) => ({
  type: "SET_DISCARD_QUEUE",
  payload: {
    queue
  }
});

export const addToDiscardQueue = (index) => ({
  type: "ADD_TO_DISCARD_QUEUE",
  payload: {
    index
  }
});

export const removeFromDiscardQueue = (index) => ({
  type: "REMOVE_FROM_DISCARD_QUEUE",
  payload: {
    index
  }
});