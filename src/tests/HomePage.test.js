import React from 'react';
import { shallow, mount } from 'enzyme';
import HomePage from '../containers/HomePage';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom';


describe('<HomePage />', () => {

    it('matches the snapshot', () => {
        const tree = renderer.create(<BrowserRouter><HomePage /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a Form componeent', () => {
        const wrapper = shallow(<HomePage  />); 
        expect(wrapper.exists('Form')).toEqual(true);
    });
})


























