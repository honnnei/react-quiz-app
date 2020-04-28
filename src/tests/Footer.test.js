import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  test('renders Navbar', () => {
    // expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });

});