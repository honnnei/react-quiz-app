import React from 'react';
import { render } from '@testing-library/react';
import PastScore from '../components/PastScore';
import { shallow, mount } from 'enzyme';

describe('PastScore', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PastScore />);
  });

  test('renders Navbar', () => {
    // expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });

});