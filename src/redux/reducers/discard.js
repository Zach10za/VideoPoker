const initialState = {
  queue: []
};

export default function( state = initialState, action ) {
  switch (action.type) {
    case "SET_DISCARD_QUEUE": {
      const { queue } = action.payload;
      return {
        ...state,
        queue
      }
    }
    case "ADD_TO_DISCARD_QUEUE": {
      const { index } = action.payload;
      let queue = state.queue.concat([index]);
      return {
        ...state,
        queue
      }
    }
    case "REMOVE_FROM_DISCARD_QUEUE": {
      const { index } = action.payload;
      let queue = state.queue.filter(item => item !== index);
      return {
        ...state,
        queue
      }
    }
    default:
      return state;
  }
}
  