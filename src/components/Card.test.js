import React from 'react';
import Card from './Card';
import configureMockStore from 'redux-mock-store';
import { shallow, mount, render } from 'enzyme';

const mockStore = configureMockStore();
const initialState = {
  discard: {
    queue: []
  }
};
const props = {
  index: 1,
  value: 12,
  suit: 'hearts',
  reset: false
}

describe('Card Component', () => {
  const store = mockStore(initialState);
  test('should shallow correctly' , () => {
    const card = shallow(<Card store={store} {...props} />)
    expect(card).toMatchSnapshot();
  });
  test('should mount correctly' , () => {
    const card = mount(<Card store={store} {...props} />)
    expect(card).toMatchSnapshot();
  });
  test('should render correctly' , () => {
    const card = render(<Card store={store} {...props} />)
    expect(card).toMatchSnapshot();
  });
});