import React from 'react'
import { BrowserRouter,  MemoryRouter, Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme'
import ScorePage from '../containers/ScorePage'


describe('ScorePage', () => {

  let dumbieState = {
    stateFinal: {
      playersNumber: "2",
      userNames:{0: "senorita", 1: "Marta"},
      userScores:{s: 0, se: 0, sen: 0, seno: 0, senor: 0, senori: 0, senorit: 0, senorita: 0, M: 0, Ma: 0, Mar: 0, Mart: 0, Marta: 0}
    },
    userScores:{s: 0, se: 0, sen: 0, seno: 0, senor: 0, senori: 0, senorit: 0, senorita: 0, M: 0, Ma: 0, Mar: 0, Mart: 0, Marta: 0}
    
  }
  let wrapper;
  beforeEach(() => {
      wrapper = shallow(<ScorePage 
          match={{
              isExact: true,
              params: {qNumber: "0"},
              path: "/question/:qNumber",
              url: "/question/0"}} 
          location={{state: dumbieState}}/>);
  });

    it('should render main Question div', () => {
       expect(wrapper.exists('.scores-container')).toEqual(true);
     });

     it('should only render one h2, with winner or not', () => {
      let wrap = mount(<ScorePage 
        match={{
            isExact: true,
            params: {qNumber: "0"},
            path: "/question/:qNumber",
            url: "/question/0"}} 
        location={{state: dumbieState}}/>);
        expect(wrap.find('h2')).toHaveLength(1)
    });

});
