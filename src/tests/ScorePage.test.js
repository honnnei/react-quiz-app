import React from 'react'
import { BrowserRouter,  MemoryRouter, Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme'
import ScorePage from '../containers/ScorePage'


describe('ScorePage', () => {


    it('should render main Question div', () => {
        const wrapper = mount( <ScorePage    /> )
    
        console.log(wrapper.state())
  
      expect(wrapper.exists('.scores-container')).toEqual(true);
     });
});
