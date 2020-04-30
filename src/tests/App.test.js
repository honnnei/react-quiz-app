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
    let wrap = mount(<App />);                                 
    let route = wrap.find(<Route path='/' exact/>);
    expect(route).toBeTruthy();
   });
   
   it('Route to Question is exact', () => {   
    let wrap = mount(<App />);                                       
    let route = wrap.find( <Route path='/question/:qNumber' exact/>);
    expect(route).toBeTruthy();
   });

   it('Route to Next Question is exact', () => {   
    let wrap = mount(<App />);                                       
    let route = wrap.find( <Route path='/nextquestion/:previousQuestionNum' exact/>);
    expect(route).toBeTruthy();
   });
   it('Route to ScorePage is exact', () => {   
    let wrap = mount(<App />);                                       
    let route = wrap.find( <Route path='/scores' exact/>);
    expect(route).toBeTruthy();
   });
  

  // it('redirects to GamePage', () => {
  //   let wrapper = mount(<App/>)
  //   expect(wrapper.find(Route).prop('location').render).toEqual("{(props) => <GamePage {...props} />}")
  // })


});