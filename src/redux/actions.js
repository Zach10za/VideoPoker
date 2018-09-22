

export const buildAndShuffleDeck = () => ({
  type: "BUILD_AND_SHUFFLE_DECK"
});

export const discardAndScore = () => ({
  type: "DISCARD_AND_SCORE"
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

export const resetAndDeal = () => ({
  type: "RESET_AND_DEAL"
});