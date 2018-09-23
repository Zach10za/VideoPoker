import reducer from './discard';

describe("Discard Reducers", () => {
  const initialState = {
    queue: []
  }
  test('should set the queue to [1,2,3]', () => {
    const action = {
      type: 'SET_DISCARD_QUEUE',
      payload: {
        queue: [1,2,3]
      }
    };
    expect(reducer(initialState, action)).toMatchObject({
      ...initialState,
      queue: [1,2,3]
    });
  });
  test('should 2 add to queue', () => {
    const action = {
      type: 'ADD_TO_DISCARD_QUEUE',
      payload: {
        index: 2
      }
    };
    expect(reducer(initialState, action)).toMatchObject({
      ...initialState,
      queue: [2]
    });
  });
  test('should remove 2 from queue', () => {
    const state = {
      queue: [1,2,3]
    }
    const action = {
      type: 'REMOVE_FROM_DISCARD_QUEUE',
      payload: {
        index: 2
      }
    };
    expect(reducer(state, action)).toMatchObject({
      ...initialState,
      queue: [1,3]
    });
  });
});