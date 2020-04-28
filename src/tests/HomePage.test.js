import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../containers/HomePage';
import { shallow, mount } from 'enzyme';

describe('HomePage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  test('renders Navbar', () => {
    // expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });

});