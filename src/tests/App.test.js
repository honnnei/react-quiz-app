import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Navbar from '../components/Navbar';
import { Route } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('renders Navbar', () => {
    expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });

  test('contains Routes', () => {
    expect(wrapper.containsMatchingElement(<Route />)).toEqual(true);
  });

  test('contains 5 Routes', () => {
    expect((wrapper.find('Route').length)).toEqual(5);
  });

  it('Route to HomePage is exact', () => {                                       
    let route = wrapper.find("[path='/']");
    expect(route).prop('exact').toBeTruthy();
   });

   it('Route to Question is exact', () => {                                       
    let route = wrapper.find("[path='/question/:qNumber']");
    expect(route).prop('exact').toBeTruthy();
   });
  
   it('Route to NextQuestion is exact', () => {                                       
    let route = wrapper.find("[path='/nextquestion/:previousQuestionNum]");
    expect(route).prop('exact').toBeTruthy();
   });

   it('Route to ScorePage is exact', () => {                                       
    let route = wrapper.find("[path='/scores']");
    expect(route).prop('exact').toBeTruthy();
   });

  it('includes Route to ScorePage', () => {                                       
    let route = wrapper.find("[path='/scores']");
    expect(route).prop('component').toEqual('ScorePage');
    // expect(wrapper.find("[path='/scores']")).toBeTruthy();
   });

  it('redirects to GamePage', () => {
    let wrapper = mount(<App/>)
    expect(wrapper.find(Route).prop('location').render).toEqual("{(props) => <GamePage {...props} />}")
  })

});