import React from 'react';
import { render } from '@testing-library/react';
import PastScoresPage from '../containers/PastScoresPage';
import { shallow, mount } from 'enzyme';

describe('PastScoresPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PastScoresPage />);
  });

  test('renders Navbar', () => {
    // expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });

});