import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Navbar from '../components/Navbar';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('renders Navbar', () => {
    expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });

  // test("render a button with text of 'increment'", () => {
  //   expect(wrapper.find('#increment-btn').text()).toBe('Increment Me!');
  // });

  // test("render the initial value of state in a div", () => {
  //   expect(wrapper.find("#counter-value").text()).toBe("0");
  // });

  // test("render the click event of increment button and increment counter value", () => {
  //   wrapper.find('#increment-btn').simulate('click');
  //   expect(wrapper.find('#counter-value').text()).toBe("1");
  // });

});