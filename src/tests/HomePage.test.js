import React from 'react'
import { shallow, mount } from 'enzyme'
import HomePage from '../containers/HomePage'


describe('<HomePage />', () => {

    it('should render a Form componeent', () => {
        const wrapper = shallow(<HomePage  />); 
        expect(wrapper.exists('Form')).toEqual(true);
    } )
})

























