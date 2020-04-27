import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme'
import GamePage from '../containers/GamePage'
describe('<GamePage />', () => {


    it('should render GamePage div', () => {
        const wrapper = shallow(<GamePage  required={true}
    match={{params: {playersNumber: 1}, category: 'General Knowledge', difficulty:'medium'}}/>); 
        expect(wrapper.exists('.GamePage')).toEqual(true);
    } )


    
    


  })