
const initialState = {
  toDiscard: []
};

export default function( state = initialState, action ) {
  switch (action.type) {
    case "SET_TO_DISCARD": {
      const { toDiscard } = action.payload;
      return {
        ...state,
        toDiscard
      }
    }
    case "ADD_TO_DISCARD": {
      const { index } = action.payload;
      let toDiscard = state.toDiscard
      toDiscard.push(index);
      return {
        ...state,
        toDiscard
      }
    }
    case "REMOVE_TO_DISCARD": {
      const { index } = action.payload;
      let toDiscard = state.toDiscard
      toDiscard.splice(state.toDiscard.indexOf(index), 1);
      return {
        ...state,
        toDiscard
      }
    }
    default:
      return state;
  }
}
