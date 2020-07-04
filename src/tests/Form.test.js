import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import Form from '../components/Form';
import renderer from 'react-test-renderer';

describe('<Form />', () => {

    it('matches the snapshot', () => {
        const tree = renderer.create(<BrowserRouter><Form /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a form', () => {
        const wrapper = shallow(<Form />); 
        expect(wrapper.exists('form')).toEqual(true);
    } )


    
    it('should have 3 select options', () => {
        const wrapper = shallow(<Form />); 
        expect(wrapper.find('select').length).toEqual(3);
    } )



    it('On change the value should change', () => {
        const wrapper = mount(<BrowserRouter><Form /></BrowserRouter>); 
        wrapper.find('select').at(0).simulate('change', { target: { name: 'playersNumber', value: 3 } });
        expect(wrapper.find('select').at(0).prop('value')).toEqual(3);
    })

});