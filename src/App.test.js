import React from 'react';
import App from './App';
import configureMockStore from 'redux-mock-store';
import { shallow, mount, render } from 'enzyme';

const mockStore = configureMockStore();
const initialState = {
  discard: {
    queue: []
  }
};

describe('App Component', () => {
  const store = mockStore(initialState);
  test('should shallow correctly' , () => {
    const wrapper = shallow(<App store={store} />)
    expect(wrapper).toMatchSnapshot();
  });
  test('should mount correctly' , () => {
    const wrapper = mount(<App store={store} />)
    expect(wrapper).toMatchSnapshot();
  });
  test('should render correctly' , () => {
    const wrapper = render(<App store={store} />)
    expect(wrapper).toMatchSnapshot();
  });
  test('should format 12100 as "12,100"' , () => {
    const wrapper = shallow(<App store={store} />)
    expect(wrapper.dive().instance().formatScore(12100)).toEqual('12,100');
  });
});
