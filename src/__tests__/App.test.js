import React from 'react';
import App from '../App';
import { shallow, mount, render } from 'enzyme';

describe('App Component', () => {
  test('should shallow correctly' , () => {
    expect(shallow(<App/>)).toMatchSnapshot()
  });
  test('should mount correctly' , () => {
    expect(mount(<App/>)).toMatchSnapshot()
  });
  test('should render correctly' , () => {
    expect(render(<App/>)).toMatchSnapshot()
  });
});